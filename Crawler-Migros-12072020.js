//proposed by erich.naef@envest.ch: crawling one example price page of Swiss online Supermarket Migros with headless chrome
//& serverless cloud (AWS lambda).
const puppeteer = require('puppeteer');
const fs = require('fs');
const os = require("os");

const { PendingXHR } = require('pending-xhr-puppeteer');
const { isNull } = require('util');
const { stringify } = require('querystring');

const linklist = require('./M-Food-link_example_01052020');
baseurl = linklist.link[0];  

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    const pendingXHR = new PendingXHR(page);

    await page.on('response', async (response) => {
        const url = response.url()
        if (url.includes('/product_fragments_json')) {
            const cont = await response.json();
            const num = cont.length;
            let arr = [];

            for (let i = 0; i < num; i++) {
                const id = cont[i]["id"];
                const price = cont[i]["price_info"]["price"];
                const original_price = cont[i]["price_info"]["original_price"];

                var row = {
                    id:id,
                    price:price,
                    original_price:original_price,
                  };
                arr.push(row);
            }
            fs.writeFile('./link1-page=1.json', JSON.stringify(arr), err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            });    
        };
    });
    await page.goto(baseurl, {waitUntil: 'networkidle2'});

    await page.evaluate(() => {
        return new Promise((resolve, reject) => {
            try {
                var scrollTop = -1;
                const interval = setInterval(() => {
                    window.scrollBy(0, 100);
                        if(document.documentElement.scrollTop !== scrollTop) {
                            scrollTop = document.documentElement.scrollTop;
                        return;
                        }
                    clearInterval(interval);
                    resolve();
                }, 10);
            }    
            catch (err) {
            console.log(err);
            reject(err.toString());
            }
        });
    });
    await pendingXHR.waitForAllXhrFinished();
    await browser.close();
})()