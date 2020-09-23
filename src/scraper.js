const puppeteer = require('puppeteer')

// Property types are 'src', 'textContent', etc

async function getAttribute(xpath, properyType, currentPage) {
    const [ el ] = await currentPage.$x(xpath)
    const src = await el.getProperty(properyType)
    const test = await src.jsonValue()
    return test
}

async function scrapeProduct(url) {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const image = await getAttribute('//*[@id="panel"]/section[2]/header/div[2]/a/img', 'src', page)

    const price = await getAttribute('//*[@id="panel"]/section[2]/div[3]/div[2]/div[2]/div/div[1]/div[4]/div/b', 'textContent', page)

    console.log({image, price})

    

    browser.close()
}



scrapeProduct('https://warframe.market/items/mag_prime_systems')

// Full Container //*[@id="panel"]/section[2]/div[3]/div[2]/div[2]/div


    // const [ el ] = await page.$x('//*[@id="panel"]/section[2]/header/div[2]/a/img')
    // const src = await el.getProperty('src')
    // const image = await src.jsonValue()

    // const [ el2 ] = await page.$x('//*[@id="panel"]/section[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/a')
    // const txt = await el2.getProperty('textContent')
    // const name = await txt.jsonValue()

    // const [ el3 ] = await page.$x('//*[@id="panel"]/section[2]/div[3]/div[2]/div[2]/div/div[1]/div[4]/div/b')
    // const priceContent = await el3.getProperty('textContent')
    // const price = await priceContent.jsonValue()

    // console.log({image, name, price})