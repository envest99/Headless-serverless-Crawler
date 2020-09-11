# Lean (headless/serverless) crawler for Business Intelligence applications
This crawler downloads grocery prices of Swiss online Supermarket Migros with headless chrome/ AWS serverless cloud. The crawler awaits and receives the server's JSON file (prices, product informations, ratings,...), which is dynamically loaded and hidden in html and with server login. There are two codes, one for simply downloading the complete JSON file and one for storing prices via AWS lambda/ dynamo cloud database. The later is an example for a lowcost cloud storage solutions. This basic headless code can be adpated for other dynamic JSON file crawlings in combination with other storages utilities (AWS glue, AWS glacier,...).

Setup1: Local: VsCode/W10-2004/Node.js12.0 (puppeteer)                              
Setup2: W10-2004/AWS cloud9-lambda/Node.js12.0 (puppeteer,chrome-aws-lambda, aws-sdk)                         
Setup3: Local: VsCode/W10-2004/Docker/AWS-lambda/Node.js12.0 (puppeteer,chrome-aws-lambda, aws-sdk)
