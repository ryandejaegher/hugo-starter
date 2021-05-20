---
title: Easily Add Anchor Links to Squarespace 7.1 (Without Code Blocks!)
excerpt: "Here's a quick code snippet that you can use to easily create anchor links on your Squarespace 7.1 site"
articleFeatureImage: '/uploads/easy-anchor-links-squarespace-7.1.png'
tags:
    - squarespace
date: 2021-05-20T14:04:34.031Z
draft: false
publishDate: null
facebook_image: null
facebook_title: null
seo_title: null
seo_description: null
showCodeHighlighting: true
showPrevNext: true
showReadTime: false
show_article_options: false
show_custom_social: null
show_large_twitter_card: null
show_table_of_contents: null
twitter_image: null
twitter_title: null
slug: easily-add-anchor-links-squarespace
---

<!-- Embeds a gist @username @gistID @file -->

Today I am going to show you how to easily add anchor links to Squarespace 7.1.

What are anchor links? Anchor links are links that you can click that will automatically take you to a specific section on a page. And you can easily add a smooth scrolling effect to avoid having a jump.

One of the most common ways to add anchor links is using a code block but this has problems:

1. You have to manually add a code block
2. The code block will take up spacing on the page
3. Since the code block has no content it's easy to forget that it's even on the page.

Instead I'm going to share a script that will automatically give all sections a unique ID that you can use anchor links. This way you don't have to manually add in code blocks throughout your site.

But before I show you that, it's a good idea to understand how anchor links work.

## How do anchor links work?

For anchor links to work you will need to have an element with a unique ID and a link to that unique ID. In Squarespace you can do this with a code block and a `<div>`.

In your code block you would add this HTML:

```html
<div id="contact-section"></div>
```

And if you wanted a link to jump to that section you'd create a link on the same page that looks like this:

```html
<a href="https://yoursite.com/#contact-section"></a>
```

Remember the ID has to be unique, if you have 2 elements that both have the same ID then the anchor links won't work properly.

So this is the way to do it with a code block, but what if you could automatically add a unique ID to all your sections in Squarespace? That's what I'm going to show you next.

## Automatically Add Unique IDs to Squarespace Sections

The code to add anchor links to every section is pretty simple. To get started copy/paste the code below.

_Add this code to Settings -> Advanced -> Code Injection -> Footer_

<!-- Script for adding the ids to sections -->

{{< gist ryandejaegher 784a895fd73929df3e2897a1be50e447 "script.js"  >}}

What does this code do?

When this code runs it gives every section on the page a unique ID based on the pages **url slug**. You can find the url slug by going into _Page Settings -> General_

![find-squarespace-page-slug](/uploads/squarespace-page-slug.png)

So using the image above as an example, after running this code every section on your page would look like this:

```html
<section id="another-page-1"></section>
<section id="another-page-2"></section>
<section id="another-page-3"></section>
```

You're free to change the url slug at anytime and the section IDs will update automatically.

There is one exception to this rule. If a page has been set as the **homepage**, then the sections IDs will start with **#home**.

```html
<section id="home-1"></section>
<section id="home-2"></section>
<section id="home-3"></section>
```

What's cool about is this is that you can add as many sections as you want to a page and they'll automatically get a unique section ID.

Now that you have this code lets talk about another common scenario. Using an anchor link to jump to section on another page.

## Scroll To Section On Another Page With Anchor Links

Lets say you have 2 pages:

1. About (_coolsite.com/about_)
2. Contact (_coolsite.com/contact_)

And you want to add a link on the about page that will jump to the 3rd section on the contact page. To do that simply create a link (it could be in the navigation or anywhere on the page) and set the link to _/contact#contact-3_

![alt](/uploads/squarespace-anchor-link.png)

Now your link will navigation to the contact page and then jump to the 3rd section. But what if you want it to have a smooth scroll instead. It's very easy to add that.

## Add Smooth Scrolling To Anchor Links

The default behaviour for anchor links is that they **jump** to the linked section. This can be a little jarring and may not be the result you want. Luckily it's easy to add a smooth-scrolling effect to your anchor links.

To do this just add this line of code to your custom CSS.

```css
/* Add this code to Design -> Custom CSS */
html {
    scroll-behavior: smooth;
}
```

That's it!

I hope you enjoyed this article. If you have any questions feel free to click the chat button on the bottom right.
