+++
articleFeatureImage = ""
customize_seo = false
date = 2020-09-16T16:42:10Z
draft = true
excerpt = ""
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
tags = ["ecommerce", "squarespace 7.1"]
title = "Get Product Thumbnails Back on Mobile in Squarespace 7.1"
twitter_description = ""
twitter_image = ""
twitter_title = ""

+++
There was a question in the Squarespace Customization Resource Group about how to get the thumbnails for products to be visible on mobile in Squarespace 7.1

> I am trying to display thumbnails for my products on MOBILE under the main large photo on my product details pages. It's a 7.1 version template. Right now it's just displaying one photo at a time on mobile like a carousel which is not super mobile/user friendly!

Today I’m going to show you how you can add the thumbnails back on mobile using JavaScript.

## The Problem

By default Squarespace removes the thumbnail images on mobile, so visitors have to rely on swiping through the images one by one. Visitors may not even realize other product images are present.

![](/uploads/pixelsnap-2020-09-16-at-10-22-04-2x.png)

The other issue if you have multiple images. If you had 10 images a visitor would have to swipe through 9 times to get to the last one. If the thumbnails were present they could jump to the image they want to see with one tap.

Unfortunately CSS alone won’t fix this issue because Squarespace removes the `src` on the image pointing to the thumbnail file, so even if you can display the image with CSS it’s not actually pointing to a file.

For this we need JavaScript.

## The Solution

We're going to write some custom code i.e. JavaScript that will get the product thumbnails back on mobile in Squarespace 7.1.

This is what we're looking for

![](/uploads/pixelsnap-2020-09-16-at-10-23-07-2x.png)

### What This Script Will Do

Let's break the script down a bit and walk through all the actions we need to take to get the thumbnails back on mobile.

1. Get the thumbnail images that are hidden on mobile
2. Move them from their desktop position to after the main product image on mobile
3. Add some custom CSS and styles so that the images fit into a row instead of a column to prevent the page layout from getting too long
4. Move the thumbnails back to their original location when visitors are on tablet and desktop and set the layout back to a column instead of a row.

### Compatibility/Requirements

* Squarespace 7.1
* Requires Business Plan (Code Injection)

This tutorial is all JavaScript. If you’re not comfortable with code injection or JavaScript I’m available for custom development. If you are fearless, then continue!

### Writing The Script

Everything we’re going to be doing will take place in the **Code Injection** (footer) in Squarespace _(Settings -> Advanced -> Code Injection -> Footer)_

The code examples below will build on each other and explain what's happening.

### Step 1. Create a script tag in Code Injection

When you're adding JavaScript to code injection, it needs to go in between `<script></script>` tags. It's very easy to forget this.

### Step 2. Create an event listener to wait for the page to load

To make sure that the script only runs once the page and images are fully loaded, we need to add an event listener. Event listener’s fire when certain actions or events take occur and one of those events is **load**.

If we don't add this the script may run before the page is loaded which could prevent the script from working properly.

```html
<!-- Code Injection Footer -->
<script>
(function(){
    window.addEventListener('load', function() {
    //All the code we're going to write will go inside this function
})
})()
</script>
```

### Step 3. Get the thumbnails and the main product gallery

Next we need to create variables to grab the **product thumbnails** and the **main product image**.

We'll also add an **if statement** to check that the product gallery exists on the page. This ensures the code will only run if there's actually a product gallery on the page. If it doesn't exist, the script will stop.

```javascript
// The main product image
var productGallery = document.querySelector('.ProductItem-gallery')

// If there is no product gallery, end the script
if (!productGallery instanceof Element) {
    return
}

// The product thumbnails that are hidden
var productThumbnails = document.querySelector('.ProductItem-gallery-scroll');
```

This code will grab these elements from the page.

![](/uploads/pixelsnap-2020-09-16-at-10-24-22-2x.png)

### Step 4. Create a function that will move the thumbnails on mobile and set the style

Next we're going to write the function that will move the thumbnail on mobile and give it some custom style so that it displays in a row.

You can think of functions as actions. You write them once and then you can reuse them anytime. Which we'll do in later steps.

```javascript
function moveThumbnailsOnMobile() {
    // This moves the product thumbnails after the product gallery
    productGallery.insertAdjacentElement('afterend', productThumbnails);
    
  	// Add custom style to set the thumbnails to display in a row. The default display for elements with flex is a row. 
    productThumbnails.children[0].style.display = 'flex';
}
```

