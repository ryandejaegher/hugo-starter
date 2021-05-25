---
title: Create A Custom Sticky Menu With Squarespace
excerpt: null
articleFeatureImage:
tags:
    - Squarespace
date: 2021-05-23T19:33:55.828Z
draft: true
publishDate: null
layout: null
facebook_image: null
facebook_title: null
seo_title: null
seo_description: null
showCodeHighlighting: null
showPrevNext: null
showReadTime: null
show_article_options: null
show_custom_social: null
show_large_twitter_card: null
show_table_of_contents: null
twitter_image: null
twitter_title: null
slug: null
---

Today I am going to show you how you can position the menu after the first section on the page and then make the menu sticky so that it will automatically stick to the top of the screen when you reach it.

Here is what it will look like:

This idea came from a project where the client wanted to have the menu positioned below the very first section on the page. You could try to recreate this as a section but it’s more trouble than it’s worth. Instead we can use a simple script to move the header below the first section.

### Adding the code to move the header/how does this work?

The code for doing this is very simple. There are three parts to it:

-   First we get the header
-   Second we get all the sections
-   Finally we move the header to after the first section.

_Add this code to Settings -> Advanced -> Code Injection -> Footer_

```html
<script>
    (function () {
        window.addEventListener('load', function () {
            var header = document.querySelector('header');
            var sections = document.querySelectorAll('section');
            sections[0].after(header);
        });
    })();
</script>
```

### How to make the menu sticky

In order to make the menu stick to the top of the page when you scroll you’ll need to add some CSS.

To make the menu sticky simply add this code:

_Add this code to Design -> Custom CSS_

```css
header {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
}
```

Are these linked together?

Wow cool
