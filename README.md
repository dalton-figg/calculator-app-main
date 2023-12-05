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

## Author

- Frontend Mentor - [@dalton-f](https://www.frontendmentor.io/profile/dalton-f)
