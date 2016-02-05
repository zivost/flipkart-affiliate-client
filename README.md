# flipkart-affiliate-client
[![NPM version](https://badge.fury.io/js/flipkart-affiliate-client.svg)](https://www.npmjs.com/package/flipkart-affiliate-client) [![Build Status](https://travis-ci.org/nigharsh/flipkart-affiliate-client.svg?branch=master)](https://travis-ci.org/nigharsh/flipkart-affiliate-client)

[![NPM](https://nodei.co/npm/flipkart-affiliate-client.png?mini=true)](https://nodei.co/npm/flipkart-affiliate-client/)

un-official client for [Flipkart Affiliates API](https://affiliate.flipkart.com/api-docs/)

## Installation
Install using npm:
```sh
npm install flipkart-affiliate-client
```

## Usage
Require library
```javascript
var affiliate = require('flipkart-affiliate-client');
```
Create client
```javascript
var client = affiliate.createClient({
  FkAffId: '(affiliate_id)',
  FkAffToken: '(affiliate_token)',
  responseType: '(json or xml)'
});
```
## Examples
examples based on usage
#### Category Feed
```javascript
client.getCategoryFeed({
  trackingId: 'xxxxx'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
```
#### Product Feed
```javascript
client.getProductsFeed({
  url: '(url obtained from Category Feed)'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
```
#### Search Query based on Keywords
```javascript
client.keywordSearch({
    query: "iphone",
    resultCount: "1"
  }, function(err, results){
    if(err){
      console.log(err);
    } else{
      console.log(results);
    }
});
```
#### Search Query based on Product
```javascript
client.idSearch({
  id: "MOBDPPZZPXVDJHSQ"
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
```
#### All Offers
```javascript
client.getAllOffers(null,function(err, resp){
  if(!err){
    console.log(resp);
  }else{
    console.log(err);
  }
});
```
#### Deals of the Day (DOTD) Offer
```javascript
client.getDealsOfDay(null,function(err, resp){
  if(!err){
    console.log(resp);
  }else{
    console.log(err);
  }
});
```
#### Orders Report
```javascript
client.getOrdersReport({
  startDate: '2015-10-22',
  endDate: '2016-02-04',
  status: 'cancelled',
  offset: '0'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
```
#### App Install Report
```javascript
client.getAppInstReport({
  startDate: '2015-10-22',
  endDate: '2016-1-04',
  status: 'approved'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
```
