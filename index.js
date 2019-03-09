const puppeteer = require('puppeteer-extra');
const CreatePuppeteerStealth = require('puppeteer-extra-plugin-stealth');

puppeteer.use(CreatePuppeteerStealth());

async function main() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--proxy-server=socks5://127.0.0.1:9050']
    });

    const page = await browser.newPage();

    await page.goto(`http://atlanta.craigslist.org/atl/cto/d/smyrna-2009-lexus-gx470/6829142959.html`);

    await new Promise(() => {});
}

main();