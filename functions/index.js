const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Example data");
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

exports.getRowCount = functions.https.onRequest((req, res) => {
    admin.firestore().collection("exampleTable").get().then(snapshot => {
        return {
            size: snap.size
        };
    }).catch(reason => {
        return {
            size: 0
        };
    })
});