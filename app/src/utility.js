/**
 * Helper functions
 */


 import axios from 'axios';
 

// Process data to match with GraphQL schema def
async function processData(data) {
  let respObj = [];
  for (let i = 0; i < data.length; i++) {
    respObj.push({
      name: data[i].name,
      email: data[i].email,
      username: data[i].username,
      address : {
          street: data[i].address.street,
          city: data[i].address.city,
          zipcode: data[i].address.zipcode
      }
    })
  }
  return respObj;
}
 
 const fetchData = async(apiEndpoint, redisClient, key) => {
  let cacheVal = await redisClient.get(key);
  // If cache found, use cache instead of hitting backend
  if (cacheVal) {
    console.log("*** Cache Hit ***", (cacheVal));
    return JSON.parse(cacheVal);
  } else {
    console.log("** Cache Miss **", key);
    const response =  await axios.get(apiEndpoint);
    let respData = await processData(response.data);
    redisClient.set([key, JSON.stringify(respData)]);
    return respData;
  }
};


export {
  fetchData
}