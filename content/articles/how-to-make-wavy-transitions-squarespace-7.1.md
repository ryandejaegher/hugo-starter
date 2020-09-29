+++
articleFeatureImage = ""
customize_seo = false
date = 2020-09-29T16:09:03Z
draft = true
excerpt = "Commodo risus dolor posuere vitae gravida senectus lacus sodales turpis, arcu convallis vel nascetur nisl sit ut facilisis "
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
tags = []
title = "How to make wavy transitions Squarespace 7.1"
twitter_description = ""
twitter_image = ""
twitter_title = ""

+++
At some point after designing some sites you’ve probably noticed that your designs are falling into a pattern. 

Your site design is starting to feel “**blocky**".

You just have these sections or blocks stacked on top of each other. It starts to feel a little boring

How can we change this?
![/uploads/Squarespace Block Sections.png]

We need a way to break up the monotony and make these sections feel a bit more dynamic. 

We can do this by introducing some wavy borders.

So we go from having these straight edge sections to more organic transitions between sections.

### Before
![[Pasted image 20200928134317.png]]

### After
![Pasted image 20200928134327.png]]()

So today I'm going to show how you can create these **wavy borders** on your Squarespace site with CSS and an awesome design tool: **Figma**.
### What tools do you need?
#### [Figma][3] (free)
Figma is an incredile design tool that can be used in the browser or on desktop. If you've been using something like Photoshop or Illustrator I'd highly recommend looking at Figma as your design tool. 

Last year Figma introduced a plugin ecosystem which lets developers create new tools that can easily be added to Figma. Which is what we'll look at next. 

#### Figma Plugins

Figma now has a large plugin library. We're going to be using a free one called **Get Waves**.

[Get Waves][4] is a plugin from **zcreative labs**(link to the) that randomly generates **SVG waves**. There's a web based version but they also have a plugin for Figma which makes it really easy to use and keep all your work in your project, instead of downloading SVG files from the web app. 

### Why use this instead of creating an image with a wavy border already applied?
I've seen it suggested to just create a background image with a wave already applied to the image. But we get so many benefits using SVGs for this kind of design.
1. It will be responsive since we’re using SVGs (lighter file sizes)
2. We could animate the wave if we wanted to
3. We can create many variations quickly and we don't have to keep saving/exporting images
4. Since they're SVG they will take up very little room on our site
5. Once the SVG wave is added it can be reused anywhere on your site.

### How does this work?
We're going to create a wave shape that we can use as a clipping path/mask to create the wavy borders. 

Just like in Photoshop or Illustrator we can create “**masks**” or a **clipping-mask** with CSS and SVGs that will only show content that's inside the clip-path. 

> A clipping mask is a shape (called a clipping path) that masks any object below it, so only what’s inside of the clipping path is visible. A clipping path can only be a vector object, not a photo. However, the object below it can be anything – a raster photo, vector drawing, etc. - [99Designs][5]

You can see a demo below of how clip-paths work. We can take a shape like a circle as our clip-path and apply it to an image. Now the only part of the image that's visible is the part that's inside the circle. 

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fp9oqLcA0YLEhNWjvn23lKb%2FHugo%3Fnode-id%3D1165%253A28%26viewport%3D376%252C439%252C0.125%26scaling%3Dcontain&chrome=DOCUMENTATION" allowfullscreen></iframe>

Flywheel also has a great visual to show how this works.
![[Flywheel clip-path visual.png]] (source: Flywheel)

Now let's start creating waves in Figma.

### Step 1. Creating a Wave In Figma
 After you've opened up Figma, you can install [Get Waves for free][6].
 
 To start using the plugin you'll need to be working inside a file. You can create a new file by the "**+**" icon beside **Drafts** in the sidebar.
 
 ![[Create new draft in Figma.png]]

To access the plugin in your project you'll need to click the hamburger menu in the top left corner of Figma and click Get Waves inside the **Plugins folder.**

![[Figma Get Waves Plugin Location.png]]

**Quick tip:** if you're on a Mac you can press **⌘ + /**, and it will open the the Search Input and you can search "Get Waves"

![[Figma Get Waves Shortcut.png]]

A pop up will open for Get Waves

![[Figma Get Waves Plugin.png]]

You can start to adjust the settings and it will give you a live preview of your wave. And you can easily get a new random wave by clicking the **dice icon**.

You can also change the direction of your wave: **up** or **down**.

You'll want to create a wave for both directions. I'll explain why you need the waves for both directions later in the tutorial.

Once you click **create** you'll have an SVG wave added to your page. 

Since the wave is an SVG you can easily resize it without effecting the quality of the image. You can also adjust the height. 

I’d recommend setting the height of the wave between 60-120px and setting the width to 1920px. 

