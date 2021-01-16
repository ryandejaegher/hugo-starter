const functions = require('firebase-functions');
const fetch = require('node-fetch');
const hello = require('./hello')


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
var person = {
    name: "ryan",
    age: '32',
    isCool: true
}

exports.yo = functions.https.onRequest((request, response) => {
    response.send(hello.hello())
})

exports.test = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {
        structuredData: true
    });
    var person = {
        name: "katie",
        age: '32',
        upperCase() {
            return this.name.toUpperCase();
        }
    }
    response.send(person.upperCase());
});

exports.squarespace = functions.https.onRequest((request, response) => {

    let url = 'https://api.squarespace.com/1.0/commerce/orders';
    let data;
    let variantId;
    let currentPrice;
    let newPrice;
    let options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer f5da4ccb-14b9-40fe-af0c-e5a7e3e79a53'
        }
    };


    fetch(url, options)
        .then(res => res.json())
        .then(json => data = json)
        .then(res => {
            variantId = data.result[0].lineItems[0].variantId;
            currentPrice = data.result[0].lineItems[0].unitPricePaid.value;
            newPrice = parseInt(currentPrice) + 1;
            newPrice = newPrice.toString() + ".00";
            console.log(variantId, currentPrice)
            console.log(typeof currentPrice);
            updatePrice();
            response.send(data)
            return 'sweet'
        })
        .catch(err => console.error('error:' + err));


    function updatePrice() {
        let url = 'https://api.squarespace.com/1.0/commerce/products/5ffdb8c684b2d841ed1fa0b4/variants/' + variantId;

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'Ryan App',
                Authorization: 'Bearer f5da4ccb-14b9-40fe-af0c-e5a7e3e79a53'
            },
            body: `{"pricing":{"basePrice":{"currency":"CAD","value":"${newPrice}"}}}`
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
    }
})