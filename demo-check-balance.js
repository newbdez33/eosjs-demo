Eos = require('eosjs')

var httpEndpoint = "https://api.eosnewyork.io";
var chainId = "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906";
var wif = "";
eos = Eos({httpEndpoint, chainId, wif})

var public_key = "EOS868QZgR1EGd6MscpGMNdGbuun3FWGiLSx12r7V8GgBJFUQjnra";

demo(public_key);
async function demo(public_key) {
    var accounts = await eos.getKeyAccounts(public_key);
    var account = accounts.account_names[0];
    var balance = await eos.getCurrencyBalance('eosio.token', account, 'EOS')
    console.log('Balance', balance)
}
