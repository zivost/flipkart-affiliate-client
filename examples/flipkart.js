var affiliate = require('../lib/index');

var client = affiliate.createClient({
  FkAffId: process.env.FK_ID,
  FkAffToken: process.env.FK_TOK,
  responseType: 'json'
});

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

client.idSearch({
  id: "MOBDPPZZPXVDJHSQ"
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});

client.getAllOffers(null,function(err, resp){
  if(!err){
    console.log(resp);
  }else{
    console.log(err);
  }
});

client.getDealsOfDay(null,function(err, resp){
  if(!err){
    console.log(resp);
  }else{
    console.log(err);
  }
});

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

client.getCategoryFeed({
  trackingId: 'asda'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});

client.getProductsFeed({
  url: 'https://affiliate-api.flipkart.net/affiliate/feeds/asd/category/reh.json?expiresAt=1454652456592&sig=3b9bc4ac8c6a410f5e8c841928374160'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