If we didn't add the custom style the thumbnails would still be laid out as a column like the image below.

![](/uploads/pixelsnap-2020-09-16-at-12-31-02-2x.png)

### Step 5. Create a function that will move the thumbnails back on desktop and reset the style

Next we'll write a function to handle moving the thumbnails back to their original position on desktop and reset the style so that they go back to displaying as a column instead of a row.

```javascript
function addThumbnailsBackToDesktop() {
    // This moves the product thumbnails after the product gallery    
    productGallery.insertAdjacentElement('afterbegin', productThumbnails);
    
    // This sets the the style to '' or empty. This will remove the styling we added before to display the thumbnails in a row 
    productThumbnails.children[0].style='';
}
```

This code will give you the original layout on desktop.  
![](/uploads/pixelsnap-2020-09-16-at-11-45-26-2x.png)

### Step 6. Create a function to check the viewport size

Next we need to create a function to check the viewport or window size.

This is necessary for ensuring that we run the right function only when the viewport is a certain size. In this case we want to know when the viewport is larger than 767px or smaller than 767px.

**_Why 767px?_**

By default Squarespace shows the thumbnails when the **viewport is > 767px**, which is often the size for tablets and desktop.

This function will check whether the viewport/window width is greater than 767px. If it is, it moves the thumbnails back to their original position on desktop.

If it's less than 767px, then the function runs the code to move thumbnails on mobile. This is where we'll also run our functions (`addThumbnailsBackToDesktop` and `moveThumbnailsOnMobile`) that we wrote above.

```javascript
function checkViewportSize(){
    var viewportWidth =  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    var viewportHeight =  Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)        
    
    // if desktop (greater than 767px), add back to original location     
    if (viewportWidth > 767) {
        addThumbnailsBackToDesktop();
    } else {
        moveThumbnailsOnMobile()
    }
}
```

### Step 7. Add Event Listener for Resize on the Window

We’re not done with event listeners yet, we need to add another one to listen for **when the window/viewport resizes**.

Why do we need to do this? This ensures that script will run when you’re editing in Squarespace and switching between the desktop and mobile views.

If we don’t do this the script would only run once when the page is loaded initially and the code for checking the viewport size wouldn’t run again.

This will ensure the code runs when the window size changes. Everytime the viewport resizes we run the function **checkViewportSize** which decides whether or not to move the thumbnails on mobile.

```javascript
window.addEventListener('resize', function(){
    checkViewportSize()
})
```

### Putting it all together

Now we're ready to put everything together and test it out. Since we've put all of the code inside the the function for the **load** event listener, the code will only run once the page has fully loaded.

```html
<!-- Code Injection Footer -->
<script>
(function(){
    window.addEventListener('load', function(){
    
    	var productGallery = document.querySelector('.ProductItem-gallery')
    
    	if (!productGallery instanceof Element) {
    		return
    	}
    
    	var productThumbnails = document.querySelector('.ProductItem-gallery-scroll');
    
    	function moveThumbnailsOnMobile() {
    		productGallery.insertAdjacentElement('afterend', productThumbnails);
    		productThumbnails.children[0].style.display = 'flex';
    	}
    
    	function addThumbnailsBackToDesktop() {
    		productGallery.insertAdjacentElement('afterbegin', productThumbnails);
    		productThumbnails.children[0].style='';
    	}
    
    	function checkViewportSize(){
    		var viewportWidth =  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    		var viewportHeight =  Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    
    		if (viewportWidth > 767) {
    			addThumbnailsBackToDesktop();
    		} else {
    			moveThumbnailsOnMobile()
    		}
    	}
        
    	window.addEventListener('resize', function(){
    		checkViewportSize()
    	})
    	checkViewportSize();
    })
})();
</script>
```

To test out and ensure it's working go to a product page and switch between desktop and mobile view. If everything is working correctly you should have thumbnails on mobile view now :)

![](/uploads/pixelsnap-2020-09-16-at-10-23-07-2x.png)

### Questions or Feedback?

If you have questions or are running into issues with the script feel free to send me a message on [Facebook Messenger](https://m.me/dejaegherryan) or [email me](mailto:ryan@ryandejaegher.com).

  
{{% embed/mailerlite form="squarespace" %}}