---
title: Low Level CSS Framework
description: If you want to be the master of UI Design, you have to know the low level CSS Frameworks
tag: css
layout: BlogLayout
---

# Low Level CSS Framework

We all know Bootstrap and other CSS Frameworks. These frameworks helps us to create easily responsive websites and use consistent design.

They provide us pre-designed components like Buttons, Carousel, Panels.

This is a cool stuff! am I right?

But what happens if you want to customize it?

Well then you are probably making custom css classes or overwrite the already existing ones.

But if you have a lot of classes then, it makes the process hard and tedious.

If you are a frontend developer and love to design you probably come across the concept of Low Level CSS Framework.

## What is Low Level CSS Framework?

Let meg give you an example. If you want to build a house, then you use building blocks.

These building blocks can be pre-made (bootstrap or others) or default ones (the default browser design).

There are some cases when you need smaller, tighter or bigger building blocks (for example the part of the window).

A concrete example, when you have an element and you need special padding or margin settings.

Let's check the following example

```html
<div class="margin-top-5 margin-right-3 background-black"></div>
```

## Global reset



```scss
*,
*:after,
*:before {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box; 
    }
```



## Headings

### Example

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 4</h5>
<h6>Heading 4</h6>
```

### Implementation

```scss
@for $s from 1 to 7 {
  h#{$s} {
    font-size: 4em / $s;
  }
}
```

## Sizes

### Example

```css
<h1 class="text-xxl"></h1>
<h2 class="text-xl"></h1>
<h2 class="text-lg"></h1>
<p class="xs">Note that</p>
```

```scss
$sizes: "xs", "sm", "md", "lg", "xl", "xxl";

@for $i from 1 through length($sizes) {
  $size: nth($sizes, $i);
  .text-#{$size} {
    font-size: 0.75rem * $i;
  }
}
```

## Margins and paddings

### Example

```php+HTML
<div class="my-5 mx-2"> </div>
<div class="ml-5 pr-5"> </div>
<div class="p5 m10"> </div>
```

### Implementation

```scss
$multiplier: 0.5em;
@for $i from 1 to 21 {
  @each $j in ("margin", "padding") {
    @each $pos in ("top", "bottom", "left", "right") {
      .#{str_slice($j,1,1)}#{str_slice($pos, 1,1)}-#{$i} {
        #{$j}-#{$pos}: $i * $multiplier;
      }
    }
    .#{str_slice($j,1,1)}-#{$i} {
      #{$j}: $i * $multiplier;
    }
    .#{str_slice($j,1,1)}y-#{$i} {
      #{$j}-top: $i * $multiplier;
      #{$j}-bottom: $i * $multiplier;
    }
    .#{str_slice($j,1,1)}x-#{$i} {
      #{$j}-left: $i * $multiplier;
      #{$j}-right: $i * $multiplier;
    }
  }
}
```

## Flex System

### Example

```html
<div class="flex flex-center w-full">
	<p>Apple</p>
	<p>Egg</p>
  <p>Cheese</p>
</div>
```

### Implementation

```scss
.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: 1;
}
.flex-column {
  flex-direction: column;
}
.flex-row {
  flex-direction: row;
}

@each $var in (start, end, center, space-between, space-around) {
  .flex-#{$var} {
    justify-content: $var;
  }
}
```

## Align Items

### Horizontally

```html
<div class="flex w-full flex-space-between py-2">
	<p>Add</p>
	<p class="text-sm">Movie Master</p>
	<p>Search</p>
</div>
```

- `flex-center`
  - Align items to center horizontally
- `flex-space-between`
- `flex-start`
  - Align items to the start point
- `flex-end`
  - Align items to the end point

### Vertically

You can align the items vertically within a `flex` component.

```html
<div class="flex w-full flex-space-between align-center py-2">
	<p>Add</p>
	<p class="text-sm">Movie Master</p>
	<p>Search</p>
</div>
```

- `align-center`
  - Align items to center vertically
- `align-start`
- `align-end`

```scss
    @each $var in (start, end, center, space-between, space-around) {
      .#{$DISPLAY-IDENTIFIER}flex-#{$var} {
        justify-content: $var;
      }
      .#{$DISPLAY-IDENTIFIER}align-#{$var} {
        align-items: $var;
      }
    }
