/**
 * 
 * GraphQL Resolver
 * 
 */

import axios from 'axios';
import redis from 'redis';
import asyncRedis from 'async-redis';
import {fetchData} from '../utility';

// Initialize Redis Client
const redisPort = process.env.REDIS_PORT || 6379;
const redisConfig = {
  port : redisPort,
  host: process.env.REDIS_HOST,
};


const client = redis.createClient(redisConfig);
const asyncRedisClient = asyncRedis.decorate(client);


const apiEndpoint = 'https://jsonplaceholder.typicode.com/users';

async function fetchDataFromBackend() {
  let result = await fetchData(apiEndpoint, asyncRedisClient, '123edsasd');
  console.log("*** DATA  ***", result);
  return result;
}


export default {
    Query: {
      People: () => fetchDataFromBackend()
    }
};