require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan radar pulse column hidden kitchen metal gauge'; 
let testAccounts = [
"0xc6924bb9ec27bb8386620fc9fce826b7272cde5bf1a7317c0b360e3870edd899",
"0x083874f3a77e1a1c86653ef2d40d2fdac0e27a2b0b3674593b51aeb71ad3f44e",
"0xeeaebd146965e527225fdae666a33d31029d2200c455e017b4d141718ce65e91",
"0xfc510c80c2bd24b40612971bbff7de56c9a1a1d52c04b7e299c17af1b93f7b9e",
"0x308e65f742067bb167dbeeb58f20297a63df947da8a75ca73036421ad6858cc6",
"0xc7c22f6262575a8d191f0261eabb3bea5f70912986697ec5c40374d3fbca7c96",
"0x870ef9bb520ac5d93fcc54c48100b17e88df7ae427444e347df6177fc772b076",
"0xa156bb494e54abc5a46ab81881f826817793f025c0a43d56aef92de5b9a31a58",
"0xcc0088089cc18fd8a3937a1e11f6f9fc7cfcacf454938f535697962e1bc96f73",
"0x37c4d0adae782f98d88fb0305a632b52394e2a585f08674cc92b509d338a9fb0"
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


