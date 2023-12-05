# Frontend Mentor - Calculator App Solution

This is a solution to the [Calculator App Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- ES6 JavaScript

### What I learned

Throughout the project, I was able to learn about how to make a functional, CSS only theme switcher making full use of the power of custom properties. I was also able to advance my knowledge about the use of data attributes by using them to control most of the JavaScript - see below: 

```js
if (action == "calculate") {
  calculate(
    calculator.dataset.prev,
    calculator.dataset.operator,
    screen.innerHTML
  );
}
```

Alongside this, I got to experiment with more complex combinations of CSS selectors to control exactly what I wanted on the page:

```css
:root:has(.calculator__theme:first-of-type:checked) {
  --clr-main-bg: hsl(222, 26%, 31%);
  --clr-keypad-bg: hsl(223, 31%, 20%);
  --clr-screen-bg: hsl(224, 36%, 15%);
  --clr-key-text: hsl(221, 14%, 31%);
  --clr-action-key-shadow: hsl(224, 28%, 35%);
  --clr-action-key-bg: hsl(225, 21%, 49%);
  --clr-key-shadow: hsl(28, 16%, 65%);
  --clr-key-bg: hsl(30, 25%, 89%);
  --clr-calc-key-bg: hsl(6, 63%, 50%);
  --clr-calc-key-shadow: hsl(6, 70%, 34%);
}
```


## Author

- Frontend Mentor - [@dalton-f](https://www.frontendmentor.io/profile/dalton-f)
