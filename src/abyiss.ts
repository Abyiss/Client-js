import axios from "axios";
import { endpoints } from "./endpoints"

class Query {
  limit?: number | undefined
  since?: number | undefined
}

export class Abyiss {
  apiKey: string;
  baseURL: string;

  constructor(apiKey = "", baseURL = "https://api.abyiss.com") {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
  }

  async build(route: string, query: Query = {}) {
    return (await this.fetch(this.composeURL(route, query))).data
  }

  composeURL(route: string, query: Query = {}) {
    const queryString = Object.entries({ apiKey: this.apiKey, ...query })
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    return `${this.baseURL}${route}?${queryString}`
  }

  async fetch(url: string) {
    return await axios.get(url)
  }

  async ping() {
    return await this.build(endpoints.ping)
  }

  // Reference Data Endpoints
  async exchanges() {
    return await this.build(`${endpoints.version}${endpoints.exchange}`)
  }

  async exchange(exchange: string) {
    return await this.build(`${endpoints.version}/${exchange}`)
  }

  async exchangeCount() {
    return await this.build(`${endpoints.version}${endpoints.exchange}${endpoints.count}`)
  }

  async exchangeStatus(exchange: string) {
    return await this.build(`${endpoints.version}/${exchange}${endpoints.status}`)
  }

  async markets(exchange: string) {
    return await this.build(`${endpoints.version}/${exchange}${endpoints.market}`)
  }

  async market(exchange: string, market: string) {
    return await this.build(`${endpoints.version}/${exchange}/${market}`)
  }
  
  // Market Data Endpoints
  async currentPrice(exchange: string, market: string) {
    return await this.build(`${endpoints.version}/${exchange}/${market}${endpoints.currentPrice}`)
  }

  async aggregates(exchange: string, market: string, timeframe : string = '5m', params: Query = {}) {
    return await this.build(`${endpoints.version}/${exchange}/${market}${endpoints.aggregate}/${timeframe}`, params)
  }

  async lastAggregate(exchange: string, market: string) {
    return await this.build(`${endpoints.version}/${exchange}/${market}${endpoints.lastAggregate}`)
  }

  async trades(exchange: string, market: string, params: Query = {}) {
    return await this.build(`${endpoints.version}/${exchange}/${market}${endpoints.trade}`, params)
  }

  async lastTrade(exchange: string, market: string) {
    return await this.build(`${endpoints.version}/${exchange}/${market}${endpoints.lastTrade}`)
  }

  async snapshot(exchange: string, market: string) {
    return await this.build(`${endpoints.version}/${exchange}/${market}${endpoints.snapshot}`)
  }

  async orderBook(exchange: string, market: string) {
    return await this.build(`${endpoints.version}/${exchange}/${market}${endpoints.orders}`)
  }
}
