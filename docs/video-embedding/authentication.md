---
sidebar_position: 2
---

# Playback Authentication

Access token generated using Streams API which is required to authorize video playback. 

If the user has your video embed code he can embed your video onto any page on the internet if you don't have domain restrictions. even if you have, users can view the video by embedding your video on your home page or any other page that doesn't restrict users.

You can prevent the above scenario by generating an access token using API with time-to-live or set to expire after one usage on the back-end server and then sent to the website front-end and use generate access_token as part of the video embed code.


Access token CRUD operation APIs are documented [here](../server-api/access-token.md)