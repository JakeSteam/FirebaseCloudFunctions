const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello, this is the server!");
});

exports.uppercaseDeviceName = functions.https.onCall((data) => {
    if (data.manufacturer.length > 0) {
        return {
            result: data.manufacturer.toUpperCase
        };
    }
    return {
        result: "Unknown"
    };
});