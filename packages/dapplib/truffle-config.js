require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name riot saddle upgrade half end army general'; 
let testAccounts = [
"0xf3a9da0967eca1c195b02a7f32e790c9e820362ae0bfc6c3dc09d96374068ff8",
"0x6a65a36d346f10767a4e836fe335f013e4b0acc277dcab1365ba6d2d151ea208",
"0xa480a87a2ca59d24bcc9dbd0506dec77260ac9d9851f45cd5139f12511602603",
"0x54efb05c907aea97903fe929b5338c4e1b520b180de44c3a1a020d2bc751c424",
"0x6acee159337e80e1fbbffdabf52b1b8bc573722f976b39b534b4bd941a2cea23",
"0xed7c01a7a504de613a587cdc7896ae819293acd6a2ed12878b0421c841b45125",
"0xc2f4757a4f4a623248fc7b1ab56a09df64371f9da91c8602d5ef120c5b489f27",
"0x2dce36fc6c3a956c70bc211487c90d210c2e2886dfc277f6ec720dde8ea52529",
"0x36168d3c0757fcc944fa195237b02e77a7f57a2da7fc6829318d56959e3aa876",
"0x5c5a03c4e928a5d2f72644c80bac19651a5c485b7b271cb0984c3783c97dac07"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


