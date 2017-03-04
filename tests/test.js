const request = require("request");
const expect = require("chai").expect;

describe("Server GET", function(){
  it("should return 200", function(done){
    request("http://localhost:7678/", function(err, res, content){
      if(err)
        throw err;
      expect(res.statusCode).equal(200);
      done();
    });
  });
});
