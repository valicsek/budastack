---
title: Determine the Model of the Phone Using Javascript
description: This short page will demonstrate some examples how to determine the model of the phone using javascript
tag: javascript
layout: BlogLayout
---

# Determine the Model of the Phone Using Javascript

You have probably had the question that, how can I determine the product model of the phone when the user visit your website. 

It can be useful when you offer a service based on the type of the model what the user use. 

(Example: you want to sell phone cases and you want to save time for the visitor to find the proper size for his/her phone.)

To do this, you can use some javascript and screen data to guess or figure out the model of the phone.

## Get the model of the phone

How can you distinct the different models?
- By the width of the screen
- By the manufacturer

You can get these informations using javascript.

```javascript
// Get some data about the client
const manufacturer = clientInformation
// Get the width of the screen
const screenWidth = innerWidth
```

### UserAgent

You can use the `userAgent` property, but it will not give you precise output.
```
window.navigator.userAgent
```

The problem with this solution is that devices that people actually use the mobile web on today have great, capable browsers: WebKit, Opera, and Firefox Mobile. 

The `userAgent` will see only the browser type and not the model type of the phone.

### WURFL

WURFL.js is JavaScript that detects device models of smartphones, tablets, smart TVs and game consoles accessing your website.

```html
<script type="text/javascript" src="//wurfl.io/wurfl.js"></script>
```

It is not a `direct` solution. They probably use some Request checking to determine the type of the device which request this source.

If you check the following script, you will see that the result of the script will be the type of the product what you are using to request this url.

```javascript
var WURFL={"complete_device_name":"Google Chrome","form_factor":"Desktop","is_mobile":false};document.dispatchEvent(new Event("WurflJSDetectionComplete",{bubbles:true}));
```
You can test for an individual iPhone model by using the complete_device_name
```javascript
if (WURFL.complete_device_name === "Apple iPhone XR") {
    // targetAppleiPhoneXR();
}
```

### Platform.js

If you want to use plain javascript solution, then platform.js is good for you.

It uses predefined values like
```
...
{
    label: "Galaxy S7",
    pattern: "SM-G930"
}, {
    label: "Galaxy S7 Edge",
    pattern: "SM-G935"
},
"Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle"
...
```

To use it, include via `cdn` or `npm`.

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.5/platform.min.js"></script>
```

You will get a `platform` variable and you can get the following properties

```javascript
platform.name; // 'Safari'
platform.version; // '5.1'
platform.product; // 'iPad'
platform.manufacturer; // 'Apple'
platform.layout; // 'WebKit'
platform.os; // 'iOS 5.0'
platform.description; // 'Safari 5.1 on Apple iPad (iOS 5.0)'
```
