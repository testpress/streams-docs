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
<body>

<div style={{ paddingTop: '56.25%', position: 'relative'}}><iframe src="https://app.tpstreams.com/embed/dcek2m/ByPzR7s6fzG/?access_token=550b0334-eede-4c23-b50f-b20ae9924cc7" style={{ border: 0, maxWidth: '100%', position: 'absolute', top:0, left:0, height:'100%', width:'100%' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture" allowfullscreen="" frameborder="0"></iframe></div>


</body>
</html>
```