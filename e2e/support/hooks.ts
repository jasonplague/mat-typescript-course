import { browser } from "protractor";
import { Before, After, Status } from "cucumber";

Before({timeout: 100 * 1000}, async function() {
    // Get command means navigate to browser
    await browser.get("");
});

After({timeout: 100 * 1000}, async function(scenario) {

    // Here we take a screenshot if the scenario fails
    // and if it's attached to the test report

    if (scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});
