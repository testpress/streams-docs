---
sidebar_position: 8
---

# Chat SDK
This SDK enables you to integrate live chat to your website

## Adding dependency

- Open the HTML file for the page where you want the live chat to appear.
- Inside the `<head>` section, add a new line with this code:

```html
  <link rel="stylesheet" href="https://static.tpstreams.com/static/css/live_chat_v1.css">
  <script src="https://static.tpstreams.com/static/js/live_chat_v1.umd.cjs"></script>
```
## Create a Container Element

Within the `<body>` section of your HTML, add a `<div>` element with a unique ID (e.g., id="app"). This element will serve as the container for the live chat widget. The chat widget will be displayed within this `<div>` element on your webpage.

```html
<div id="app"></div>
```

## Initializing Chat SDK
 After the script tag including the JavaScript file, add another `<script>` element to initialize the Live Chat widget using JavaScript:

```html
<script>
    const config = {
        username : "User Name" // Replace with user name
        roomId: "YOUR_ROOM_ID", // Replace with your actual room ID
        title: "Your Chat Title" // Replace with your desired title
    }
    new TPStreamsChat.load(document.querySelector("#app"), config)//replace id with container element id
</script>
```

**Fields**

| Field    | Description                                     |
|----------|-------------------------------------------------|
| username | The username of the user interacting with chat  |
| roomId   | The ID of the chat room                         |
| title    | The title displayed for the chat interface      |


:::important
**Note:** You can obtain the `roomId` after creating a live stream. It will be available on the live stream detail page or through [Asset Detail API](../server-api/assets#get-individual-asset-details).

:::

### Sample HTML Code

Below is a sample HTML code demonstrating how to integrate the live chat widget into your webpage:

```html
<!DOCTYPE html>
<html lang="en" style="height: 100%">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://static.tpstreams.com/static/css/live_chat_v1.css">
      <script src="https://static.tpstreams.com/static/js/live_chat_v1.umd.cjs"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      const config = {
        username : "Test User",
        roomId: "12adc5d5-46c5-416b-a11a-d4b513ac421f",
        title: "Test"
      }
      new TPStreamsChat.load(document.querySelector("#app"), config)
    </script>
  </body>
</html>
```