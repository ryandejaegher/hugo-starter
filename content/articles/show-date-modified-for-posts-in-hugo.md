+++
articleFeatureImage = ""
customize_seo = false
date = 2020-07-14T17:35:22Z
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
tags = []
title = "Show Date Modified For Posts In Hugo"
twitter_description = ""
twitter_image = ""
twitter_title = ""

+++
I'm a big fan of CSS Tricks and one thing I like about their articles is that you can see the original publish date and the last time a post has been updated/modified. This is especially important for a topic like web development where things are constantly changing and best practices are shifting. 

\[\[tk: CSS tricks image\]\]

From the creators perspective, this gives you the best of both worlds. You benefit from publishing strong evergreen content and then update it as required without the content appearing outdated.

This also means you don't have to rewrite an entirely new post for a small update.

In the process of setting up my own personal site with Hugo I wanted to have this same feature.

Hugo makes it really easy to added a modified date by giving you variables for **Git revisions** and one of those variables is **{{ .Lastmod }}**. 

Whenever you edit an existing post and commit it to Git, the {{.Lastmod}} variable will reflect the date of the commit. 

Now 

\## Problems:

* Should we show the date modified if the dates match?
* By default when posts are published the publish date and the modified date will match? Should this 
* Should we make it optional to show the modified date? Or should it show intelligently without require user input?

Requirements:

### Solution

We can use 

### Code Snippet

    {{if ne (dateFormat "January 2, 2006" .Date) (dateFormat "January 2, 2006" .Lastmod)}}
    	<time class="italic block text-sm font-medium uppercase text-{{$themeText}}-600" datetime="{{ .Lastmod }}"
         pubdate>Updated: {{ dateFormat "January 2, 2006" .Lastmod }}</time>
     {{end}}