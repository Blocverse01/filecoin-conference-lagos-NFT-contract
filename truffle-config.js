require("babel-register");
require("babel-polyfill");
require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKeys = process.env.PRIVATE_KEYS || "";
//const mnemonic =  process.env.PRIVATE_KEYS || ""
console.log(process.env.PRIVATE_KEYS);

module.exports = {
  networks: {
    ganache_gui: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    ganache_cli: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    matic_mumbai: {
      provider: () =>
        new HDWalletProvider(
          privateKeys.split(","),
          `https://matic-mumbai.chainstacklabs.com`
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true,
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(","), // Array of account private keys
          `https://kovan.infura.io/v3/${process.env.INFURA_ID}` // Url to an Ethereum Node
        );
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 42,
      skipDryRun: true,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(","), // Array of account private keys
          `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}` // Url to an Ethereum Node
        );
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 4,
      skipDryRun: true,
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(","), // Array of account private keys
          `https://ropsten.infura.io/v3/${process.env.INFURA_ID}` // Url to an Ethereum Node
        );
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 3,
      skipDryRun: true,
    },
    main: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(","), // Array of account private keys
          `https://main.infura.io/v3/${process.env.INFURA_ID}` // Url to an Ethereum Node
        );
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 1,
    },

    matic_testnet: {
      provider: () =>
        new HDWalletProvider(
          privateKeys.split(","),
          `https://rpc-mumbai.maticvigil.com/v1/2acc378d9434f580cb7f3fe02558c749289c789e`
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true,
    },

    matic_mainnet: {
      provider: () =>
        new HDWalletProvider(
          privateKeys.split(","),
          `https://rpc-mainnet.maticvigil.com`
        ),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true,
    },

    bsc_testnet: {
      provider: () =>
        new HDWalletProvider(
          privateKeys.split(","),
          `https://data-seed-prebsc-2-s2.binance.org:8545`
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 80000,
      skipDryRun: true,
    },
    bsc_mainnet: {
      provider: () =>
        new HDWalletProvider(
          privateKeys.split(","),
          `wss://bsc-dataseed4.binance.org`
        ),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 3000,
      skipDryRun: true,
    },
    plugins: ["truffle-plugin-verify"],
    api_keys: {
      etherscan: process.env.ETHERSCAN_API_KEY,
    },
  },
  contracts_directory: "./contracts/",
  contracts_build_directory: "./abis/",
  migrations_directory: "./src/migrations/",
  test_directory: "./src/test/",
  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
