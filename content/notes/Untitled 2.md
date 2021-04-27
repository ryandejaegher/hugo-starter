---
title: 'Testing embeds for Descript, Framer, and Figma / The Problem with Exports'
articleFeatureImage: 
customize_seo: false
date: 2021-03-30
draft: true
excerpt: ''
facebook_description: ''
facebook_image: ''
facebook_title: ''
layout: single-left
publishdate: ''
seo_description: ''
seo_title: ''
showCodeHighlighting: true
showPrevNext: false
showReadTime: false
show_article_options: false
show_custom_social: false
show_large_twitter_card: false
show_table_of_contents: false
tags:
twitter_description: ''
twitter_image: ''
twitter_title: ''

---

Today Framer just released the ability to embed live prototypes on sites. 

This is super exciting because it means you can publish and share a working prototype directly on your site. 

In addition to **Framer** adding web embed I also want to experiment with embedding **Descript** directly into a page. 

The question is why would you want to do this? Wouldn't it be better to embed a static image/mockup or in the case of Descript, export a video, upload to YouTube, and embed that video?

<!-- Embed Descript video @id -->
{{% embed/descript id="4zXIA9AYAOo" %}}

<!-- Embed Framer @src -->
{{% embed/framer src="https://framer.com/embed/wCIEkHIkVa6k06NOMlsh/i82JJq0To" %}}

What would be the advantage of embedding a **live prototype or project?** 

- We want to share our work in progress
- We want to get feedback on our work
- Update your work without exporting

To understand the benefits of embedding live prototypes it helps to look at another workflow for how we share **work in progress**

### Old way: Export workflow

Traditionally if you wanted to share some work in progress, you would need to export your work in a format that you can easily send and share. The lowest common denominator in this case is often **email**.

Or if you're wanting to share work in progress on your site you'd export images (jpg, png) and add them to your site.

But what if you want to share and iterate quickly? And what if you wanted to show comparisons? Everytime you make a change you'd need to export your work again and upload to your site. 

The export and upload workflow is too slow. 

- Exporting is a lie
	- The false promise of exporting is that "this is it"
	- This is really the one 
- Images and video are often the heaviest assets to load on a page
	- You know you should be optimizing all of your images, but when you're iterating quickly it's an added step.