```



## Item selector (not implemented yet, it makes the file too big?)

### Example

```html
<!-- Instead of -->
<div class="">
  <a href="#" class="text-xl">Big Link</a>
  <a href="#" class="text-xl">Big Link</a>
  <a href="#" class="text-xl">Big Link</a>
  <a href="#" class="text-xl">Big Link</a>
</div>
<!-- Use this -->
<div class="a:text-xl">
	<a href="#">Big link</a>
  <a href="#">Big link</a>
</div>

<div class="h1:font-bold p:pt-5">
	<h1>Bold text</h1>
  <p>Lorem ipsum</p>
</div>
```

### Implementation

```scss
@each $element
  in ("a", "img", "div", "span", "p", "h1", "h2", "h3", "h4", "h5", "h6")
{
  @each $command in ("font-bold") {
    .#{$element}\:#{$command} {
      & {
        #{$element} {
          #{$command}: red;
        }
      }
    }
  }
}
```

## Typography

### Example

```html
<p class="font-bold">This is a text</p>
<h1 class="font-bolder">This is another text</h1>
```

### Implementation

```scss
* {
  font-family: "San Francisco";
}

html,
body {
  color: black;
}

@each $set in (200, 400, 600, bold, bolder) {
  .font-#{$set} {
    font-weight: $set;
  }
}
```

## Size helpers

### Example

```html
<div class="w-full"></div>
<div class="w-half"></div>
<div class="w-quarter"></div>
```

### Implementation

```scss
$sizes: "full", "half", "quarter";
@for $i from 1 through length($sizes) {
  $size: nth($sizes, $i);
  .w-#{$size} {
    font-size: 100% / $i;
  }
}
```

## Mobile, Tablet, Desktop screen statement modifiers

### Example

```html
<!-- the div should have full width on, on small device just half -->
<div class="w-full ms:w-half"></div>
```

### Implementation

```scss
$display-size-px: 0, 576, 768, 992;
$display-size: "", sm\: , md\: , lg\: ;

@for $x from 1 through length($display-size) {
  $DISPLAY-IDENTIFIER: nth($display-size, $x);
  // We also need a global setting

  @media (min-width: nth($display-size-px, $x) * 1px) {
    // Size Helpers
    $sizes: "full", "half", "quarter";
    @for $i from 1 through length($sizes) {
      $size: nth($sizes, $i);
      .#{$DISPLAY-IDENTIFIER}w-#{$size} {
        width: 100% / $i;
      }
    }

    @for $i from 1 to 13 {
      .#{$DISPLAY-IDENTIFIER}w-#{$i} {
        width: 8.33% * $i;
      }
    }

    // Text sizes
    $sizes: "xs", "sm", "md", "lg", "xl", "xxl";

    @for $i from 1 through length($sizes) {
      $size: nth($sizes, $i);
      .#{$DISPLAY-IDENTIFIER}text-#{$size} {
        font-size: 0.75rem * $i;
      }
    }
    ...
```

## More friendly names

Because of a lot of people already used Bootstrap, probably it makes you confused if you never used `flex` properties before. Because of this, you can use `columns` and `col` classes as well.

```scss
  <div class="columns">
    <div class="col sm:w-quarter md:w-full">a</div>
    <div class="col sm:w-quarter md:w-half">b</div>
    <div class="col sm:w-quarter md:w-half">c</div>
  </div>
```

```scss
.columns {
  @extend .flex;
  @extend .w-full;
  @extend .flex-wrap;
}

.col {
  @extend .flex;
  flex-grow: 1;
}
```

## Colors, Borders

### Example

```css
<button class="text-white bg-red px-4 py-2 border-r-xs">Something else</button>
```

### Implementation

```scss
// Borders
$sizes: "xs", "sm", "md", "lg", "xl", "xxl";
@for $i from 1 through length($sizes) {
  $size: nth($sizes, $i);
  .border-r-#{$size} {
    border-radius: $i * 5px;
  }
}

