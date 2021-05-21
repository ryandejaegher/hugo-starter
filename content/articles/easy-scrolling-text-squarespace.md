---
title: Easy Scrolling Text In Squarespace (one line of code!)
excerpt: Today I'm going to share a code snippet to easily create scrolling text in Squarespace. This works in Squarespace 7.0 and Squarespace 7.1.
articleFeatureImage: '/uploads/easy-scrolling-text-squarespace.png'
tags:
    - squarespace
    - web components
    - design
draft: true
date: 2021-05-21T15:49:02.701Z
publishDate: null
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
slug: easy-scrolling-text-in-squarespace
---

A common question I’ve seen people asking for Squarespace is how to make a scrolling text effect. Where the text endlessly scrolls across the screen. The end result looks like this:

{{< embed/video src="/uploads/easy-scrolling-text-squarespace.mp4" >}}

Previously you could use a `<marquee></marquee>` element, but you shouldn’t do this because this element has been [deprecated](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee).

It may still work but there’s a chance that at any point it could stop working.

Instead I’m going to share a simple script that will give you a new element, `<x-marquee>`, that will give you the scrolling text effect.

### Requirements

-   Squarespace 7.0/7.1
-   Business Plan

### Adding The Code To Code Injection

To get the `<x-marquee>` element you'll need to add a script to code injection.

Add this code to _Settings -> Advanced -> Code Injection -> Footer_

```html
<script src="https://ryandejaegher.com/js/marquee.js" defer></script>
```

### Using the `<x-marquee>` element

To use the x-marquee element you can add it to a **code block**, add some text and then set the `count` attribute. The count attribute will determine how many copies of your text to create.

`<x-marquee count=“40”>Look at me scroll</x-marquee>`

By default the x-marquee will fill the section width or the column width in Squarespace.

But if you want to make it take up the full-width of the screen just add a **full-width** attribute:

```html
<x-marquee count="20" full-width>Look at me scroll</x-marquee>
```

### Controlling the speed of the marquee

You can control the speed of the marquee by changing the `timing` attribute. The timing attribute is in seconds. Below is an example of a marquee where the scroll will take 20 seconds. If you don't set the timing attribute the time will default to 50 seconds.

```html
<x-marquee count="50" timing="20">Look at me scroll</x-marquee>
```

Something to keep in mind is that the timing is somewhat based on the number of copies you've set in the marquee. The more copies you have the more you'll need to increase the timing.

### Styling the Marquee

The **x-marquee** has plain styles by default. This is so you can easily style the x-marquee to fit your site. To style the x-marquee you can add these styles to custom CSS (_Design -> Custom CSS_)

```css
x-marquee {
    --text-color: black;
    --bg-color: white;
    --font-size: 36px;
    --font-family: sans-serif;
    --vertical-spacing: 0px;
    --horizontal-spacing: 0px;
}
```

What if you don't want all of your marquee elements to look the exact same? You can style them different by giving your marquee a class and then styling that:

```html
<x-marquee class="coolMarquee" timing="20" count="20">Look at me scroll</x-marquee>
```

```css
x-marquee.coolMarquee {
    --bg-color: blue;
}
```

### Questions?

Have some questions about how to use the marquee? Click the chat button in the bottom right corrner and ask away!
