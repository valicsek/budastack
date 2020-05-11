---
title: How to Find the User Geolocation Using Javascript?
description: It can be useful to find out where the user located.
tags: [javascript, geolocation]
date: 2019-05-10
layout: BlogLayout
---

# How to Find the User Geolocation Using Javascript?

![](https://www.webdesignerdepot.com/cdn-origin/uploads/2019/06/featured_ipgeolocationapi.png)

Determination of the geolocation is a cool thing. You can use it a lot of times, for example, when you are creating a website where you want to offer pizza shops near to the user.

To determine the geolocation you have two possibilities:
- Find out via Geolocation API
- Find out via IP Address

The HTML Geolocation API is used to locate a user's position.

The HTML Geolocation API is used to get the geographical position of a user.

Since this can compromise privacy, the position is not available unless the user approves it.

Check if Geolocation is supported
If supported, run the getCurrentPosition() method. If not, display a message to the user

```javascript
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
        console.log(position.coords.latitude, position.coords.longitude)
    });
} else {
    // User deny the geolocation or the location request is not supported
}
```