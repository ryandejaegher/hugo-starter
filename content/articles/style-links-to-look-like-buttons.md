+++
articleFeatureImage = ""
customize_seo = false
date = 2020-08-17T13:00:44Z
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
title = "Style Links to look like buttons"
twitter_description = ""
twitter_image = ""
twitter_title = ""

+++
Recently there was a question in Squarespace forums about how to style a navigation link to look like a button.

Today I'm going to show you how to do this with custom CSS and also share some of the do's and don't's when implementing this feature. First let's look at the purpose for this kind of design.

## Why Make Your Link Look Like a Button?

Sometimes you have a specific action you want visitors to take and you want to highlight this action in your navigation. That action could be

* **Contact Us**
* **Sign Up**
* **Get Started**

This is a very common design pattern you'll see across websites. You can see an example of this on the Squarespace homepage. Notice the **Get Started** button on the far right.

![Squarespace navigation with button link][image-1]

By making the link look like a button it makes it stand out amongst the other elements in the navigation. The size and different color quickly draws peoples attention to it.

How do you do this???

* 
  1. Add a link to your navigation
  * 
	1. This can be an existing page, an external link, or folder

What makes the link look like a button? Background color and padding.

* Some considerations
* Don't add this to the button in the middle of links
  * i.e. Link Link **Button** Link Link

## Rules of Thumb

There are some simple rules you can follow and somethings to avoid to make this design work for you. 

### Rule One: No More Than Two Buttons

You shouldn't have any more than 2 button style links. What makes this design work is that the one button stands out amongst the other links. If you have multiple button links it dilutes the strength of the effect.

If you want to have two button links, it's important to not make them the exact same. One button should be the **primary button,** and the other should be the **secondary buton.**

You'll often see this design pattern for web apps/tools that encouraging visitors to sign u p, but they also want to make it easy for existing users to login. Notice in the examples below --- **Sign Up** is the primary button, **Log In** the secondary button. 

![][image-2]![][image-3]

### Styling Your Primary Button

The primary button will often have solid background color that matches your main brand color. You'll also need to add some padding to create spacing around the button edges. 

### Styling Your Secondary Button

The secondary button is shares a lot of design with the primary button. The main difference is the **secondary button has no background color and instead uses a border**. The lack of a background color gives it less **visual weight** compared to the primary button. 

### Rule Two: Button Links Should Never Be In Middle

In the examples above you'll notice that these button style links are almost always on the right side of the page at the end of the navigation. 

[image-1]:	/uploads/squarespace-header.png
[image-2]:	/uploads/mailchimp-header.png
[image-3]:	/uploads/typeform-header.png