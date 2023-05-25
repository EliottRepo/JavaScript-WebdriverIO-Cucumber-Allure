
// const { expect, assert } = require('chai'); // Import the expect function from chai
// const { expect } = require('expect-webdriverio');// This expect is from the webdriverio library but no need to import unless you do.

import pageObjects from "../steps/PageObject"

const waitUntilElementIsDisplayed = async (element) => {
  // ...
};

const clickElement = async (element) => {
  try {
    await waitUntilElementIsDisplayed(await element);
    await (await element).click();
  } catch (err) { }
};

const enterValue = async (element, value) => {
  try {
    await element.waitForDisplayed({ timeout: 2000 });
    await element.setValue(value);
  } catch (err) { }
};

module.exports = {
  pageObjects,
  clickElement,
  enterValue
};