### Step 2. Copy/Paste the SVG from Figma to your site
Figma makes it really easy to get the SVG code that you need. To get it simply right-click your wave, then click *Copy/Paste -> Copy as SVG*

This will give you the code for the SVG to add to your site.

![[Figma Copy SVG.png]]

You don’t have to worry about the color of the wave here because it doesn’t actually appear on the page. The colored part of wave is the part where our clipped element will be visible.

The best part about this is that you only need to add this SVG once, but you can reference it multiple times throughout the site.

If you want to use it on multiple pages then I’d recommend adding it your Site Code Injection (*Settings -> Advanced -> Code Injection -> Footer*)

### Step 3: Adding a clip-path to your SVG
There’s a couple things we need to add to our SVG to get it working properly. 
By default, when we paste the SVG code from Figma we’ll have a SVG tag and a path (our wave) nested inside.

Your path code will be slightly different because the wave generated by the plugin will be random.

```html
<svg width="1920" height="120" viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.4915L80 14.9243C160 8.35708 320 -4.77738 480 1.78985C640 8.35708 800 34.626 960 54.3277C1120 74.0294 1280 87.1638 1440 80.5966C1600 74.0294 1760 47.7605 1840 34.626L1920 21.4915V120H1840C1760 120 1600 120 1440 120C1280 120 1120 120 960 120C800 120 640 120 480 120C320 120 160 120 80 120H0V21.4915Z" fill="#0099FF"/>
</svg>

```

We need to wrap our `path` in a `defs` and a `clipPath` tag
And we need to give our `clipPath` an ID. This is what is going to let us reference this wave in our CSS and let us use it as a clipping path to hide/mask elements.

You can use any name for the clipPath ID, just make sure it's unique and only used once. If you had 2 different wave SVGs their IDs would have to be different. 

`clipPath id="waveUp"`

`clipPath id="waveDown"`

This is what the code for the SVG should now look like:

```html
<svg viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<clipPath id="waveDown">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M0 51.3323L40 59.8877C80 68.4431 160 85.5539 240 82.7021C320 79.8503 400 57.0359 480 45.6287C560 34.2216 640 34.2216 720 37.0733C800 39.9251 880 45.6287 960 51.3323C1040 57.0359 1120 62.7395 1200 62.7395C1280 62.7395 1360 57.0359 1440 68.4431C1520 79.8503 1600 108.368 1680 116.924C1760 125.479 1840 114.072 1880 108.368L1920 102.665V0H1880C1840 0 1760 0 1680 0C1600 0 1520 0 1440 0C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0H0V51.3323Z" fill="black" />
		</clipPath>
	</defs>
</svg>
```

### Step 4: Making the SVG & ClipPath responsive
In order to make our SVG and clipPath responsive, we need to add a transform attribute with a scaling effect to the clipPath and set the `clipPathUnits=objectBoundingBox`.

The reason we have to do this has to do with the SVG viewBox and the path coordinates. That's a whole other topic that we won't dive into.

All you need to know is the formula you need to use for the `transform` attribute on the clipPath.

The formula is **1/viewBoxWidth, 1/viewBoxHeight**, in our case it would be 1/1920 and 1/120.

```html
<svg viewBox="0 0 1920 120">
	<clipPath transform="scale(0.000520833 0.008333333)"
</svg>
```

This will make sure SVG and clipPath fully responsive.

```html
<svg viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<clipPath id="waveDown" clipPathUnits="objectBoundingBox" transform="scale(0.000520833 0.008333333)>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M0 51.3323L40 59.8877C80 68.4431 160 85.5539 240 82.7021C320 79.8503 400 57.0359 480 45.6287C560 34.2216 640 34.2216 720 37.0733C800 39.9251 880 45.6287 960 51.3323C1040 57.0359 1120 62.7395 1200 62.7395C1280 62.7395 1360 57.0359 1440 68.4431C1520 79.8503 1600 108.368 1680 116.924C1760 125.479 1840 114.072 1880 108.368L1920 102.665V0H1880C1840 0 1760 0 1680 0C1600 0 1520 0 1440 0C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0H0V51.3323Z" fill="black" />
		</clipPath>
	</defs>
</svg>
```

Reference: [Eric Meyer][7]

Now we're actually ready to add the SVG to our site. In order to make this SVG available across the entire site you'll need to add the code to *Settings -\> Advanced -\> Code Injection -\> Footer *

### Step 5: Using the SVG on Psuedo Elements

Once the SVG code has been added to the Code Injection we can start to use it as a clip-path on our elements.

For the purpose of this demo we’re going to assume that you want to have full-width waves between sections on your site. Each section in Squarespace has a unique `data-section-id` so we're going to be targeting that. 

