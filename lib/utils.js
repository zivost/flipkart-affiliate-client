var genQueryParams = function (query, method, credentials) {
  var params = '';
  if (method === 'getCategoryFeed') {
    for(var pr in query){
      if(pr != 'trackingId'){
        params = params + pr + '=' + query[pr] + '&';
      }
    }
  } else {
    for(var pr in query){
        params = params + pr + '=' + query[pr] + '&';
    }
  }
  params = params.substring(0, params.length - 1);
  return params;
}



var genFlipkartUrl = function(query, credentials, method) {
  var url = '';
  if (method === 'keywordSearch') {
    preUrl = credentials.responseType === 'xml' ? 'https://affiliate-api.flipkart.net/affiliate/search/xml?' : 'https://affiliate-api.flipkart.net/affiliate/search/json?';
    url = preUrl + genQueryParams(query, method, credentials);
  }
  else if (method === 'idSearch') {
    preUrl = credentials.responseType === 'xml' ? 'https://affiliate-api.flipkart.net/affiliate/product/xml?' : 'https://affiliate-api.flipkart.net/affiliate/product/json?';
    url = preUrl + genQueryParams(query, method, credentials);
  }
  else if (method === 'getAllOffers') {
    preUrl = credentials.responseType === 'xml' ? 'https://affiliate-api.flipkart.net/affiliate/offers/v1/all/xml' : 'https://affiliate-api.flipkart.net/affiliate/offers/v1/all/json';
    url = preUrl;
  }
  else if (method === 'getDealsOfDay') {
    preUrl = credentials.responseType === 'xml' ? 'https://affiliate-api.flipkart.net/affiliate/offers/v1/dotd/xml' : 'https://affiliate-api.flipkart.net/affiliate/offers/v1/dotd/json';
    url = preUrl;
  }
  else if (method === 'getOrdersReport') {
    preUrl = credentials.responseType === 'xml' ? 'https://affiliate-api.flipkart.net/affiliate/report/orders/detail/xml?' : 'https://affiliate-api.flipkart.net/affiliate/report/orders/detail/json?';
    url = preUrl + genQueryParams(query, method, credentials);
  }
  else if (method === 'getAppInstReport') {
    preUrl = credentials.responseType === 'xml' ? 'https://affiliate-api.flipkart.net/affiliate/v1/appInstall/xml?' : 'https://affiliate-api.flipkart.net/affiliate/v1/appInstall/json?';
    url = preUrl + genQueryParams(query, method, credentials);
  }
  else if (method === 'getCategoryFeed') {
    preUrl = credentials.responseType === 'xml' ? '.xml' : '.json';
    url = 'https://affiliate-api.flipkart.net/affiliate/api/' + query['trackingId'] + preUrl + genQueryParams(query, method, credentials);
  }
  else if (method === 'getProductsFeed') {
    url = query['url'];
  }
  return url;
}

exports.genFlipkartUrl = genFlipkartUrl;
