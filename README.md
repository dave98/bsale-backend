# BSale Backend

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Built with <a href="https://nestjs.com/" target="_blank">Nest.js</a>, a framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

BSale Backend is an API REST developed with [NestJs](https://github.com/nestjs/nest) using Sequelize - Typescript as intermediate ORM and MySql provided by BSale as data source. Original data structure was not affected by ORM Sync func.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

# Endpoint configuration

All interactions with BSale Backend must be done with HTTP request with JSON format.

## Get all categories

```js
GET /api/v1/category
```
### Parameters
- This endpoint does not require any other parameter.

### Results
- Returns an array with all categories, if no category is founded returns an empty array.

```json
[
  {
        "id": 1,
        "name": "bebida energetica"
    },
    {
        "id": 2,
        "name": "pisco"
    }
]
```

## Get a category
```js
GET /api/v1/category/{category-id}
```
### Parameters
- {category-id} should be replaced with a number as a valid category ID. 

### Results
- Returns an object with and id and a name. If provided parameter is invalid then a not found error response is sent.

```json
{
    "id": 5,
    "name": "snack"
}
```

## Get products

```js
GET /api/v1/products
```

### Parameters
- Without parameters this endpoint will return all products.
- Parameters available for this endpoint work as filters and their behavior is ACCUMULATIVE. Therefore, query will be filtered based on each of the parameter you have used and results might be shorter.
- → _name_ Allows filtering by product name. Returns all products with _name_ as  a subtring in product name.
- → _minprice_ Filter by product price. Returns all products with a price above _minprice_
- → _maxprice_ Filter by product price.  Returns all products with a price under _maxprice_
- If _minprice_ and _maxprice_ are used simultaneously, results will be within a range
- → _category_ Allows filtering by product category ID.  

### Examples
```js
GET /api/v1/product  // All avaliable products
GET /api/v1/product?name=cerveza // All available products with "cerveza" as  a subtring in product name
GET /api/v1/product?name=cerveza&minprice=700
GET /api/v1/product?name=cerveza&minprice=700&maxprice=900
GET /api/v1/product?name=cerveza&minprice=700&maxprice=900&category=6
```

### Results 
- Returns an array with all products that fitted with filter configuration, if no product is founded returns an empty array.

```json
[
    {
        "id": 98,
        "name": "Cerveza Escudo Normal LATA 350CC",
        "urlImage": "",
        "price": 600,
        "discount": 0,
        "category": {
            "id": 6
        }
    },
    {
        "id": 99,
        "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
        "urlImage": "",
        "price": 800,
        "discount": 0,
        "category": {
            "id": 6
        }
    }
]
```

## Get a product
```js
GET /api/v1/product/{product-id}
```
### Parameters
- {product-id} should be replaced with a number as a valid product ID. 

### Results
- Returns an object with and id, name, urlImage, price, discount and category.id . If provided parameter is invalid then a not found error response is sent.

```json
{
    "id": 5,
    "name": "ENERGETICA MR BIG",
    "urlImage": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
    "price": 1490,
    "discount": 20,
    "category": {
        "id": 1
    }
}
```

## Stay in touch

- Author - [Crazy Dave](https://www.linkedin.com/in/crazy-dave/)
- Website - [https://thecrazydave.vercel.app](https://thecrazydave.vercel.app)

## License

BSale Backend is under [MIT licensed](LICENSE).
