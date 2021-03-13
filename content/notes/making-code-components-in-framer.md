---
title: 'Create Device Mockups from Live Sites In Framer'
articleFeatureImage: 
customize_seo: false
date: 2021-03-12
draft: true
excerpt: 
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
- framer
- react
twitter_description: ''
twitter_image: ''
twitter_title: ''
---

Today I'm going to show you how can use Framer to get those nice device mockups. You know what I mean (the iMac, the iPhone).

What's really cool about this setup

### Problem
What's the problem I'm solving
- You want to get a nice device mockup
- You don't want to deal with cropping and resizing images to fit a device mock up

### Solution

Notes
- Depending the site and it's iframe policy, it may or may not work. 
- Some sites block the ability to be loaded through an iFrame
- Shopify URLs won't work
- Squarespace and WordPress sites work


### Code

```jsx
import * as React from "react";
import { Frame, addPropertyControls, ControlType } from "framer";

// Learn more: https://framer.com/api

export function Mockup(props) {
  const { src } = props;

  return (
    <Frame background="none" style={{ width: "100%", height: "100%" }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </Frame>
  );
}

Mockup.defaultProps = {
  src: "https://hopeconstruction.ca/",
};

addPropertyControls(Mockup, {
  src: {
    title: "URL",
    type: ControlType.String,
  },
});


```