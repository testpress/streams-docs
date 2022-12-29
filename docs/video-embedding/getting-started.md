---
sidebar_position: 1
---

# Getting started

For any video that you host with Streams, if you want you use it somewhere else, you have to embed it. This means that when you have generated the embed code for your video, you will be able to add the video to your website, blog, articles, or other website you’re looking forward to.

In order to allow embedding for a certain video, you will first need to follow the below steps which will guide you through the whole Video Embedding process


## Generate an embed code

Construct iframe source URL:

```bash
https://app.tpstreams.com/embed/{{asset_id}}/?access_token={{access_token}}/
```

** Sample format **

```html 
<div style="padding-top:56.25%;position:relative;"><iframe src="https://app.tpstreams.com/embed/{{asset_id}}/?access_token={{access_token}}/" style="border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture" allowfullscreen="" frameborder="0"></iframe></div>
```

## Embed on your site

Now you use constructed iframe code in your code to embed the video. 

** Example **
```html live showLineNumbers
<html>
<body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh', }}>

<div>

<h2 style={{ textAlign: 'center' }}>Your site</h2>

{/* Replace this with generate embed code */}
<iframe width='560' height='315' src='https://app.tpstreams.com/embed/d2ff26b2-f88e-4d6d-a9ce-bb0e3ce858cc/?access_token=e91e2bf4-a3ab-493f-8685-7b88ea943c5a' title='Physical World, Units and Measurements' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
</div>

</body>
</html>
```