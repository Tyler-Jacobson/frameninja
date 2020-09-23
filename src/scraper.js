const puppeteer = require('puppeteer')

async function scrapeProduct(url) {

    const browser = await puppeteer.launch
    const page = await browser.newPage()
    await page.goto(url)


    const [ el ] = await page.$x('//*[@id="panel"]/section[2]/header/div[2]/a/img')
    const src = await el.getProperty('src')
    const srcText = await src.jsonValue()

    console.log({srcText})
}

scrapeProduct('https://warframe.market/items/mag_prime_neuroptics')