const algoliasearch = require('algoliasearch');
const fetch = require('node-fetch');
const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);
const index = client.initIndex(process.env.ALGOLIA_INDEX_SQUARESPACE);


var name = "Ryan";
var age = process.env.age;

var squarespace = [
  'https://bigcatcreative.com/shop-templates',
  'https://www.golivehq.co/shop',
  'https://ghostplugins.com/products',
  'https://squaremuse.com/shop',
  'https://www.squarestylist.com/shop',
  'https://www.sqspthemes.com/plugins',
  'https://www.code-shop.co/plugins',
  'https://www.candortemplates.com/squarespace-template-kits/',
  'https://www.will-myers.com/products',
  'https://www.squarestylist.com/shop',
  'https://www.squarewebsites.org/products',
  'https://squarestud.io/shop'
];

var cleanSquarespaceData = function(data) {
  var products = [];


  data.forEach(item => {
    
    var baseUrl = (item.website.baseUrl);
    
    //products.push(item.items);
    var cleanItems = item.items.map(product => {
      var {title,author,fullUrl,priceMoney,assetUrl,onSale,salePriceMoney,excerpt,categories,tags,id:objectID,items,variants} = product;
      var obj = {
        title,
        url: baseUrl+fullUrl,
        assetUrl,
        author,
        priceMoney,
        excerpt,
        salePriceMoney,
        onSale,
        categories,
        tags,
        items,
        objectID,
        variants
      }
      return obj;
    })
    cleanItems.forEach(item => products.push(item))
    
  })
 index.saveObjects(products).then(({ objectIDs }) => {
       console.log(objectIDs);
    })  
return products;
  
}



exports.handler = async function (event, context) {

    let response

    var name = "Ryan";
    var myData = [];
    let options = {
        method: 'GET',
        // headers: {
        //     'X-MailerLite-ApiKey': process.env.MAILERLITE_API,
        //     'Content-Type': 'application/json'
        // }
    };
  //  response = await fetch(url, options)
      //  .then(data => data.json())
  var promise = await Promise.all(squarespace.map(url => fetch(`${url}?format=json-pretty`))).then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(responses.map(function (response) {
      //return cleanSquarespaceData(response.json());
      return response.json();

    }));
  }).then(function (data) {
    // Log the data to the console
    // You would do something with both sets of data here

    return cleanSquarespaceData(data);
  })
    return {
        statusCode: 200,
        body: JSON.stringify(promise)
    }
}