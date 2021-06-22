import React, { useState, useEffect } from 'react';
import "./App.css";
import "./spotify.css";
import axios from "axios";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import genres from './components/genres.js';
import Slider from '@material-ui/core/Slider';
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles({
    buttonStyle: {

        marginTop: '10px',
    },
    selectStyle: {
        width: '200px',
        marginTop: '10px',
    },
    sliderStyle: {
        width: '200px',
        color: '#608db1',
    },
    labelStyle: {
        fontSize: '5px',
        marginBottom: '5px'
    },
    loading: {
        margin: '10px',
        display: 'flex',
        justifyContent: 'center'
    }


});

//曲のキーを格納した配列
const keys = [{ key: 'C', id: 0 },
{ key: 'D♭/C#', id: 1 },
{ key: 'D', id: 2 },
{ key: 'E♭/D#', id: 3 },
{ key: 'E', id: 4 },
{ key: 'F', id: 5 },
{ key: 'F♯/G♭', id: 6 },
{ key: 'G', id: 7 },
{ key: 'A♭/G#', id: 8 },
{ key: 'A', id: 9 },
{ key: 'B♭/A#', id: 10 },
{ key: 'B', id: 11 }];

function Spotify() {
    //Muiのstyle
    const classes = useStyles();
    //プルダウンの値を格納
    const [genre, setGenre] = useState('rock');
    const [key, setKey] = useState(0);
    const [mode, setMode] = useState(1);


    //プルダウンで選択した値を表示し、httpリクエストのクエリに代入
    const changeGenre = (event) => {
        setGenre(event.target.value);
    };
    const changeKey = (event) => {
        setKey(event.target.value);
    };
    const changeMode = (event) => {
        setMode(event.target.value)
    };
    //人気度についての変数、関数
    const [popularity, setPopularity] = useState([1, 100]);
    const minPopularity = popularity[0];
    const maxPopularity = popularity[1];

    const handleChange = (event, newValue) => {
        setPopularity(newValue);
    };
    /**検索して表示する曲数を管理 */
    /** 一回「search　tracks」がクリックされたらずっとtrue*/
    const [firstClick, setFirstClick] = useState(false);
    /**検索結果件数を表示 */
    const [numOfResult, setNumOfResult] = useState('');





    //loadingアイコン
    const [loading, setLoading] = useState(false);
    //access token の値を格納
    const [token, setToken] = useState("");

    //apiで取った[{},{}...]を格納
    const [tracks, setTracks] = useState([]);


    // tokenを発行し、権限を付与
    // 付与されたTokenをuseStateのtokenに代入し、値を保持
    const getAccessToken = () => {
        axios(`https://ht8fpsem7e.execute-api.us-east-2.amazonaws.com/dev/test`, {
            method: 'POST',
            headers: {
                'X-Api-Key': '045r0PNcx9F2nTxgywJL9vfeBur3oF51QJH18La3',
                'Content-Type': 'application/json; charaset=utf-8',
            },
        }).then(res => {
            setToken(res.data.access_token)
        });

    }
    //ページ更新時にアクセストークン取得
    useEffect(() => {
        console.log('useeffect running')
        getAccessToken();

    }, []);
    /** SpotifyApiにアクセスしてtrackデータを取得 */


    /** Access Tokenを入手して、変数tracksに格納 */
    const searchTracks = async () => {

        setLoading(true);
        await axios(`https://api.spotify.com/v1/recommendations?limit=10&market=JP&seed_genres=${genre}&target_key=${key}&target_mode=${mode}&min_popularity=${minPopularity}&max_popularity=${maxPopularity}&seed_tracks=1qUhUzVHqproHHETlYFDcU`, {
            method: "GET",
            headers: { 'Authorization': "Bearer " + token },
        })
            .then(res => {
                setFirstClick(true);
                setTracks(res.data.tracks);

            })
            .catch(error => {
                console.log(error.response);
                if (error.response.status === 401) {
                    getAccessToken();
                    console.log('access tokenが更新されました')
                };
            });

        setLoading(false);
    };

    useEffect(() => {
        console.log(tracks);
        if (tracks.length <= 0) {
            setNumOfResult('検索結果がありませんでした');
        } else if (tracks.length === 1) {
            setNumOfResult('1件の曲を表示')
        } else {
            setNumOfResult(`1~${tracks.length}件を表示`);
        }
    }, [tracks])

    return (
        <div className='mannaka'>

            <div className='searchOption'>
                {/* ジャンル検索　 */}

                <FormControl >
                    <InputLabel>ジャンル</InputLabel>
                    <Select
                        value={genre}
                        onChange={changeGenre}
                        className={classes.selectStyle}
                    >
                        {genres.map((genre) => (
                            <MenuItem value={genre} key={genre}  >{genre}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/* 楽曲のキー指定 */}
                <FormControl >
                    <InputLabel  >Key</InputLabel>
                    <Select
                        value={key}
                        onChange={changeKey}
                        className={classes.selectStyle}
                    >


                        {keys.map((key) => (
                            <MenuItem value={key.id} key={key.id} >{key.key}</MenuItem>
                        ))}

                    </Select>
                </FormControl>

                {/* メジャーorマイナーの指定 */}
                <FormControl >
                    <InputLabel >major/minor</InputLabel>
                    <Select
                        value={mode}
                        onChange={changeMode}

                        className={classes.selectStyle}
                    >
                        <MenuItem value='1'>Major</MenuItem>
                        <MenuItem value='0'>minor</MenuItem>
                    </Select>
                </FormControl>

                <div id='slider'>
                    <InputLabel className={classes.labelStyle}>知名度</InputLabel>
                    <Slider
                        className={classes.sliderStyle}
                        value={popularity}
                        onChange={handleChange}
                        valueLabelDisplay="auto"

                    />
                </div>
            </div>



            <div className='buttons'>
                {/* 検索ボタン */}
                <Button
                    variant="contained"
                    color='primary'
                    className={classes.buttonStyle}
                    onClick={searchTracks}
                    disabled={loading}
                >Search Tracks</Button>
            </div>




            {/* ローディングマークを表示 */}
            {loading && <div className={classes.loading}><CircularProgress color='secondary' size='6rem' /></div>}
            {/* 検索件数を表示 */}
            <p>{firstClick && numOfResult}</p>
            {/* apiで獲得した曲のデータをmapで回して表示 */}
            {tracks.map(track => (

                <div className='song' key={track.id} >
                    <p>曲名:{track.name}</p>
                    <p>アーティスト名:{track.artists[0].name}</p>
                    <p>知名度:{track.popularity}</p>


                    <iframe src={`https://open.spotify.com/embed/track/${track.id}`} id='iframe' height="100" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            ))
            }

        </div>

    );
};
export default Spotify;