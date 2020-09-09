# Lean (headless/serverless) Crawler
for one actual (12082020) price page sample (backery products page1) of Swiss online Supermarket Migros with headless chrome/ serverless cloud (AWS lambda). The crawler reads the data (prices, product details, ratings,...) from the sever's JSON file (headless browsing), which is dynamically loaded and not available via html or via server (login required). There are two codes, one for simply downloading the complete JSON file and one for storing prices in the AWS cloud via serverless and dynamo cloud database.

Setup1: VsCode/W10-2004/Node.js12.0 (puppeteer)
Setup2: VsCode/W10-2004/AWS-lambda/Node.js12.0 (puppeteer,chrome-aws-lambda, aws-sdk)
