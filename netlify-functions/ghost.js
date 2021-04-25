const algoliasearch = require('algoliasearch');
const fetch = require('node-fetch');
const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);
const index = client.initIndex(process.env.ALGOLIA_INDEX_SQUARESPACE);


var name = "Ryan";
var age = process.env.age;

var squarespace = [
  'https://ghostplugins.com/steps'
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

var fetchAllPages = function(url) {

  var items = [];
  var get = function(url){
      return fetch(url)
  .then(response => response.json())
  .then(json => {
      items.push(json.items)
      if(json.pagination.nextPage) {
         get(json.pagination.nextPageUrl+'&format=json-pretty')
      
      } else {
    console.log('items flat',items.flat())
      return items
      }
  }).then(response => {
          var products = items.flat();
          var cleanProducts = [];
      products.forEach(prod => {
          var {title, id:objectID,assetUrl,fullUrl} = prod;
          var obj = {title, objectID,assetUrl,fullUrl};
          cleanProducts.push(obj);
      })
    console.log('products',products);
      index.saveObjects(cleanProducts)
      return response
  })
  }
  return get(url)
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
  fetchAllPages('https://ghostplugins.com/steps?format=json-pretty');
    return {
        statusCode: 200,
        body: 'All Good'
    }
}