// Colors
@each $var in (white, black, grey, red, blue, yellow, green) {
  .text-#{$var} {
    color: $var;
  }
  .bg-#{$var} {
    background: $var;
  }
}
```



## Examples

### Movie website

```vue
<template>
<section class="bg-black">
    <div class="columns sm:px-2 px-10">
      <div class="flex w-full flex-space-between align-center py-2">
        <p>Add</p>
        <p class="text-sm color-red font-bold">Movie Master</p>
        <p>Search</p>
      </div>
      <div class="w-full">
        <h2 class="text-sm">Series</h2>
        <ul class="flex flex-row pt-1">
          <a class="mr-2" href="#">Horror</a>
          <a class="mr-2" href="#">Action</a>
          <a class="mr-2" href="#">Thriller</a>
          <a class="mr-2" href="#">Cartoon</a>
          <a class="mr-2" href="#">Animation</a>
          <a class="mr-2" href="#">Extasy</a>
        </ul>
        <div class="flex w-full overflow-x-scroll">
          <div class="pr-1 py-3" v-for="i of [1,2,3,4,5,6,7]" v-bind:key="i">
            <img src="https://source.unsplash.com/800x600/?movie" alt />
            <p class="text-xs color-grey">Movie name</p>
            <p class="text-xs color-grey">Movie description</p>
          </div>
        </div>
      </div>
      <div class="w-full">
        <h2 class="text-sm">Movies</h2>
        <ul class="flex flex-row pt-1">
          <a class="mr-2" href="#">Horror</a>
          <a class="mr-2" href="#">Action</a>
          <a class="mr-2" href="#">Thriller</a>
          <a class="mr-2" href="#">Cartoon</a>
          <a class="mr-2" href="#">Animation</a>
          <a class="mr-2" href="#">Extasy</a>
        </ul>
        <div class="flex w-full overflow-x-scroll">
          <div class="pr-1 py-3" v-for="i of [1,2,3,4,5,6,7]" v-bind:key="i">
            <img src="https://source.unsplash.com/800x600/?movie" alt />
            <p class="text-xs color-grey">Movie name</p>
            <p class="text-xs color-grey">Movie description</p>
          </div>
        </div>
      </div>
      <div class="w-full">
        <h2 class="text-sm">Already seen</h2>
        <div class="flex w-full overflow-x-scroll">
          <div class="pr-1 py-3" v-for="i of [1,2,3,4,5,6,7]" v-bind:key="i">
            <img src="https://source.unsplash.com/800x600/?movie" alt />
            <p class="text-xs color-grey">Movie name</p>
            <p class="text-xs color-grey">Movie description</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.color-red {
  color: red;
}
.color-grey {
  color: #fefefe;
}
.bg-black {
  background: black;
  color: white;
}

img {
  width: 150px;
  height: 120px;
}

a {
  text-decoration: none;
  color: white;
}

*::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
}
</style>
```

### Basic Trello

```vue
<template>
  <section class="bg-custom-blue scrollable-x px-1">
    <div class="flex flex-row w-full py-2">
      <a class="mr-2 text-white font-bold" href>Projects</a>
      <a class="mr-2 text-white" href>Something else</a>
      <a class="mr-2 text-white" href>Invite</a>
    </div>
    <div class="flex flex-row">
      <div class="table mr-1 p-1" v-for="i of [1,2,3,4]" v-bind:key="i">
        <div class="flex w-full flex-space-between align-center">
          <p class="text-xs font-bold">Table {{i}}</p>
          <a>...</a>
        </div>
        <div class="flex w-full flex-column mt-1">
          <span v-for="j of [1,2,3,4,5,6]" v-bind:key="j" class="card p-1 mb-1">
            <p class="text-xs">Text goes here</p>
          </span>
          <a class="text-xs">Add a new card</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.bg-custom-blue {
  background: #0078bf;
}

.table {
  background-color: #ebecf0;
  border-radius: 3px;
  width: 270px;
}

.card {
  background: white;
  border-radius: 3px;
}
</style>
```