First add CSS to your sections to set their position to relative. This will allow us to position our wave for that section.
```css
[data-section-id] {
position: relative
}
```

Next we’re going to create a psudo element after our sections. Psuedo elements let us create additional elements around existing elements. We can use these psuedo elements for styling purposes. This is what's going to actually make the wavy border. 

![[CSS Tricks Psuedo Elements.png]] - CSS Tricks

To mask the pseudo element with our clip-path we can add a `clip-path` property and reference the ID from our SVGs clip-path. 

```css
[data-section-id]:after {
position: absolute;
content: '';
width: 100%;
height: 120px;
top: 0;
left: 0;
background: black;

/* Use the ID from your SVGs Clip Path*/
clip-path: url(#waveDown);
}
```

By default we’ve added a background of black to the wave to make it visible.

![[Squarespace Black Wave Sections.png]]

So we know the wave is there but obviously this design doesn't work.

Lets look at 2 design scenarios and how we can make our wave work. 

### Scenario 1: Color Section To Image Section (Easier)
The first scenario is pretty straight forward, we have a section with a background color followed by a section with a background image. We want a wavy border between these 2 sections. 

![[Squarespace Blocky Sections.png]]

To make this work we need to add a wave to the top of the second section and set it's background-color to match the color from the previous section.

Remember when I said you'd want to create 2 waves for each direction (up and down)? Here is where we want to use the wave that's pointing down. 

To apply the wave the second section you can either use the data-section-id or use an `nth-of-type` selector.

```css
/* This will target the second section on the page */
[data-section-id]:nth-of-type(2):after {
	/*Set the background to match the previous sections color*/
	background: red;
}
```

**Note**: if you want to ensure this code is only being applied to a specific page on your site, you can add this CSS to **Page Settings -\> Code Injection** and wrap it in `<style>` tags

```html
<style>
/* This will target the second section on the page */
[data-section-id]:nth-of-type(2):after {
	/*Set the background to match the previous sections color*/
	background: red;
}
</style>
```

Result

![[Squarespace Color Wave To Image Section.png]]

### Scenario 2: Wave Between 2 Image Sections

The second design scenario we have is when we have 2 sections with background-images.

In order to create a wavy border between these sections we need to add a wave to bottom of the first section that's **pointing up**, and then we need to add a wave to the top of second section that's **pointing down** and then we need their background color to match.

For this to work we'll need to have 2 SVG waves and we'll need slightly different CSS.

For the first image section, we need to position our SVG on the bottom instead of the top and we'll also need to use the SVG wave that's pointing up for our clip-path. 

```css
[data-section-id]:nth-of-type(2):after {
position: absolute;
content: '';
width: 100%;
height: 120px;
bottom: 0;
left: 0;
background: black;

/* Use the ID from your SVGs Clip Path*/
clip-path: url(#waveUp);
}
```

This takes care of positioning our wave on the bottom

![[Squarespace Section Wave On Bottom.png]]

Now we need to add a wave to top of the second section. We'll need to use the SVG wave that's pointing down.

```css
[data-section-id]:nth-of-type(3):after {
	position: absolute;
	content: '';
	width: 100%;
	height: 120px;
	top: 0;
	left: 0;
	background: red;

	/* Use the ID from your SVGs Clip Path*/
	clip-path: url(#waveDown);
}
```

You should now have a wave between your 2 sections with background images.

![[Pasted image 20200929115813.png]]

```css
[data-section-id]:nth-of-type(2):after {
	position: absolute;
	content: '';
	width: 100%;
	height: 120px;
	bottom: 0;
	left: 0;
	background: red;

	/* Use the ID from your SVGs Clip Path*/
	clip-path: url(#waveUp);
}

[data-section-id]:nth-of-type(3):after {
	position: absolute;
	content: '';
	width: 100%;
	height: 120px;
	top: 0;
	left: 0;
	background: red;

	/* Use the ID from your SVGs Clip Path*/
	clip-path: url(#waveDown);
}
```



We need to add a wave to the bottom of the first image section, and then we need to add a wave to the top of the following section.

If we only added the wave to one we'd still end up with a sharp edge

#### Bad

![[Squarespace Waves Between Image Sections.png]]

#### Good
![[Squarespace Wavy Sections.png]]

### Make Color Section "Drip" into the Next Section


[3]:	figma.com
[4]:	https://www.figma.com/community/plugin/745619465174154496/Get-Waves
[5]:	https://99designs.com/blog/design-tutorials/adobe-illustrator-tutorial-clipping-mask-and-compound-path/
[6]:	https://www.figma.com/community/plugin/745619465174154496/Get-Waves
[7]:	https://meyerweb.com/eric/thoughts/2017/02/24/scaling-svg-clipping-paths-for-css-use/