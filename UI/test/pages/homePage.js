
const Page = require('./page');


class homePage extends Page {
    constructor() {
        super();
        this.hrefValue = null; // Initialize hrefValue to null
    }
    get videoThumbnails() {
        return $$('#video-title-link');
    }
    get streamingVideo() {
        return $$('#inline-player #container .video-stream.html5-main-video');
    }
    ////////////// page objects implementations////////////////

    async clickFirstVideoThumbnail() {
        let count = 0; // Counter variable

        for (var thumbnail of await this.videoThumbnails) {
            if (count === 1) { // Check if it's the second index
                this.hrefValue = await thumbnail.getAttribute('href'); // Get the value of the href attribute
                await thumbnail.click(); // Click on the second occurrence

            }
            count++; // Increment the counter
        };

    }

    async verifyPageURL() {
        const url = await browser.getUrl(); // Retrieve the current URL
        expect(url).toContain(this.hrefValue); //Expecting to containt href value from URL

    }

    async verifyVideoPlaysCorrectly(){


    }
}
module.exports = new homePage();
