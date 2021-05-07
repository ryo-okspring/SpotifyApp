 
    var axios = require('axios');
    var btoa = require('btoa');
    

exports.handler = async (event,context,callback) => {
    var client_id = 'c14dbd93871d4df5ae2daadac6b9aea2'; 
    var client_secret = '1ca90c4ebfb445bda075f8087b688279';
    
    const config = {
            headers: {"Content-Type": "application/x-www-form-urlencoded",
            'Authorization':
            "Basic " + btoa(client_id + ":" + client_secret),
               
            },
            data: "grant_type=client_credentials",
            method: "POST",
        };
    const url = "https://accounts.spotify.com/api/token";
    const data =  axios(url,config).then(({ data }) => {
            
            callback(null, {
                statusCode: 200,
                body:JSON.stringify(data)
            });
        })
        .catch(callback);
    console.log('data',data);
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Authorization':
            "Basic " + btoa(client_id + ":" + client_secret),
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify(data)
    };
   
    return data;
};

