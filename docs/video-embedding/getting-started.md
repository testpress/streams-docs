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

## Live viewer count

For a live stream, the Streams dashboard shows how many people are watching while it is on air.

By default the player identifies a viewer with a cookie it sets on the embed page, so the count measures devices rather than people.

| Situation | Counted as |
| ----------- | ----------- |
| Two tabs in the same browser | 1 |
| Two different browsers on one device | 2 |
| The same person on a phone and a laptop | 2 |

Counting devices means nobody can inflate the number by opening more tabs, but it reads higher than your real audience when people watch on more than one device.

To count people instead, add the `viewer_id` parameter to the embed URL.

```bash
https://app.tpstreams.com/embed/{{asset_id}}/?access_token={{access_token}}&viewer_id={{your_user_id}}
```

**Fields**

| Name             | Type         | Description |    Required  |
| -----------      | -----------  | ----------- |   ---------- |
| viewer_id        | string       | The identifier your own system uses for the signed-in user. The same person is then counted once across every device they watch on |      No     |

:::important

- Use the identifier your own system already has for that user, so it stays the same across sessions and devices. A value that changes per session counts one person many times.
- Use an opaque ID rather than an email address or a name. The value travels in the embed URL, and URLs end up in browser history, referrer headers and server logs.
- The value is hashed and scoped to your organization before it is used for counting, so Streams does not hold the raw ID and the same ID in two organizations is never confused.

:::

This parameter affects only the live viewer count. It has no effect on recorded videos, playback or authorization.