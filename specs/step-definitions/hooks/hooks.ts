import { Before, After, Status, BeforeAll } from "cucumber";
import { browser } from "protractor";

BeforeAll(async function(){
    var {setDefaultTimeout} = require('cucumber');
    setDefaultTimeout(60 * 1000);
});

Before(async function() {
    browser.manage().window().maximize();
    browser.ignoreSynchronization = true;
    await browser.driver.manage().deleteAllCookies();
});

After(async function(scenario) {
  //Attach screenshot in report if the scenario fails .
    if(scenario.result.status=== Status.FAILED){
      const screenshot = await browser.takeScreenshot();
      this.attach(screenshot,"image/png");
    }
});
