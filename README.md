# Lean (headless/serverless) Crawler for Business Intelligence applications
This crawler downloads grocery prices of Swiss online Supermarket Migros with headless chrome/ AWS serverless cloud. The crawler awaits and receives the server's JSON file (prices, product informations, ratings,...), which is dynamically loaded and hidden via html/ server login. There are two codes, one for simply downloading the complete JSON file and one for storing prices in the AWS cloud via serverless and dynamo cloud database.

Setup1: VsCode/W10-2004/Node.js12.0 (puppeteer)                              
Setup2: VsCode/W10-2004/AWS-lambda/Node.js12.0 (puppeteer,chrome-aws-lambda, aws-sdk)
