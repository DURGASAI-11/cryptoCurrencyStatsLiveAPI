const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()
const PORT = process.env.PORT || 3000

const cryptoLinks1 = [
  'bitcoin',
  'ethereum',
  'cardano',
  'usd',
  'tether',
  'bnb',
  'xrp',
  'dogecoin',
  'solana',
  'tron',
  'polygon',
  'polkadot-new',
  'litecoin',
  'shiba-inu',
  'multi-collateral-dai',
  'toncoin',
  'wrapped-bitcoin',
  'bitcoin-cash',
  'avalanche',
  'unus-sed-leo',
  'chainlink',
]

const cryptoLinks2 = [
  'stellar',
  'binance-usd',
  'monero',
  'trueusd',
  'cosmos',
  'okb',
  'ethereum-classic',
  'hedera',
  'filecoin',
  'internet-computer',
  'mantle',
  'aptos',
  'arbitrum',
  'cronos',
  'vechain',
  'quant',
  'near-protocol',
  'optimism-ethereum',
  'the-graph',
  'xdc-network',
]
const cryptoLinks3 = [
  'algorand',
  'axie-infinity',
  'multiversx-egld',
  'the-sandbox',
  'stacks',
  'usdd',
  'immutable-x',
  'eos',
  'tezos',
  'theta-network',
  'apecoin-ape',
  'decentraland',
  'synthetix',
  'fantom',
  'bitcoin-sv',
  'injective',
  'render',
  'neo',
  'rocket-pool',
  'kava',
]
const cryptoLinks4 = [
  'kucoin-token',
  'flow',
  'paxos-standard',
  'conflux-network',
  'ecash',
  'chiliz',
  'gala',
  'pax-gold',
  'klaytn',
  'frax-share',
  'tether-gold',
  'pepe',
  'zcash',
  'iota',
  'bittorrent-new',
  'casper',
  'mina',
  'huobi-token',
  'terra-luna',
  'gatetoken',
]

const cryptoLinks5 = [
  'sui',
  'trust-wallet-token',
  'gemini-dollar',
  'sei',
  'gmx',
  'nexo',
  'arweave',
  'dash',
  'dydx',
  'apenft',
  'flare',
  'bone-shibaswap',
  'decimal',
  'wootrade',
  'zilliqa',
  'gnosis-gno',
  'basic-attention-token',
  '1inch',
  'astar',
  'mx-token',
  'helium',
]

app.get('/', (req, res) => {
  res.json('Welcome to the cryptocurrency API')
})

