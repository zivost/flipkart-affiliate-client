var affiliate = require('../lib/index');

var client = affiliate.createClient({
  FkAffId: process.env.FK_ID,
  FkAffToken: process.env.FK_TOK,
  responseType: 'json'
});

describe('API requests',function(){
  describe('keywordSearch',function(){
    it('response should not return an error', function(done){
      client.keywordSearch({
          query: "iphone",
          resultCount: "1"
        }, function(err, results){
          if(err) throw err;
            done();
      });
    });
  });
  describe('idSearch',function(){
    it('response should not return an error', function(done){
      client.idSearch({
        id: "MOBDPPZZPXVDJHSQ"
      }, function(err, result){
          if(err) throw err;
          done();
      });
    });
  });
  describe('getAllOffers',function(){
    it('response should not return an error', function(done){
      client.getAllOffers(null,function(err, resp){
        if(err) throw err;
        done();
      });
    });
  });
  describe('getDealsOfDay',function(){
    it('response should not return an error', function(done){
      client.getDealsOfDay(null,function(err, resp){
        if(err) throw err;
        done();
      });
    });
  });
  describe('getOrdersReport',function(){
    it('response should not return an error', function(done){
      client.getOrdersReport({
        startDate: '2015-10-22',
        endDate: '2016-02-04',
        status: 'cancelled',
        offset: '0'
      }, function(err, result){
          if(err) throw err;
          done();
      });
    });
  });
  describe('getAppInstReport',function(){
    it('response should not return an error', function(done){
      client.getAppInstReport({
        startDate: '2015-10-22',
        endDate: '2016-1-04',
        status: 'approved'
      }, function(err, result){
          if(err) throw err;
          done();
      });
    });
  });
  describe('getCategoryFeed',function(){
    it('response should not return an error', function(done){
      client.getCategoryFeed({
        trackingId: 'asd'
      }, function(err, result){
          if(err) throw err;
          done();
      });
    });
  });
  describe('getProductsFeed',function(){
    it('response should not return an error', function(done){
      client.getProductsFeed({
        url: 'https://affiliate-api.flipkart.net/affiliate/feeds/rawfiles/tyy-n0e?expiresAt=1454704841953&sig=f7df2e06cdbb75553ebbd49e990162f9'
      }, function(err, result){
          if(err) throw err;
          done();
      });
    });
  });
});
