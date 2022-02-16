

// Abyiss Java Script client library
// author: abyiss llc
//

// This library requires the axios library
const axios = require('axios').default;

// This is the begining of the abyiss class
class abyiss
{

    constructor(apiKey)
    {
        this.axi = axios.create({
            baseURL : 'https://api.abyiss.com',
            headers : {'apiKey' : apiKey}
        });

        this.ver = 'v1';
    }

    // This is the basic ping function
    async ping()
    {
        return await this.axi.get('/ping')
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    // These two functions get exchange data
    async get_all()
    {
        return await this.axi.get(this.ver + '/exchanges')
            .then(function(res) {
                // console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }
    async get_exchange(exchange)
    {
        return await this.axi.get(this.ver + '/' + exchange)
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    async get_status(exchange)
    {
        return await this.axi.get(this.ver + '/' + exchange + '/status')
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    async get_markets(exchange)
    {
        return await this.axi.get(this.ver + '/' + exchange + '/markets')
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    async get_markets_details(exchange, market)
    {
        return await this.axi.get(this.ver + '/' + exchange + '/' + market)
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    async currentPrice(exchange, market)
    {
        return await this.axi
            .get(this.ver + '/' + exchange + '/' + market + '/currentPrice/')
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    async snapshot(exchange, market)
    {
        return await this.axi
            .get(this.ver + '/' + exchange + '/' + market + '/snapshot/')
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    // market data
    async aggregates(exchange, market, time)
    {
        return await this.axi
            .get(this.ver + '/' + exchange + '/' + market + '/aggregates/' +
                 time + 'm')
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    async lastAggregates(exchange, market, time)
    {
        return await this.axi
            .get(this.ver + '/' + exchange + '/' + market + '/lastAggregates/' +
                 time + 'm')
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    async trades(exchange, market)
    {
        return await this.axi
            .get(this.ver + '/' + exchange + '/' + market + '/trades')
            .then(function(res) {
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    async lastTrade(exchange, market)
    {
        return await this.axi
            .get(this.ver + '/' + exchange + '/' + market + '/tradesTrade')
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    async quotes(exchange, market)
    {
        return await this.axi
            .get(this.ver + '/' + exchange + '/' + market + '/quotes')
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    async orders(exchange, market)
    {
        return await this.axi
            .get(this.ver + '/' + exchange + '/' + market + '/orders')
            .then(function(res) {
                console.log(res.data)
                return res.data
            })
            .catch(function(err) {
                console.log(err)
                return err
            })
    }

    // This is the end of the abyiss class
}

module.exports = abyiss

