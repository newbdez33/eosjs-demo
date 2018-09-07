Eos = require('eosjs')

/*
{"msg": "succeeded", "keys": {"active_key": {"public": "EOS6Ete24f8quivyjrNjy4EhWdeT7qSWLmW48Q9Lv3zDjawWwR88F", "private": "5KQmKdDRcsMwFjNJUk8eYrdrWWy3sdXaGVAckyRKCKTrRC8a7iT"}}, "account": "upworkdemo11"}
{"msg": "succeeded", "keys": {"active_key": {"public": "EOS6rEN6iNm6R6aHa8noqomLsLtf9JATyKpiaNJyUNwXnN2bcGZX8", "private": "5KgfgUtMehfnLh3Vj3QAdN7gbVs6L6fKTQ8xydfZK9esgDmkz3C"}}, "account": "upworkdemo22"}
*/

var httpEndpoint = "https://api-kylin.eoslaomao.com";
var chainId = "5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191";
var wif = "5KQmKdDRcsMwFjNJUk8eYrdrWWy3sdXaGVAckyRKCKTrRC8a7iT";
eos = Eos({httpEndpoint: httpEndpoint, chainId: chainId, keyProvider: wif, broadcast: true, sign: true})

/*
this is the result of this demo i did before
https://tools.cryptokylin.io/#/tx/fde455d3b12547e7741fac31846a49e4937c0083957ec1327b341974f1a2c31a
*/
demo();
async function demo() {

    var creator = "upworkdemo11";
    var name = "upworkdemo55";
    var owner_key = "EOS6Ete24f8quivyjrNjy4EhWdeT7qSWLmW48Q9Lv3zDjawWwR88F";
    var active_key = "EOS6Ete24f8quivyjrNjy4EhWdeT7qSWLmW48Q9Lv3zDjawWwR88F";
    var stake_cpu_quantity = '0.1000 EOS';
    var stake_net_quantity = '0.1000 EOS';
    var bytes = 4000;
    var transfer = 0;

    eos.transaction(tr => {
        tr.newaccount(creator, name, owner_key, active_key)
        tr.buyrambytes(creator, name, bytes)
        tr.delegatebw(creator, name, stake_net_quantity, stake_cpu_quantity, transfer)
    }).then((response) => {
        console.log(response)
        //resolve(response)
    }).catch((err) => {
        console.log(err)
        //reject(err)
    })
    
}
