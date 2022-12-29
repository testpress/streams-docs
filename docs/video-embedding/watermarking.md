---
sidebar_position: 2
---

# Watermark Videos

Videos hosted through Streams cannot be downloaded. There does however remain the risk of piracy from screen capture. Add text to videos with our dynamic watermark feature that effectively prevents users from pirating video content using screen capture, and goes a long way towards helping users protect their premium content.

The dynamic watermark can be customized for movement, color, size and transparency. 


## Create Watermark Code

Here is a sample JSON string that adds a moving (dynamic) watermark and a static watermark.

```js
{
   "annotations":[
      {
         "type":"static",
         "text":"Testpress",
         "x":10,
         "y":10,
         "opacity":"0.5",
         "color":"#FFF",
         "size":6
      },
      {
         "type":"dynamic",
         "text":"hari",
         "opacity":"0.5",
         "color":"#FF0000",
         "size":6,
         "interval":5000,
         "skip":2000
      }
   ]
}
```

Technically, this is an array of JSON objects, where each object describe a single annotation item.

Each of these items will be described by its parameters. Every item requires a **type** parameter which defines the type of watermark by default its value was static. The type of watermark can be either a moving text or a static text. The rest of the parameters depends on the type.

Following is a short description of how each parameter affects the display of text.

### Static text
The following code will display a static watermark code, placed at 10px distance from the left border of the video and 50px from top border, displaying text **Testpress** . The text color will be white (#fff), opacity is 0.5, and font-size is 6. 

```js
[{
	"type": "static",
	"text": "Testpress",
	"x": 10",
	"y": 10,
	"opacity": "0.5",
	"color": "#FFF",
	"size": "6"
}]
```


### Moving text

The following code will display a dynamic watermark code, displaying text **hari**. The text color will be red (#ff0000), opacity is 0.8, and font-size is 6. The watermark is configured to update position every 5 seconds (5000ms).

```js
[{
	'type': 'dynamic',
	'text': 'hari',
	'opacity': '0.8',
	'color': '#FF0000',
	'size': '6',
	'interval': 5000,
	'skip': 2000,
}]
```

**Type of text**

Set type parameter as dynamic for Dynamic watermark and static for Static watermark

```
'type':'dynamic',
```


**Set the text to be shown**

```
'text" : 'testpress',
```


**Specify text opacity**

This is the opacity of the text. For full opacity keep value 1.

```
'opacity':'0.8',
```


**Specify text color**

This is the hex value of the watermark text color. 

```
'color':'#FF0000',
```


**Specify the font size**

This is the font size

```
'size':6,
```


**Specify the interval over which watermark changes position**

The value is the interval in milliseconds when the text changes position

```
'interval':5000,
```


**Skip feature for watermark**

It is possible to have watermark skip for some time between two overlays. Here is a sample code for it –

```
'skip':2000
```


## Apply Watermark

Now you just need pass the watermark code that you've created to the player to apply on the video. There are two ways to do that

- Pass the code as part of the [Access token Request](./authentication#add-watermark).
- Pass the code via Player SDK method called [applyWatermark](./javascript-sdk/player-methods#apply-watermark-to-the-video).
