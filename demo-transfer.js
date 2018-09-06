Eos = require('eosjs')

/*
{"msg": "succeeded", "keys": {"active_key": {"public": "EOS6Ete24f8quivyjrNjy4EhWdeT7qSWLmW48Q9Lv3zDjawWwR88F", "private": "5KQmKdDRcsMwFjNJUk8eYrdrWWy3sdXaGVAckyRKCKTrRC8a7iT"}}, "account": "upworkdemo11"}
{"msg": "succeeded", "keys": {"active_key": {"public": "EOS6rEN6iNm6R6aHa8noqomLsLtf9JATyKpiaNJyUNwXnN2bcGZX8", "private": "5KgfgUtMehfnLh3Vj3QAdN7gbVs6L6fKTQ8xydfZK9esgDmkz3C"}}, "account": "upworkdemo22"}
*/

var httpEndpoint = "https://api-kylin.eoslaomao.com";
var chainId = "5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191";
var wif = "5KQmKdDRcsMwFjNJUk8eYrdrWWy3sdXaGVAckyRKCKTrRC8a7iT";
eos = Eos({httpEndpoint: httpEndpoint, chainId: chainId, keyProvider: wif})

/*
this is the result of this demo i did before
https://tools.cryptokylin.io/#/tx/fde455d3b12547e7741fac31846a49e4937c0083957ec1327b341974f1a2c31a
*/
demo();
async function demo() {
    options = {
        authorization: 'upworkdemo11@active',
        broadcast: true,
        sign: true
    }
    eos.transfer('upworkdemo11', 'upworkdemo22', '1.0000 EOS', 'test', options, (error, result) => {
        if (error != null) {
            console.log(error);
        }else {
            console.log(result);
        }
        
    });
    
}
