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
I'm a big fan of CSS Tricks and one thing I like about their articles is that you can see the original publish date and the last time a post has been updated/modified. 

\[\[tk: CSS tricks image\]\]

This gives you the best of both worlds. You can benefit from publishing strong evergreen content and then update it as required without the content appearing outdated.

This also means you don't have to rewrite an entirely new post just to give a small update.

Hugo makes it really easy to added a modified date by giving you variables for **Git revisions** and one of those variables is \`{{.Lastmod}}\`

Problems:

* 

Requirements: