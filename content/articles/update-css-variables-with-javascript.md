---
title: Update CSS Variables on CSS Selectors With JavaScript
excerpt: Learn how to update CSS variables on the :root or a selector using JavaScript
tags:
    - CSS
    - JavaScript
date: 2021-05-25T18:54:22.621Z
draft: false
publishDate: null
facebook_image: null
facebook_title: null
seo_title: null
seo_description: null
showCodeHighlighting: true
showPrevNext: true
showReadTime: null
show_article_options: null
show_custom_social: null
show_large_twitter_card: null
show_table_of_contents: null
twitter_image: null
twitter_title: null
slug: update-css-variables-javascript
---

One of the most common ways you’ll see CSS variables demoed is by setting variables on the `:root` element. If you’re dealing with web components you can also set them on the `:host`.

```css
:root {
    --primary-brand: red;
    --secondary-brand: blue;
}

/* In Web Components, this will target the web component element i.e. <my-custom-header></my-custom-header>*/
:host {
    --primary-brand: red;
}
```

Settings your variables on the `:root` is a great way to make sure that the variables are available to all elements. But it’s also possible to scope your variables to a **selector**.

For example we could change the `--primary-brand` variable for a theme class:

```css
.cool-theme {
    --primary-brand: purple;
    --secondary-brand: yellow;
}
```

This is a great way to create themes with CSS variables but then fall back to variables set on the `:root`.

It’s also possible to [update your CSS variables using JavaScript](https://css-tricks.com/updating-a-css-variable-with-javascript/).

```js
var root = document.documentElement;

root.style.setProperty('--primary-brand', 'red');
```

The article on CSS Tricks shows that this works for the `:root`, but does it work for variables that are scoped to another selector, such as `.cool-theme`? Yes! Similar to setting styles on the `:root`, we can grab any CSS selector with JavaScript and use the [`setProperty()`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) method to update the variable.

```js
var theme = document.querySelector('.cool-theme');

theme.style.setProperty('--primary-brand', 'yellow');
```

What's cool about this is that you have the option of targetting the `:root` to make broad sweeping changes or you can target a selector, such as `.cool-theme` and isolate the variable changes to that selector.

Below is a simple CodePen showing this functionality in effect. Clicking the first button will update the `--background` variable on the `:root` and clicking the second button will toggle the `.theme` class which has it's own `--background` variable set.

  <!-- Embeds a CodePen @id -->

{{% embed/codepen id="YzZQVoa" %}}
