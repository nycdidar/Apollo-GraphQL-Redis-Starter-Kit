# Apollo GraphQL + Redis Starter Kit
## Installation

`docker-compose up -d`


Example Query:
Go to:  http://localhost:3010/
```
query {
  People {
    name
    email
    username
    address {
      street
      city
      zipcode
    }
  }
}
```




![GraphQLPlusRedis ](resources/grapql-playground.jpg "GraphQLPlusRedis")


Credit: https://www.apollographql.com/docs/apollo-server/getting-started/