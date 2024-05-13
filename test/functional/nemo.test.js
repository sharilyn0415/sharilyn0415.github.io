const demoURL = "/#/progress";
describe("@firstTest@", function () {
  it("should load a website", async function () {
    await this.nemo.driver.get(this.nemo.data.baseUrl);
  });

  it("should load progress demo page", async function () {
    let nemo = this.nemo;
    await nemo.driver.get(this.nemo.data.baseUrl);
    await nemo.view._waitVisible("#progress");
    await nemo.view._find("#progress").click();
    await nemo.view._waitVisible(".content");
  });

  it("should get init state as draft", async function () {
    let nemo = this.nemo;
    await nemo.driver.get(this.nemo.data.baseUrl + demoURL);
    await nemo.view._waitVisible(".content");
    await nemo.view
      ._find("#transit")
      .getText()
      .then(function (state) {
        return (state = "Submit draft");
      });
  });

  it("should able to transit state to review", async function () {
    let nemo = this.nemo;
    await nemo.driver.get(this.nemo.data.baseUrl + demoURL);
    await nemo.view._find("#transit").click();
    await nemo.view
      ._find("#transit")
      .getText()
      .then(function (state) {
        return (state = "Confirm");
      });
    // await nemo.view._find('#searchInput').sendKeys('Nemo.js Selenium');
  });
});
