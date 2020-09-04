+++
articleFeatureImage = ""
customize_seo = true
date = 2020-08-16T20:26:51Z
draft = false
excerpt = ""
facebook_description = ""
facebook_image = ""
facebook_title = ""
layout = "single-left"
publishdate = ""
seo_description = ""
seo_title = ""
showCodeHighlighting = true
showPrevNext = false
showReadTime = false
show_article_options = false
show_custom_social = false
show_large_twitter_card = false
show_table_of_contents = false
tags = ["squarespace", "squarespace 7.1", "squarespace header"]
title = "How To Hide The Header On Squarespace 7.1"
twitter_description = ""
twitter_image = ""
twitter_title = ""

+++
A common question I see in the Squarespace Forums and Squarespace Facebook groups is:

**_"How can I hide the header on a specific page?"_**

**_"How do I make a cover page in Squarespace 7.1?"_**

A common reason for wanting to hide the header is to turn a page into a **landing page**. Today I'm going to show you 3 ways you can hide the header in Squarespace to turn any page into a landing page.

## What's a Landing Page?

Landing pages are often used when you want a visitor to take a _specific action_ on your site.

1. Join a waitlist
2. Sign up for a free download
3. Contact you about a service

From [Unbounce](https://unbounce.com/landing-page-articles/what-is-a-landing-page/ "What is a landing page?"):

> In digital marketing, a **landing page** is a standalone web page, created specifically for a marketing or advertising campaign. It’s where a visitor “lands” after they click on a link in an email, or ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web.
>
> Unlike web pages, which typically have many goals and encourage exploration, landing pages are **designed with a single focus or goal**, known as a call to action (or CTA, for short).

Typically landing pages will have no header or navigation. The reason for this is to encourage visitors to take a **_specific action_** on the page.

When it comes to landing pages there should only be 2 actions a visitor can take:

1. **Your desired action** (_sign up, contact you_)
2. **Leave the page**

Removing the navigation helps limit the actions a visitor can take, it prevents them from getting distracted with links to other pages on the site.

Now that you know about the purpose of a landing page let's look at how you can hide the header in Squarespace 7.1

## How Do You Hide The Header in Squarespace 7.1?

There are a few different ways to hide the navigation. I'll show you how to do it and then I'll talk about the pro's/con's to each approach.

### Option 1: Hide header on all pages

The simplest way to hide the header in Squarespace is with custom CSS.

You can add this code to the custom CSS section:

```css
    header {
    	display: none !important;
    }
```

This code will hide the header (logo, navigation) on every page of your site. This will also hide the header on mobile as well.

![](/uploads/hide-squarespace-7-1-header-globally-with-custom-css.png)

This code may be fine if you're just starting your site with Squarespace and just need a simple coming soon page with no navigation.

On the other hand this is a bit heavy handed because it's **hiding the header on the entire site.**

What if you just want to hide the header on a specific page? Keep going

### Option 2: Hide header on specific page (_easy mode_)

Squarespace lets you add code to pages through the **Page Settings.** This lets us add code that will only affect a specific page instead of the entire site.

You can take the same code above and apply it to **Page Settings -> Advance -> Code Injection.**

![](/uploads/squarespace-7-1-page-settings.png)

There's a slight adjustment you have to make to the code. You have to wrap it in a **style tag**.

```css
    <style>
    header {
    	display: none !important;
    }
    <style>
```

Once you add this the header should be hidden on that page. Make a mental note that you've added this code to the page. It can be easy to forget this section which can cause confusion in the future when you wonder why your header isn't visible.

![](/uploads/hide-squarespace-7-1-header-with-page-settings.png)

This option is an improvement over hiding the header on all pages but what if you want to hide the header on multiple pages? You could add this code to multiple pages but that's a pain in the ass. There's a better way.

### Option 3: Hide header on multiple pages (hard mode)

Going back to the custom CSS section it's possible to hide the header on specific pages using the pages **collection ID.**

Every page in Squarespace actually has a **unique collection ID**. This collection ID can help us target specific pages that we want to apply our code too.

{{<embed/streamable rigmv1>}}

??? How do you find it? (If you don't know how to find collection ID, check out this article)

Once you have your collection IDs you can go to your custom CSS to add the code:

```css
    #collectionID header {
    	display: none !important;
    }
```

How do you hide the header on multiple pages? You just need to get the collectionID for the other pages you want to hide.

``` css
    #firstCollectionID header {
    	display: none !important
    }
    
    #secondCollectionID header {
    	display: none !important
    }
```   

You could write the code like this but this is repetitive, you have to keep writing `display:none;`

You can add the same rule to multiple pages/collectionIDs by grouping them together. You do this by adding a comma between each page selector.

You can also make it easier to read by putting each header on a new line.

```css
    #firstCollectionID header, 
    #secondCollectionID header, 
    #thirdCollectionID header {
    	display: none !important
    }
```

The benefit of this approach is that your code isn't scattered across multiple pages. You can see all the pages where this code is being applied and you can add/remove pages where you want the header hidden in one spot.