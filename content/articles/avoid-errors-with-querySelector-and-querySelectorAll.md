---
title: Avoid Errors With document.querySelector and document.querySelectorAll
excerpt: Learn how to avoid errors in your JavaScript when using document.querySelector and document.querySelectorAll
tags:
    - JavaScript
    - Debugging
date: 2021-05-30T19:54:07.697Z
draft: false
publishDate: null
layout: single-left
facebook_image: null
facebook_title: null
seo_title: null
seo_description: null
showCodeHighlighting: true
showPrevNext: null
showReadTime: null
show_article_options: null
show_custom_social: null
show_large_twitter_card: null
show_table_of_contents: null
twitter_image: null
twitter_title: null
slug: avoid-errors-document-queryselector-document-queryselectorall
---

I almost exclusively use `document.querySelector` and `document.querySelectorAll` in my JavaScript. More recently I’ve been focusing on adding more safeguards to my code so it fails more gracefully.

I just recently learned there’s a difference between how they behave when they don’t find an element. Today I wanted to quickly discuss the difference between `querySelector` and `querySelectorAll` and how to handle errors.

_Credit goes to Chris Ferdinandi, author of [GoMakeThings](https://gomakethings.com/do-you-need-to-worry-about-errors-with-queryselectorall-in-vanilla-js/). His articles have really helped me with JavaScript._

## What's the difference between `querySelector` and `querySelectorAll`?

When `querySelector` doesn’t find a matching selector, the value of the variable will be `null`.

For example:

```javascript
var missingElement = document.querySelector('.missing');

console.log(missingElement);
// null
```

Why does this matter? If we’re using `document.querySelector` in our functions we can quickly bail if an element isn’t found:

```javascript
function findElement() {
    var missingElement = document.querySelector('.missing');
    console.log(missingElement); // null

    if (!missingElement) return 'Element not found';

    // Continue if element found...
}
```

`querySelectorAll` behaves differently. If it doesn’t find any elements it will still be defined as a `NodeList`. Which means if we check whether our element is _truthy_ or _falsy_, it will return `true`.

```javascript
var missingElements = document.querySelectorAll('.missing');

console.log(missingElements); // NodeList[]

if (missingElements) {
    // true because missingElements is a NodeList
    console.log('I will run');
}
```

## Preventing Errors with `document.querySelectorAll`

So how should we prevent errors with `querySelectorAll`? Previously I would use `instanceof` to check if my variable was a `NodeList`, but this doesn’t work because `querySelectorAll` always returns a NodeList.

```javascript
var missingElements = document.querySelectorAll('.missing');

console.log(missingElements); // NodeList[]

if (missingElements instanceof NodeList) {
    // true because missingElements is a NodeList
    console.log('I will run');
} else {
    console.log('I will never run because missingElements is always a NodeList');
}
```

Instead we can use the `length` property on the `NodeList`.

When `querySelectorAll` finds nothing, the `length` will be 0. So we can use that to check whether `querySelectorAll` actually found some items or not.

```javascript
var missingElements = document.querySelectorAll('.missing');

if (missingElements.length === 0) {
    console.log('no elements found');
} else {
    console.log('I found some elements');
}
```
