const should = require("should");
const request = require('request');
const md5 = require("md5");
const chai = require("chai");
const expect = chai.expect;

const credentials = require('../credentials/marvel.json');
const env = require("../local.env.json");
const urlBase = env.urlBase;

exports.sendGet = function(path, parameters){
  return new Promise((resolve, reject) => {
    let ts = new Date().getTime();
    let qs = {
      ts: ts,
      apikey: credentials.publicKey,
      hash: md5(ts + credentials.privateKey + credentials.publicKey)
    };

    if(parameters){
      qs = { ...qs, ...parameters };
    }

    request.get(
        {
          url: `${urlBase}${path}`,
          qs : qs
        },
        function (error, response, body) {
          let _body;
          try {
            _body = JSON.parse(body);
            if (env.debug) {
              logger.log("Body:", JSON.stringify(_body, null, 1));
            }
          } catch (e) {
            reject(e);
          }

          if(error){
            reject(error);
          }

          _body.data.should.have.property("results");
          expect(_body.data.results).to.be.a('array');
  
          resolve(_body);
        }
    );
  });
}