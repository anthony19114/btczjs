/*
config.js - Configuration for ZENCash Coin
*/

module.exports = {
  mainnet: {
//    messagePrefix: 'ZCash main net',
messagePrefix: '\x18Zcash Signed Message:\n',
  bip32: {
      public: '0488b21e',
//      private: '0488ade4'
      private: '05358394'
   },
    pubKeyHash: '1cb8',
    scriptHash: '1cbd',
    zcPaymentAddressHash: '169a', // Private z-address
    zcSpendingKeyHash: 'ab36', // Spending key
    wif: '80'
  },
  testnet: {
    wif: 'ef',
    pubKeyHash: '2098'
  }
};
