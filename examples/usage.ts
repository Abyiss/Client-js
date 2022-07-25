import { Abyiss } from 'abyiss'

const A = new Abyiss('abyisscto')

async function showExchanges () {
  console.log(await A.exchanges())
}

async function aggregate () {
    console.log(await A.aggregates('coinbasepro', 'btc-usd', '1m', {limit: 2})) 
}

showExchanges()
aggregate()
