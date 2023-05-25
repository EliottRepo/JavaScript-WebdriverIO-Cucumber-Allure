const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../pages/homePage.js');


const pages = {
    home: HomePage,
   
}

When(/^I click on the first video in VLP$/, async () => {
	await HomePage.clickFirstVideoThumbnail()
});

Then(/^Verify I navigate to correct VDP$/, async () => {
    await HomePage.verifyPageURL()
});

Then(/^Verify video played correctly$/, async () => {
    await HomePage.verifyVideoPlaysCorrectly()
});
Given(/^I am on (\w+) page$/, async (page) => {
    await pages[page].open()
});



