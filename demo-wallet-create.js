"use strict";
var request = require('request');

demo();
async function demo() {
    var url = 'http://127.0.0.1:12345/v1/wallet/create';

    var wallet_name = "mywallet3";
    var options = {
        url:  url,
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        json: wallet_name
    }
    request(options, function (err, response, payload) {
        if (err) {
            return console.error('post failed:', err);
        }
        console.log(payload);
    });
}