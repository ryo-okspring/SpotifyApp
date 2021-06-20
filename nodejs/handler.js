
const axios = require('axios');
const btoa = require('btoa');


exports.handler = async (event, context, callback) => {
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;

    const config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Authorization':
                "Basic " + btoa(client_id + ":" + client_secret),

        },
        data: "grant_type=client_credentials",
        method: "POST",
    };
    const url = "https://accounts.spotify.com/api/token";
    const result = axios(url, config).then(response => {

        return ({
            statusCode: 200,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization':
                    "Basic " + btoa(client_id + ":" + client_secret),
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: JSON.stringify(response.data)
        });
    }).catch(err => { console.log('err', err); });


    return result;
};

