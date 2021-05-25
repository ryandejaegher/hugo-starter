---
title: Create A Custom Sticky Menu With Squarespace
excerpt: Learn how to create a custom sticky menu in Squarespace.
articleFeatureImage: '/uploads/custom-sticky-header-squarespace.png'
tags:
    - Squarespace
    - css
date: 2021-05-25T20:07:16.064Z
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
slug: create-custom-sticky-menu-squarespace
---

Today I am going to show you how you can make a cool sticky header effect in Squarespace.

We'll move the menu after the first section on the page and then make the menu sticky so that it will automatically stick to the top of the screen when you reach it.

Here is what it will look like:

{{< embed/video src="/uploads/videos/sticky-header-squarespace.mp4" >}}

This idea came from a project where the client wanted to have the menu positioned below the very first section on the page. You could try to recreate a custom menu below the first section but this is more trouble than it's worth. Instead we can use a simple script to move the header below the first section.

### Requirements

-   Squarespace 7.1
-   Business Plan

### Adding the code to move the header/navigation

The code for doing this is very simple. There are three parts to it:

-   First we get the header
-   Second we get all the sections on the page
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

### How To Make the Menu sticky

In order to make the menu stick to the top of the page when you scroll, you’ll need to add some CSS.

To make the menu sticky simply add this code:

_Add this code to Design -> Custom CSS_

```css
header {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
}
```

### What Is The Difference Between Fixed and Sticky?

Squarespace gives you the option to toggle the header to _Fixed Position_ in the _Site Header_ settings:

![Squarespace Fixed Header](/uploads/squarespace-fixed-header.png)

_Fixed_ takes the element out of the document flow and positions it based on the _top, bottom, left, right_ properties. The scroll position doesn't affect elements that are fixed, they'll remain in the same position regardless of where you scroll.

_Sticky_ keeps the elements order in the document flow and only takes effect when the element reaches a specific position based on the _top, bottom, left, right_ properties.

Setting `top:0` will cause the element to stick to the top of the window.

Setting `bottom:0` will cause the element to stick to the bottom of the window.

That's a little tricky to follow, the best way to understand is to see a demo. In the CodePen demo below we have 2 layouts. The one on the left has a header that's using `position:sticky` and the one on the right is using `position:fixed`.

If you pay attention to the HTML you'll notice that the _fixed nav_ is below the first section but it appears at the very top of the page. This demonstrates the effect that `position:fixed` has an on element.

Another thing to note is when using _sticky nav_ your elements can overlap. When you scroll the demo you'll notice when you reach other sticky elements they'll begin to overlap. This isn't possible with _fixed elements_ because they'll always overlap regardless of the scroll position.

<!-- Embeds a CodePen @id -->

{{% embed/codepen id="wvJerYQ" %}}

### Questions or Feedback?

If you have questions or are running into issues with the script feel free to send me a message on [Facebook Messenger](https://m.me/dejaegherryan) or [email me](mailto:ryan@ryandejaegher.com).

{{% embed/mailerlite form="squarespace" %}}
