---
title: Problem With CSS Blur and Animation
excerpt: null
tags: null
date: 2021-05-27T15:15:40.625Z
publishDate: null
layout: null
facebook_image: null
facebook_title: null
seo_title: null
seo_description: null
showCodeHighlighting: null
showPrevNext: null
showReadTime: null
show_article_options: null
show_custom_social: null
show_large_twitter_card: null
show_table_of_contents: null
twitter_image: null
twitter_title: null
slug: null
---

Today I was trying to implement a blur effect while hovering over images. I ran into 2 problems.

### Problem One: Blurs create soft white edges

This gives it a weird white glow along the edges.

### Problem Two: Scaling images can fix the soft edges but didn’t work with animations

You can scale the images to fix the soft edges. This does work.

However it’s likely you want to add in some animation so that the change isn’t so abrupt.

This is where you’ll run into the third issue.

### Problem Three: Hover animations don’t work, white edges from blur remain visible until the transform is complete

### Solution: `will-change: content;`

The solution was using `will-change: content`;
