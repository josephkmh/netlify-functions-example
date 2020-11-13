import fetch from "node-fetch";

const API_ENDPOINT = "https://bwi.3yourmind.com/api/v2.0/my-profile/profile/";

exports.handler = async (event, context) => {
    return fetch(API_ENDPOINT, {
        headers: {
            Authorization: `Token 01a3c578766d54984790415c7b7c649241fbcc68`,
        },
    })
        .then((response) => response.json())
        .then((data) => ({
            statusCode: 200,
            body: data,
        }))
        .catch((error) => ({ statusCode: 422, body: String(error) }));
};
