const fetch = require('node-fetch');

async function fetchReviews() {
    const pageToken = await fetch(`https://graph.facebook.com/${process.env.facebook_page_id}?fields=access_token&access_token=${process.env.facebook_user_token}`);
    const response = await pageToken.json();
    return response.access_token
}

exports.handler = async function (event, context) {
    let url = `https://graph.facebook.com/v9.0/${process.env.facebook_page_id}/ratings`;
    let response;
    let token = await fetchReviews();

    response = await fetch(url + '/?access_token=' + 'EAADGZAhgajnYBAIL2WGvJLZCrxZCUSco1bGFqxtbmMm1ZCyEOAo8tO21mP6cgRzbuVifwaMNQMZAbkqYagCKqfBbZBw9HcMTHn8jAtYrZCXWuc1uSiaiWZBJbuFQpHBylovriBA1msuJCu6C0CJR6FSTsyaRbnveCxXf8fWp8kckcwZDZD')
        .then(data => data.json())

    return {
        statusCode: 200,
        body: JSON.stringify({
            response,
            cool: true
        })
    }
}