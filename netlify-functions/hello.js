var name = "Ryan";
var age = process.env.age;


const fetch = require('node-fetch');
let url = 'https://bigcatcreative.com/shop-templates?format=json-pretty';


exports.handler = async function (event, context) {
    let response
    console.log(age)

    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    response = await fetch(url, options)
        .then(data => data.json())
        


    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}