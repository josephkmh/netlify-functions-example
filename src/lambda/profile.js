import fetch from "node-fetch";

const API_ENDPOINT = "https://bwi.3yourmind.com/api/v2.0/my-profile/profile/";

exports.handler = async (event, context, callback) => {
    return fetch(API_ENDPOINT, {
        headers: {
            Authorization: `Token 01a3c578766d54984790415c7b7c649241fbcc68`,
        },
    })
        .then(response => callback(null, {
            statusCode: 200,
            headers: {
                "Content-type": "appplication/json"
            },
            body: response
        })
        .catch((error) => ({ statusCode: 422, body: String(error) }));
};