app.get('/cryptocurrenciesTop20', async (req, res) => {
  try {
    const articles = await Promise.all(
      cryptoLinks1.map(async (cryptoLink) => {
        try {
          const response = await axios.get(
            `https://coinmarketcap.com/currencies/${cryptoLink}/`,
          )
          const html = response.data
          const $ = cheerio.load(html)

          const symbolElement = $('span.cjeUNx')
          const priceElement = $('span.dxubiK')
          const elementName = $('span.iSrqCq')

          const symbol = symbolElement.text().trim()
          const price = priceElement.text().trim()
          const name = elementName.text().trim()

          const priceElements = $('dd.fRWxhs', html)
          const prices = priceElements
            .toArray()
            .map((element) => $(element).text().trim())

          const marketCapital = prices[0].split('$')[1]
          const volume24hrs = prices[1].split('$')[1]
          const volumeOrMarketCap24hrs = prices[2]
          const circulatingSupply = prices[3]
          const totalSupply = prices[4]
          const maxSupply = prices[5]
          const fullyDilutedMarketCap = prices[6]
          const source = 'coinmarketcap'

          return {
            symbol,
            price,
            name,
            marketCapital,
            volume24hrs,
            volumeOrMarketCap24hrs,
            circulatingSupply,
            totalSupply,
            maxSupply,
            fullyDilutedMarketCap,
            source,
          }
        } catch (error) {
          console.error('Error:', error)
          return null
        }
      }),
    )
    res.json(articles.filter((article) => article !== null))
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.get('/cryptocurrencies20to40', async (req, res) => {
  try {
    const articles = await Promise.all(
      cryptoLinks2.map(async (cryptoLink) => {
        try {
          const response = await axios.get(
            `https://coinmarketcap.com/currencies/${cryptoLink}/`,
          )
          const html = response.data
          const $ = cheerio.load(html)

          const symbolElement = $('span.cjeUNx')
          const priceElement = $('span.dxubiK')
          const elementName = $('span.iSrqCq')

          const symbol = symbolElement.text().trim()
          const price = priceElement.text().trim()
          const name = elementName.text().trim()

          const priceElements = $('dd.fRWxhs', html)
          const prices = priceElements
            .toArray()
            .map((element) => $(element).text().trim())

          const marketCapital = prices[0].split('$')[1]
          const volume24hrs = prices[1].split('$')[1]
          const volumeOrMarketCap24hrs = prices[2]
          const circulatingSupply = prices[3]
          const totalSupply = prices[4]
          const maxSupply = prices[5]
          const fullyDilutedMarketCap = prices[6]
          const source = 'coinmarketcap'

          return {
            symbol,
            price,
            name,
            marketCapital,
            volume24hrs,
            volumeOrMarketCap24hrs,
            circulatingSupply,
            totalSupply,
            maxSupply,
            fullyDilutedMarketCap,
            source,
          }
        } catch (error) {
          console.error('Error:', error)
          return null
        }
      }),
    )
    res.json(articles.filter((article) => article !== null))
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
app.get('/cryptocurrencies40to60', async (req, res) => {
  try {
    const articles = await Promise.all(
      cryptoLinks3.map(async (cryptoLink) => {
        try {
          const response = await axios.get(
            `https://coinmarketcap.com/currencies/${cryptoLink}/`,
          )
          const html = response.data
          const $ = cheerio.load(html)

          const symbolElement = $('span.cjeUNx')
          const priceElement = $('span.dxubiK')
          const elementName = $('span.iSrqCq')

          const symbol = symbolElement.text().trim()
          const price = priceElement.text().trim()
          const name = elementName.text().trim()

          const priceElements = $('dd.fRWxhs', html)
          const prices = priceElements
            .toArray()
            .map((element) => $(element).text().trim())

          const marketCapital = prices[0].split('$')[1]
          const volume24hrs = prices[1].split('$')[1]
          const volumeOrMarketCap24hrs = prices[2]
          const circulatingSupply = prices[3]
          const totalSupply = prices[4]
          const maxSupply = prices[5]
          const fullyDilutedMarketCap = prices[6]
          const source = 'coinmarketcap'

          return {
            symbol,
            price,
            name,
            marketCapital,
            volume24hrs,
            volumeOrMarketCap24hrs,
            circulatingSupply,
            totalSupply,
            maxSupply,
            fullyDilutedMarketCap,
            source,
          }
        } catch (error) {
          console.error('Error:', error)
          return null
        }
      }),
    )
    res.json(articles.filter((article) => article !== null))
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
app.get('/cryptocurrencies60to80', async (req, res) => {
  try {
    const articles = await Promise.all(
      cryptoLinks4.map(async (cryptoLink) => {
        try {
          const response = await axios.get(
            `https://coinmarketcap.com/currencies/${cryptoLink}/`,
          )
          const html = response.data
          const $ = cheerio.load(html)

          const symbolElement = $('span.cjeUNx')
          const priceElement = $('span.dxubiK')
          const elementName = $('span.iSrqCq')

          const symbol = symbolElement.text().trim()
          const price = priceElement.text().trim()
          const name = elementName.text().trim()

          const priceElements = $('dd.fRWxhs', html)
          const prices = priceElements
            .toArray()
            .map((element) => $(element).text().trim())

          const marketCapital = prices[0].split('$')[1]
          const volume24hrs = prices[1].split('$')[1]
          const volumeOrMarketCap24hrs = prices[2]
          const circulatingSupply = prices[3]
          const totalSupply = prices[4]
          const maxSupply = prices[5]
          const fullyDilutedMarketCap = prices[6]
          const source = 'coinmarketcap'

          return {
            symbol,
            price,
            name,
            marketCapital,
            volume24hrs,
            volumeOrMarketCap24hrs,
            circulatingSupply,
            totalSupply,
            maxSupply,
            fullyDilutedMarketCap,
            source,
          }
        } catch (error) {
          console.error('Error:', error)
          return null
        }
      }),
    )
    res.json(articles.filter((article) => article !== null))
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
app.get('/cryptocurrencies80to100', async (req, res) => {
  try {
    const articles = await Promise.all(
      cryptoLinks5.map(async (cryptoLink) => {
        try {
          const response = await axios.get(
            `https://coinmarketcap.com/currencies/${cryptoLink}/`,
          )
          const html = response.data
          const $ = cheerio.load(html)

          const symbolElement = $('span.cjeUNx')
          const priceElement = $('span.dxubiK')
          const elementName = $('span.iSrqCq')

          const symbol = symbolElement.text().trim()
          const price = priceElement.text().trim()
          const name = elementName.text().trim()

          const priceElements = $('dd.fRWxhs', html)
          const prices = priceElements
            .toArray()
            .map((element) => $(element).text().trim())

          const marketCapital = prices[0].split('$')[1]
          const volume24hrs = prices[1].split('$')[1]
          const volumeOrMarketCap24hrs = prices[2]
          const circulatingSupply = prices[3]
          const totalSupply = prices[4]
          const maxSupply = prices[5]
          const fullyDilutedMarketCap = prices[6]
          const source = 'coinmarketcap'

          return {
            symbol,
            price,
            name,
            marketCapital,
            volume24hrs,
            volumeOrMarketCap24hrs,
            circulatingSupply,
            totalSupply,
            maxSupply,
            fullyDilutedMarketCap,
            source,
          }
        } catch (error) {
          console.error('Error:', error)
          return null
        }
      }),
    )
    res.json(articles.filter((article) => article !== null))
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.get('/cryptocurrencies/:cryptoName', async (req, res) => {
  const cryptoName = req.params.cryptoName

  try {
    const response = await axios.get(
      `https://coinmarketcap.com/currencies/${cryptoName}/`,
    )
    const html = response.data
    const $ = cheerio.load(html)

    const symbolElement = $('span.cjeUNx')
    const priceElement = $('span.dxubiK')
    const elementName = $('span.iSrqCq')

    const symbol = symbolElement.text().trim()
    const price = priceElement.text().trim()
    const name = elementName.text().trim()

    const priceElements = $('dd.fRWxhs', html)
    const prices = priceElements
      .toArray()
      .map((element) => $(element).text().trim())

    const marketCapital = prices[0].split('$')[1]
    const volume24hrs = prices[1].split('$')[1]
    const volumeOrMarketCap24hrs = prices[2]
    const circulatingSupply = prices[3]
    const totalSupply = prices[4]
    const maxSupply = prices[5]
    const fullyDilutedMarketCap = prices[6]
    const source = 'coinmarketcap'

    const specificCrypto = {
      symbol,
      price,
      name,
      marketCapital,
      volume24hrs,
      volumeOrMarketCap24hrs,
      circulatingSupply,
      totalSupply,
      maxSupply,
      fullyDilutedMarketCap,
      source,
    }

    res.json(specificCrypto)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
