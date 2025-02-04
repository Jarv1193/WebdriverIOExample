const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 942,
            height: 774
        })
    }
    {
        const targetPage = page;
        await targetPage.goto('https://espanol.yahoo.com/');
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('img._yb_vxcshn'),
            targetPage.locator('::-p-xpath(//*[@id=\\"ybar-logo\\"]/img[1])')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 106,
                y: 13.5,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        await puppeteer.Locator.race([
            targetPage.locator('#Header li:nth-of-type(6) span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root_6\\"]/span)')
        ])
            .setTimeout(timeout)
            .on('action', () => startWaitingForEvents())
            .click({
              offset: {
                x: 33.574981689453125,
                y: 9,
              },
            });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li:nth-of-type(1) u'),
            targetPage.locator('::-p-xpath(//*[@id=\\"module-rmpMainStream\\"]/ul/li[1]/div[1]/div[2]/h3/a/u)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 403,
                y: 31.150001525878906,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
