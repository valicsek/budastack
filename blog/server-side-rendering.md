---
title: Server Side Rendering
description: The server side rendering gives you a basic understanding of how these things are work
tags: [server, rendering]
date: 2019-05-10
layout: BlogLayout
---

# Server side rendering

Probably, you want to understand, what server side rendering is.

You asking yourself, what is the real benefit?

It's not that complicated (or maybe yes)

![server side rendering](https://miro.medium.com/max/1784/1*-VqbtPgXzNOtXGvcnxm7IA.png)
Server-side rendering is the process of **taking** a client-side JavaScript framework website and **rendering** to static HTML and CSS on the server.

Cool, but why is this important?

First thing, **speed**, yes it's crucial, fast-loading website is important as hell.

A server-side rendering is a tool to **help you** get your website rendered faster.


So lets take a moment to talk about the critical path in your website's first render.

## Process of render a website

So the critical path is a reference to the process of delivering the most important pieces of content to the browser so it can render your page.

If we can deliver the most important assets **quickly**, then the browser can do its job and render the **page quickly** to the user.

The delivery of your website is well-handled by Firebase Hosting.

Firebase Hosting is HTTP 2-enabled, and it's also backed by a CDN for fast delivery around the world.

However, how fast the browser renders your app depends on how you build it.

![](https://3.bp.blogspot.com/-7pXla4gYcSU/XB-aQElY_zI/AAAAAAAAHTA/soP-84BDatwdPyeo3jrwtQxQAvzbQIbUgCLcBGAs/s1600/js_css_html.png)

The first thing the browser receives is an HTML document. This document contains references to other assets, like images, CSS, and JavaScript.

The browser knows to go fetch and download these assets when it parses this document. So even though the browser has your HTML, it can't render the website until its corresponding CSS has finished parsing.

But once that done, the browser goes ahead and renders the page.

That means that with just HTML and CSS, the browser can render the page.
And the browser's really, really good at this.

So it actually does it very fast.

Now, the last part of this process is JavaScript. After the HTML document is parsed, the browser will go and download your JavaScript files.

The download time of a JavaScript file can be **significant** if the file is large and the network is poor and the browser needs to parse the JavaScript.

Onn devices with **low-powered hardware**, this can take quite a bit of effort and time.

If you want a fast, first render of your website, you will need your site to have a meaningful HTML and CSS for the user.

JavaScript should be considered as an enhancement of that HTML and CSS since its loading can be deferred.

However, it's not always that simple. Some types of websites need complex features that rely heavily on JavaScript.

These kind of websites use JavaScript frameworks, like Angular, React, Preact, Vue.js.

But there's an inherent problem when it comes to these frameworks.

They tie up your rendering code in JavaScript, and on poor networks, this can be a **disaster** for your first render.

It's not all doom and gloom, though.

We can put this work in with server-side rendering. Because with server-side rendering, we can generate the HTML on the server and send that down to the browser.

So the user will see the HTML version of your app almost immediately as the JavaScript app boots up in the background.

And so while this may not make your page load faster than a non-server-side rendered version, it does give the user something to see as the JavaScript  downloads in the background.

So while this is a really nice benefit, there is a **cost** to server-side rendering.

## The costs

First of all, server-side rendering isn't **free**. There's time and effort that's needed on the server to generate these documents.

So if it takes you a while to view this generation,then you're not going to have a fast page load.

However, Firebase Hosting is really well-suited for this.

We can dynamically generate our content with Cloud Functions, and then Firebase Hosting will let you store that in the CDN cache.

So that means when the next user visits the website, it won't do the generation again. It'll just serve it from the local CDN edge.

And this has a great benefit when it comes to performance and it takes a lot of effort off of the server.

Secondly, after the browser has finished processing your HTML and CSS, it will still need to parse and execute your JavaScript, and this can be really heavy on the browser's main thread.

And so while the user will be able to see your application, it will be in this frozen state where they actually can't interact with it.

And so it's only after this JavaScript has finished parsing and executing
that the application will be interactive to the user.

And this can be tracked through a metric known as time to interactive.

And time to interactive is when a user requests your website to when they can actually use it. And we'll actually be covering in this series how we can track and improve time to interactive using server-side rendering.