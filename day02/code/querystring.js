
const url = require('url');
const querystring = require('querystring')


const urlStr = 'https://detail.tmall.com/item.htm?id=574830978734&ali_refid=a3_420432_1006:1102601813:N:hcfKd/wFd9DV8bxd5wG0n3WPOfX6vPnY:867fa506a56a0a1b66fbb4d551f36186&ali_trackid=1_867fa506a56a0a1b66fbb4d551f36186&spm=a230r.1.14.11'

const { query } = url.parse(urlStr);

console.log('query', querystring.parse(query));
console.log('unquery', querystring.stringify(querystring.parse(query)));