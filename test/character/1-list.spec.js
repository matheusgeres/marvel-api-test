const marvelApi = require("../commons/marvelApi")
const logger = require("mocha-logger");

describe("List of Characters", function () {
  let characters = [];
  step(`Retrieve Marvel Characters`, async function (done) {
    let path = "/v1/public/characters";
    let parameters = { limit: 2 };
    let chars = await marvelApi.sendGet(path, parameters);

    console.log(chars.data.results.map((v) => v.name));

    characters = characters.concat(chars.data.results);

    done();
  });

  step(`Retrieve Marvel Characters starts with 'Spider'`, async function (done) {
    let path = "/v1/public/characters";
    let parameters = { limit: 4, nameStartsWith: "Spider"};
    let chars = await marvelApi.sendGet(path, parameters);

    console.log(chars.data.results.map((v) => v.name));

    characters = characters.concat(chars.data.results);

    done();
  });

  step(`Retrieve detail of Marvel Characters`, async function (done) {
    let chars = [];
    let imageVariant = "/portrait_uncanny.";
    
    for(char of characters){
      let path = `/v1/public/characters/${char.id}`;
      responseGet = await marvelApi.sendGet(path);
      // chars.push(responseGet);
      chars.push(responseGet.data.results.flatMap((v) => v.name + " ### IMAGE LINK ### ==> " + v.thumbnail.path + imageVariant + v.thumbnail.extension)[0]);
    }

    console.log(chars);

    done();
  });


});
