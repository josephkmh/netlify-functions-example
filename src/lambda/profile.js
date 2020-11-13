import fetch from "node-fetch";

const API_ENDPOINT = "https://bwi.3yourmind.com/api/v2.0/my-profile/profile/";

exports.handler = async (event, context, callback) => {
    try {
        const profile = await fetch(API_ENDPOINT, {
            headers: {
                Authorization: `Token 01a3c578766d54984790415c7b7c649241fbcc68`,
            },
        });
        const data = await profile.json();
        callback(null, {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    } catch (error) {
        callback(error);
    }
};
