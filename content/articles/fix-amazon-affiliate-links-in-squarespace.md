+++
articleFeatureImage = "/uploads/fix-amazon-affiliate-links.png"
customize_seo = false
date = 2020-09-22T19:39:18Z
excerpt = "Learn how to write a script that will automatically add ref=nofollow to all your Amazon Affiliate links and Amazon Product Blocks."
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
tags = ["squarespace"]
title = "Fix Amazon Affiliate Links in Squarespace"
twitter_description = ""
twitter_image = ""
twitter_title = ""

+++
Recently there was a question about how to ensure that Amazon Links are setup correctly in Squarespace:

> Hi. Is there a way to make gallery click-through urls no follow in SQS? I have a blog and I want to add a summary block with affiliate product images to my posts. Someone recommended adding code specific to each vendor (Amazon, target etc) to the footer, which I did. But I need to be certain that's actually robust enough. I can't risk Google black-balling my blog down the road.

Today I’m going to show you how to create a simple script that will ensure your **Amazon Affiliate links** are setup correctly. First I'll explain the issue with the Amazon Block in Squarespace.

### Compatibility/Requirements

* Squarespace Business Plan
* Squarespace 7.0/7.1

### The Problem With The Amazon Block in Squarespace

Squarespace has an Amazon Block which makes it easy to add affiliate products to your site. As long as you’ve added your Amazon Associates ID to Squarespace (*Settings -> Advanced -> External API Keys -> Amazon Associates ID *) it will automatically create an affiliate link for the product you’ve chosen in the Amazon Block.

![](/uploads/add-amazon-associates-id-2x.png)

![](/uploads/amazon-product-block-2x.png)

However it doesn’t set the `target: _blank` and the `rel=nofollow` and this can cause problems with SEO.

According to **Christy Price**:

> It’s best practice to add a nofollow or sponsored tag to affiliate links. If your site contains many sponsored links that aren’t tagged, it could negatively affect your search rank. - [christyprice.com](https://christyprice.com/squarespace-tips-tricks/how-to-add-affiliate-links-in-squarespace)

Christy shows how you can get around this issue by creating your own links manually, but we can also set it and forget it with JavaScript.

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/1hMjJILpxoWpQad37L" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/billy-mayes-1hMjJILpxoWpQad37L">via GIPHY</a></p>

### The "Set It And Forget It" Script for Amazon Affiliate Links

I’m going to share a script that you can use to automatically add nofollow and target blank to all your Amazon links.

This will let you use the Amazon block and won’t require you to create your own links again.

### Step. 1 Add this script to Settings -> Advanced -> Code Injection -> Footer

```html
<script>
(function(){
window.addEventListener('load', function() {
var fixAmazonLinks = function() {
var amazonLinks = document.querySelectorAll('a[href*="amazon.com"], a[href*="amzn.to"]');
if (!amazonLinks instanceof NodeList) {
return
}

amazonLinks.forEach(link => {
link.rel="nofollow"; 
link.target="_blank";
})
} 
})
})()
</script>
```

![](/uploads/amazon-links-in-script-2x.png)

What does this script do?

First it grabs any link that contains “**amazon.com**” in the href. It will also grab any links that contain “**amzn.to**” incase you already setup some affiliate links.

If it doesn’t find any Amazon links the script stops.

If it does find Amazon links it will set the **rel attribute to nofollow** and set the link **target to _blank** so that it opens in a new tab.

The good news with this script is that even if you didn’t use the Amazon Block and manually setup your own Amazon affiliate links with the Amazon shortlink (“https://amzn.to”) it should work.

And with the Amazon Block it will apply it to the links that come from the product image, the buy now button, and the title.

### Step 2. Verify that the script worked by checking your Amazon Links

If you click any of your Amazon links they should all open in a new tab. And to verify that the links **ref=nofollow** you can inspect the link by right-clicking and selecting "Inspect" on Chrome. This will open the source code and let you see the link and all of it's attribrutes (_href, ref, target etc._).

![](/uploads/inspect-element.png)

If the script is working correctly then your Amazon links should all have **target=_blank** and **ref=nofollow**.

![](/uploads/verify-referrer-copy.png)

### Summary

Now you can use the Amazon Product Block to add your affiliate links and you don't have to worry about setting up your own Amazon Affiliate links again :).

At any point you can remove this script and your links to revert to their default behaviour.

### Questions or Feedback?

If you have questions or are running into issues with the script feel free to send me a message on Facebook Messenger or email me.

{{% embed/mailerlite form="squarespace" %}}