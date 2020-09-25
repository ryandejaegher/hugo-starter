+++
articleFeatureImage = ""
customize_seo = false
date = 2020-09-25T19:59:29Z
draft = true
excerpt = "In todays tutorial we’re going to write a function that will animate the the social icons in Squarespace 7.1 when we hover over them"
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
tags = ["squarespace 7.1", "animation"]
title = "How to Animate Social Icons in Squarespace 7.1"
twitter_description = ""
twitter_image = ""
twitter_title = ""

+++
In todays tutorial we’re going to write a function that will animate the the social icons in Squarespace 7.1 so that they will get drawn/in when we hover over them.

When you hover over them you’ll get this cool effect

{{< embed/video src="/uploads/animation-draw-in.mp4" >}}

### Compatibility/Requirements

* Squarespace 7.1
* Business plan

### How does this work?

Squarespace’s social icons are SVGs (Scaleable Vector Graphics). This gives us a lot of flexibility and control over their design.

_Learn more about how you can style SVGs here:_ [How To Style Social Icons Squarespace 7.1](https://ryandejaegher.com/how-to-style-social-icons-squarespace-7.1/)

We can change the color of the icons. We can add a stroke/outline to the icons. We can make them bigger/smaller without losing quality or sharpness.

The reason we can do this is because SVGs are drawn/displayed in real time. Believe it or not this is actually the code for the Twitter icon. The **path** has a bunch of coordinates for displaying/drawing the twitter icon on screen.

```html
<svg id="twitter-unauth-icon" viewBox="0 0 64 64" width="110" height="110"><path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"></path></svg>
```

If you’ve worked with Adobe Illustrator or have a background in design you’re probably familiar with the SVG file format.

The good news is that we can animate this path and make it appear as if it's being drawn.

For a more in depth explanation of how animating lines/paths work, I'd recommend reading this article from [CSS-Tricks](https://css-tricks.com/svg-line-animation-works/).

If you're not concerned with the technical details lets get into it.

Everything we're going to be doing will take place in Code Injection (_Settings -> Advanced -> Code Injection -> Footer_)

### Step 1. Get all the social icons

The first thing we need to get is get all of our social media icons in the header. In Squarespace 7.1 this will grab all the social icons:

```javascript
var socialIcons = document.querySelectorAll('.header-actions-action--social svg')
```

### Step 2. Create the function to handle mouseenter event to "draw" the icon

In order for our animation to work we need to write a function that will run when we start hovering over one of our social icons.

This function is going to do a few things:

* gets the current icon that we're hovering over
* adds a stroke/outline
* sets the strokeDasharray to the total length of the path (this causes the path to be hidden)
* creates our animation settings and timing
* finally it runs our animation on the icon that we're currently hovering over

We're animating 2 things: the icon fill color, and the **strokeDashoffset** (i.e. _the stroke path_). When the strokeDashoffset is 0, the stroke is fully drawn, and when it's equal to the path length, it's fully erased.

```javascript
function handleMouseEnter(event) {
  var use = event.target.querySelector('use');
  var useID = use.getAttribute('xlink:href');
  var symbol = document.querySelector(useID + ' path');

  var svgPathLength = symbol.getTotalLength();
  var fillColor = getComputedStyle(use).fill;
  symbol.style.strokeDasharray = svgPathLength;
  symbol.style.stroke = 'black';

  var strokeKeyframes = {
    strokeDashoffset: [svgPathLength,0]
  };

  var strokeTiming = {
    delay: 500,
    duration: 1000,
    fill:'both',
    easing:'ease',
  };

  var fillKeyframes = {
    fill: [fillColor,'transparent']
  };

  var fillTiming = {
    duration: 500,
    fill:'forwards',
    easing:'ease',
  };

  animateFill = symbol.animate(fillKeyframes, fillTiming);
  animateStroke = symbol.animate(strokeKeyframes,strokeTiming);

  animateFill.pause();
  animateStroke.pause();
  animateFill.play();
  animateStroke.play();
}
```

### Step 3. Create function to handle the mouseleave event

Next we need to create a function that will reverse our drawing animation and return the icons to their default style when we stop hovering over the icon.

The function for this is easier because we're simply pausing the animation and then running it in reverse when we stop hovering over the social icon.

The benefit of running the animation in reverse is that the "draw animation" will reverse from it's current position when you stop hovering over the social icon.

```javascript
function handleMouseLeave(event) {
  animateStroke.pause();
  animateFill.pause();
  animateStroke.reverse();
  animateFill.reverse();            
}
```

### Step 4. Add event listeners to your icons

Now that we have our functions the last thing we need to do is pair them with an event listener.

Event listeners can be triggered based on certain actions or _events_. For example if we wanted something to happen when we ‘click’ a button, we would add a "click" listener to the button.

JavaScript has several event listeners, we’re going to use 2 related to mouse movement:

1. **mouseenter**: this event will trigger when our mouse is hovering over a specific element, in our case it’s going to be the social icon
2. **mouseleave**: this event will trigger when our mouse leaves or stops hovering over an element, again in this case it’s going to be the social icon.

Since we assigned our social icons to a variable earlier, we can use that to run a forEach loop and add event listener to each icon.

```javascript
socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', handleMouseEnter)
  icon.addEventListener('mouseleave', handleMouseLeave)
})
```

### Final Script

```html
<script>
(function(){
	window.addEventListener('load', function() {
        var socialIcons = document.querySelectorAll('.header-actions-action--social svg')
        if (!socialIcons instanceof NodeList) {
            return
        }
        var svg = document.querySelector('[data-usage="social-icons-svg"]')
        svg.style.display = 'inline';
        
        function handleMouseEnter(event) {
            var use = event.target.querySelector('use');
            var useID = use.getAttribute('xlink:href');
            var symbol = document.querySelector(useID + ' path');

            var svgPathLength = symbol.getTotalLength();
            var fillColor = getComputedStyle(use).fill;
            symbol.style.strokeDasharray = svgPathLength;
            symbol.style.stroke = 'black';
            
            var strokeKeyframes = {
                strokeDashoffset: [svgPathLength,0]
            }
            
            var strokeTiming = {
                delay: 500,
                duration: 1000,
                fill:'both',
                easing:'ease',
            }
            
            var fillKeyframes = {
                fill: [fillColor,'transparent']
            }
            
            var fillTiming = {
                duration: 500,
                fill:'forwards',
                easing:'ease',
            }
            
            animateFill = symbol.animate(fillKeyframes, fillTiming)    
            animateStroke = symbol.animate(strokeKeyframes,strokeTiming)
			
            animateFill.pause();
            animateStroke.pause();
            
            animateFill.play();
            animateStroke.play();
        }
        
        function handleMouseLeave(event) {
            animateStroke.pause();
            animateFill.pause();
            animateStroke.reverse();
            animateFill.reverse();
        }
        
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', handleMouseEnter)
        })
        
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseleave', handleMouseLeave)
        })
	})
})()
</script>
```

### Questions/Feedback?

If you have questions or are running into issues with the script feel free to send me a message on \[Facebook Messenger\](https://m.me/dejaegherryan) or \[email me\](mailto:ryan@ryandejaegher.com).  
{{% embed/mailerlite form="squarespace" %}}