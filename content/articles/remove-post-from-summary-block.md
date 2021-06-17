---
title: Remove Current Post From Summary Block in Squarespace
excerpt: Learn how to remove the current page from the related posts in Squarespace
tags:
    - Squarespace
    - Code Snippet
date: 2021-06-17T16:37:34.192Z
articleFeatureImage: '/uploads/remove-related-post-thumbnail.png'
publishDate: null
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
slug: remove-current-post-summary-block-squarespace
---

_Update: Typo in code snippet has been fixed_

When using the summary block to display "related posts" at the end of a blog post, Squarespace will often include the current post. This doesn't make sense, we're already on this page! So how can you remove the current post from the related posts section?

![Duplicate post in related section](/uploads/duplicate-post-in-related-section.png)

Today I'm going to share a simple snippet that you can add to your site that will remove the current post from the summary block.

### Requirements

-   Squarespace 7.1
-   Business Plan

### Code Snippet

Add this code to _Settings -> Advanced -> Code Injection -> Footer_:

```html
<script>
    window.addEventListener('load', function () {
        function removeMatchingPageFromRelatedPosts() {
            var currentPath = window.location.pathname;

            var matchingSummaryItem = document.querySelector(`[href="${currentPath}"]`);

            if (!matchingSummaryItem) return;

            var summaryParent = matchingSummaryItem.closest('.summary-item');

            summaryParent.remove();
            console.log('matching blog post removed');
        }

        removeMatchingPageFromRelatedPosts();
    });
</script>
```

### How does this code work?

The first thing the code does is grabs the current pages path. The path is the part that comes after your domain. So if your site is `https://mycoolsite.com/blog/cool-article`, the domain would be `https://mycoolsite.com` and the path would be `/blog/cool-article`.

Next we search the page for a link that matches the page path. If you're using a summary block to display related posts then there's a good chance it may include the current page you're on.

If it doesn't find a link that matches the current page path, the function stops. If it does find one then removes it from the summary block.

And just like that we've removed the current page from the related posts section.

![Removed duplicate post in related section](/uploads/removed-duplicated-post.png)

### Questions/Feedback?

If you have questions or are running into issues with the script feel free to send me a message on [Facebook Messenger](https://m.me/dejaegherryan) or [email me](mailto:ryan@ryandejaegher.com).

{{% embed/mailerlite form="squarespace" %}}
