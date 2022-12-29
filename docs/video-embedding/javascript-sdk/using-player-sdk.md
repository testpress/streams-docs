---
sidebar_position: 2
---

# Using Player SDK

The iframe embed lets you embed your Streams videos and control the player using Javascript. You have access to the essential methods and properties of the players. There are events that you can listen for and execute custom actions in your web application.



###  Adding the script

Add the following script to the html of your web page. This loads the interface that are used to establish communication with the video player. If this script is loaded on-demand later, make sure to wait for the load to complete before calling subsequent methods on the object.

```js
<script src="https://static.testpress.in/static/js/player.js"></script>
```

### Get a reference to the iframe

Note: Assuming the API script (above) is already loaded, 

To begin communicating with the player, get a reference to the iframe element. This can be using DOM APIs such as querySelector().

```js
const iframe = document.querySelector("iframe");
```

### Establish communication with the iframe

```html
<html>
<head>
  <title>page_title</title>
</head>
<body>
  <iframe width='560' height='315' src='https://lms.testpress.in/embed/cnwKtQwNmbG' title='DDE video 12' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
  <script src="https://static.testpress.in/static/js/player.js"></script>
  <script>
    var iframe = document.querySelector('iframe');
    var player = new Testpress.Player(iframe);
   
    player.loaded().then(()=>{
      console.log('Player is ready now')
    }); 
    

    player.on('play', function() {
      console.log('Played the video')
    });

        
   player.setCurrentTime(30).then(()=>{
      console.log('Current watch time updated')
    });
  </script>

</body>
</html>


```

### What's next

It's time to start controlling some videos. We've compiled a comprehensive reference of [methods](./player-methods) and [events](./player-events) to make your dreams of absolute power a reality.

If we've confused you going forward, contact us. We tend to get it right the second time.