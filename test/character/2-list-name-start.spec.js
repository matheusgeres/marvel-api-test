const marvelApi = require("../commons/marvelApi")

describe("List of Characters starts with 'Spider'", function () {
  step(`Retrieve Marvel Characters`, async function (done) {
    let path = "/v1/public/characters";
    let parameters = {
      nameStartsWith: "Spider"
    }
    
    let spiders = await marvelApi.sendGet(path, parameters);

    console.log(_body.data.results.map((v) => v.name));

    done();
  });
});
