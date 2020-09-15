+++
articleFeatureImage = "/uploads/pixelsnap-2020-09-15-at-12-01-40-2x.png"
customize_seo = false
date = 2020-09-15T16:46:52Z
draft = true
excerpt = "Add a simple script to your Squarespace site to get a vertical navigation on your site. "
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

Want to get notified when the script is updated? Join the mailing list

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

If you want to have a vertical navigation on all your pages you'll need to add the vertical-nav element to the Code Injection in site settings (_Settings -> Advanced -> Code Injection -> Footer)_

This can be a great way to add fixed social links along the side or **add anchor links to site sections.**

What if you just want to add vertical navigation to a single page. Keep reading.

### Add To Individual Pages

To add a vertical navigation to a single page you'll need to insert a **code block** into the page where you'd like to add the vertical-nav.

It doesn't matter where the code block is located because the vertical-nav takes care of positioning itself. However to ensure you can easily update it or remove in the future, I'd recommend placing the code block at the bottom or at the top of the page to make it easier to find.

![](/uploads/vertical-nav-both-sides-on-page-2x.png)

### Mix Site Wide + Individual Pages Vertical Navigation

Remember how you can choose set the vertical-nav to a specific side? This opens up some interesting possibilities for how you can use the vertical-nav element.

* You could have 2 vertical navigations across your entire site
* You could have 2 vertical navigations on a single page
* You can also have 1 vertical navigation across the entire site and then vertical navigation that is specific to each page.

If that last option interests you, you'll need to add a <vertical-nav> element to the Site Code Injection and to a code block on the page you want to use.

You'll also need to ensure that you set the **_side_**_._ So if you want a vertical navigation on the left side for the entire site you'd add this to the Site Code Injection.

_![](/uploads/vertical-nav-side-left-2x.png) _

Then on the page where you want to have a vertical navigation on the right you'd add a code block and set the **side to right** on the <vertical-nav> element.

![](/uploads/page-specific-vertical-nav-2x.png)

### Compatibility/Requirements

* Squarespace 7.0/7.1
* Requires Business Plan

### Notes

Limit it to 4-6 links

Menu will be hidden on mobile, the reason is that there isn't enough room on mobile to ensure that it doesn't overlap the main content.