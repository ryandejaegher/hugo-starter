+++
articleFeatureImage = "/uploads/pixelsnap-2020-09-15-at-12-01-40-2x.png"
customize_seo = false
date = 2020-09-15T16:46:52Z
draft = true
excerpt = ""
facebook_description = ""
facebook_image = ""
facebook_title = ""
layout = "single-left"
publishdate = ""
seo_description = ""
seo_title = ""
showCodeHighlighting = false
showPrevNext = false
showReadTime = false
show_article_options = false
show_custom_social = false
show_large_twitter_card = false
show_table_of_contents = false
tags = ["squarespace 7.1", "squarespace"]
title = "Add Fixed Vertical Navigation To Squarespace"
twitter_description = ""
twitter_image = ""
twitter_title = ""

+++
Looking for an easy way to add a fixed vertical navigation to your Squarespace site? Today I'm going to share a little script with you that you can use to easily add a vertical navigation to your entire site or to individual pages or both!

### Installation Instructions

To get the vertical nav element you'll need to add this script through Code Injection

_Add this code to Settings -> Advanced -> Code Injection -> Footer_

![](/uploads/script-install-2x.png)

Want to get notified when the script is updated? Join the mailing list.

### Benefits

Get an additional menu without interfering with the default menu

### How does it work?

Add <vertical-nav> and then add your links in between. Here's what the code snippet looks like.

    <vertical-nav>
    	<a href="#">First Link</a>
        <a href="#">Second Link</a>
        <a href="#">Third Link</a>
        <a href="#">Fourth Link</a>
    </vertical-nav>

Set the **_side_** to specify which side the menu will remain fixed on. You can choose **left** or **right.**

    <vertical-nav side="left">
    	<a href="#">First Link</a>
        <a href="#">Second Link</a>
        <a href="#">Third Link</a>
        <a href="#">Fourth Link</a>
    </vertical-nav>
    
    <vertical-nav side="right">
    	<a href="#">First Link</a>
        <a href="#">Second Link</a>
        <a href="#">Third Link</a>
        <a href="#">Fourth Link</a>
    </vertical-nav>

Now that you know what the code looks like let's look at how you can use it on your Squarespace site.

### Add Vertical Nav To All Squarespace Pages

![](/uploads/add-vertical-nav-2x.png)

 fI

### Add To Individual Pages

You'll need to insert a code block into the page where you'd like to add the vertical-nav. ((does this work with page settings/code injection?))

![](/uploads/vertical-nav-both-sides-on-page-2x.png)

### Mix Site Wide + Individual Pages

### Compatibility/Requirements

* Squarespace 7.0/7.1
* Requires Business Plan

### Notes

Limit it to 4-6 links

Menu will be hidden on mobile, the reason is that there isn't enough room on mobile to ensure that it doesn't overlap the main content. 