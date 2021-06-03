---
title: A Collection Of Hugo Shortcodes
excerpt: A collection of useful shortcodes for your Hugo site
tags:
    - Hugo
    - Shortcodes
date: 2021-06-03T14:25:10.647Z
publishDate: null
draft: true
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
slug: useful-hugo-shortcodes
---

Hugo is an awesome static site generator and gives you a great writing experience with Markdown. What happens when you need to add some HTML to your posts, such as a video embed, or a CodePen? That's where shortcodes come in. Today I'm going to briefly discuss what shortcodes are, and share some useful ones that you can reuse with your Hugo site.

There are 2 ways you can add HTML to your Markdown

1. You can change a setting _markup configuration_. Setting `unsafe:true` under the `renderer` will let you add HTML to your markdown content. The
2. You can use Shortcodes

### What Are Shortcodes?

> A shortcode is a simple snippet inside a content file that Hugo will render using a predefined template. Note that shortcodes will not work in template files. If you need the type of drop-in functionality that shortcodes provide but in a template, you most likely want a partial template instead. - [Hugo Shortcodes](https://gohugo.io/content-management/shortcodes/)

Shortcodes are great for reusable code sections or embedding HTML content. The advantage of using a shortcode over the raw HTML is that if you need to make a change to the HTML you only need to update it in the shortcode template. If you wanted to change the raw HTML you'd need to find every post where you've u

### Adding Shortcodes to Hugo

-   Shortcodes can be added to a shortcodes folder in your layouts folder: `/layouts/shortcodes/`
-   You can add them to subfolder to help organize them as well. I personally have one named "embeds"

### Using Shortcodes in Your Content

## My Shortcodes

### Figma

```html
<div class="resp-container pb-1/1 md:pb-3/2">
    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" src={{.Get "src"}} allowfullscreen></iframe>
</div>
```

### Loom

```html
{{/* Embed a video from Loom. All you need is the video id Link:
https://www.loom.com/share/6811bffc83a64330923fa472008fd23f */}}

<div style="position: relative; padding-bottom: 56.25%; height: 0;">
    <iframe
        src="https://www.loom.com/embed/{{index .Params 0}}"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        loading="lazy"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    >
    </iframe>
</div>
```

### Gumroad

```html
{{/* Embed a product/buy button from Gumroad. All you need is the product ID Link: https://gumroad.com/products/ezJzH
*/}}

<script src="https://gumroad.com/js/gumroad.js"></script>
<a class="gumroad-button" href="https://gum.co/{{index .Params 0}}">Download Now</a>
```

### YouTube

```html
{{/* Embed a video from YouTube. All you need is the video id Link: https://www.youtube.com/watch?v=8IB7JcKJEeI */}}

<div class="resp-container pb-16/9">
    <iframe
        src="https://www.youtube.com/embed/{{index .Params 0}}"
        data-src="https://www.youtube.com/embed/{{index .Params 0}}"
        frameborder="0"
        allowfullscreen
        loading="lazy"
    ></iframe>
</div>
```

### Descript

```html
<div class='resp-container pb-16/9'>
  <iframe src="https://share.descript.com/embed/{{ .Get "id"}}" data-src="https://share.descript.com/embed/{{.Get "id"}}" frameborder="0" loading="lazy" frameborder="0" allowfullscreen></iframe>
</div>
```

### Framer

```html
<div class='resp-container pb-3/2'>
  <iframe style="border: 1px solid rgba(0, 0, 0, 0.1)" src={{.Get "src"}} data-src="{{.Get "src"}}" allowfullscreen></iframe>
</div>
```

### CodePen

```html
{{/* DEFAULTS */}}
{{ $user    := "ryandejaegher" }}
{{ $height  := 500 }}
{{ $tab     := "result" }}{{/* html|css|js|result */}}
{{ $theme   := 8862 }}{{/* create on codepen.io */}}

<div class="self-stretch">
    <script
        data-slug-hash="{{ .Get "id" }}"
        data-user="{{ or (.Get "user") $user }}"
        data-height="{{ or (.Get "height") $height }}"
        data-default-tab="{{ or (.Get "tab") $tab }}"
        data-theme-id="{{ or (.Get "theme") $theme }}"
        class='codepen'
        async
        src="//codepen.io/assets/embed/ei.js"
    ></script>
</div>
```

### Mailerlite
