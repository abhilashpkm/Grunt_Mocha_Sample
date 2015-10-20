
var request = require('supertest');
url='localhost:3000',
should = require('should');

//console.log('Testing');
before('Before description', function(){
  // beforeEach:some description
  console.log('Before description console')
});

describe('GET /api', function(){
  it('respond with json', function(done){
    request(url).get('/api')      
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        else
        {
        	//console.log(res.body);
        	res.body.should.have.property('name');
        	res.body.name.should.not.equal(null);
        }
        done()
      });
  })
});
describe('GET /user', function(){
  it('respond with json', function(done){
    request(url)
      .get('/user')
      //.expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
});
describe('post /login', function(){
  it('login work for correct input', function(done){

  	postData={username:'user',password:'passme'};

  	postData.should.have.property('username');
  	postData.should.have.property('password');
    request(url)
      .post('/login')
      .send(postData)
      //.expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  })
});