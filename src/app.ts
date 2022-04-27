import { Network, OpenSeaPort } from 'opensea-js';
import * as Web3 from 'web3';

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main
})

const assets = await seaport.api.getAssets({
    search: 'zed', // string
    limit: 20,
    offset: 0
  }, 0);

  console.log(assets);