+++
articleFeatureImage = "/uploads/easy-desktop-burger-menu-squarespace-7-1.png"
customize_seo = false
date = 2020-09-22T16:37:07Z
excerpt = "Learn how to add a burger/mobile menu specifically for desktop in Squarespace 7.1. This can also be used as a secondary menu."
facebook_description = ""
facebook_image = ""
facebook_title = ""
layout = "single-left"
publishdate = ""
series = "learn roam research"
seo_description = ""
seo_title = ""
showCodeHighlighting = true
showPrevNext = false
showReadTime = false
show_article_options = false
show_custom_social = false
show_large_twitter_card = false
show_table_of_contents = false
tags = ["design", "squarespace 7.1"]
title = "How To Add A Desktop Burger To Squarespace 7.1"
twitter_description = ""
twitter_image = ""
twitter_title = ""

+++
A common question that comes up in the forum is how can you get a burger or mobile menu on desktop in Squarespace 7.1.

While it’s possible to make the mobile burger appear on desktop it requires overriding the media queries and trying to hide the desktop menu.

An alternative is to create a burger menu that’s specific to desktop. And that’s what we’re going to do today.

### Compatibility/Requirements

* Tested on Squarespace 7.1
* Requires Business plan

### Step 1: Add a folder to your Squarespace Navigation Area

The first thing you need to do is add a folder to your Squarespace navigation. The links inside this folder is what the desktop burger will use.

![](/uploads/add-folder.png)

You can place the burger folder anywhere in your navigation and it will work but the ideal spot is the last spot in your navigation. Otherwise the burger icon will appear in the middle of your navigation links.

You can name the page title and navigation title to whatever you want (i.e. Desktop Burger)

However for the URL slug, be sure that it’s set to **/burger**. This is what the script requires to work properly

![](/uploads/burger-menu-settings.png)

### Step 2: Add page and external links to your burger folder

Once you've created the folder you can start adding links inside the folder. They can be page links or external links. At this time you can't nest a folder.

These are the links that will appear when the burger overlay appears.

![](/uploads/burger-overlay-demo.png)

### Step 3: Add the burger script to your site

Once you've setup your burger folder you can add the script that will add the desktop burger to your site.

Add this code to _Settings -> Advanced -> Code Injection -> Footer_

```html
<script src="https://cdn.jsdelivr.net/gh/ryandejaegher/better-burger@latest/script.js"></script>
<better-burger></better-burger>
```

Once you’ve added the burger you'll need to add the `<better-burger></better-burger>` element to your footer.

![](/uploads/add-burger-script-2x.png)

Save and reload the page and you should have a burger icon that has replaced the original text for your burger folder.

#### Before Adding The Burger Script

![](/uploads/before-burger-2x.png)

#### After Adding The Burger Script

![](/uploads/burger-after-2x.png)

### Step 4: Styling the Burger

By default the burger icon will be black, and the background for the burger overlay will be white. You may need to change colors based on your header color. For example if your menu has a black background, then you'll want to change the burger icon color to white.

If you need to change the burger styling you can add the CSS below to your custom CSS.

```css
/* This will handle styling the burger icon color*/
a[href="/burger"] path {
	fill: black !important;
}

/* Removes the underline set by Squarespace active class */
a[href="/burger"] {
	background: none !important;
}

/* This will handle styling the background color of the burger overlay */
better-burger {
	background: red;
}

/* This will handle styling the links inside the burger menu */
better-burger a {
	color: black;
}
```

### Step 5: Hiding the desktop burger on mobile

The desktop burger affect or replace the mobile hamburger menu. This means that your desktop burger links will still be visible in the mobile menu.

![](/uploads/burger-links-visible-mobile.png)

If you don't want the desktop burgers links to appear on mobile you can add the CSS below to hide them.

```css
/* This will hide the desktop burger on mobile devices*/
@media(max-width:767px) {
a[href="/burger"] {
display: none;
}
}
```

![](/uploads/burger-links-hidden-mobile.png)

### Step 6. Only Show Desktop Burger

What if you only want to show the desktop burger on mobile and none of your other links. You can add the CSS below to your custom CSS.

```css
/* If you only want to have the desktop burger visible this CSS will remove all the */
@media(min-width:767px) {
.header-nav-list a:not([href="/burger"]) {
display: none;
}
}
```

What this does is targets any link in the navigation and if the link doesn't match your burger link it gets hidden, leaving you with just the desktop burger menu. This CSS won't affect your social links or the cart icon.

![](/uploads/only-desktop-burger-visible.png)

### Questions/Feedback?

If you have questions or are running into issues with the script feel free to send me a message on [Facebook Messenger](https://m.me/dejaegherryan) or [email me](mailto:ryan@ryandejaegher.com).

{{% embed/mailerlite form="squarespace" %}}