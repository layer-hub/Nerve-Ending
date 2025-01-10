# Nerve Ending

`Nerve Ending` is a lightweight JavaScript micro-library that provides a set of functions for creating and manipulating DOM elements declaratively. It is particularly suitable for building cross-framework UI components and feature enhancement libraries outside the business development of modern web frameworks (such as React, Vue, Svelte, and Alpine), which can significantly improve code readability and maintainability.

## Features

- 🔗 Chainable API for intuitive DOM creation
- 🎯 Type-safe element construction
- 🧹 Automatic cleanup of event listeners
- 🪶 Lightweight with zero dependencies
- 🎨 Natural, declarative syntax
- 🔄 Easy element composition

## Installation

```bash
npm install nerve-ending
```

## Why Nerve Ending?

Traditional DOM manipulation can be verbose and hard to read. Nerve Ending transforms this:

```javascript
const main = document.createElement('main');
main.className = 'container';
const heading = document.createElement('h1');
heading.className = 'title';
heading.onclick = () => console.log('clicked');
heading.textContent = 'My first app';
main.appendChild(heading);
```

Into this:

```javascript
const { element } = main({ class: 'container' })(
  h1({ class: 'title', onclick: () => console.log('clicked') })(
    'My first app'
  )
);
```

## Core Concepts

Nerve Ending introduces a fluent interface for DOM manipulation that follows a natural mental model:
1. Select the element type
2. Define its properties
3. Add its children
4. Get back a manageable element reference

## Usage

```javascript
import { main, h1, button, span } from 'Nerve Ending';

// Create a simple component
const { element, cleanup } = main({ class: "app" })(
  h1({ class: "title" })(
    span("Welcome to "),
    span({ class: "highlight" })("Nerve Ending")
  ),
  button({ 
    onclick: () => alert('Hello!'),
    class: "greeting-btn"
  })("Say Hello")
);

// Add to DOM
document.body.appendChild(element);

// Cleanup when done
// cleanup();
```

```javascript
const Button = (props)=>
  button({ 
    onclick: () => alert('Hello!'),
    class: props.class
  })(children as string)
)
```

## Key Benefits

1. **Declarative Syntax**: Write DOM structures that mirror their visual hierarchy
2. **Memory Safety**: Automatic cleanup of event listeners prevents memory leaks
3. **Type Safety**: When used with TypeScript, provides full type inference
4. **Composability**: Easily combine and nest elements
5. **Developer Experience**: Intuitive API reduces cognitive load

## License

MIT © Layerhub