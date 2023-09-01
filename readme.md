**xDeepObjectTraversal** is a recursive function that traverses a nested object and calls a callback function for each key-value pair it encounters. It is a depth-first traversal, meaning it explores as deeply into the nested objects as possible before moving on to the next sibling key at the current level.

## Installation

To use xDeepObjectTraversal, you'll need to include the provided TypeScript file in your project.

1. Download the `xDeepObjectTraversal.ts` file from this repository.
2. Add the file to your project directory.

## Usage

1. Import the `xDeepObjectTraversal` class into your TypeScript code:

   ```typescript
   import { xDeepObjectTraversal } from 'x-deep-object-traversal'
   const nestedObject = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4,
        },
      },
    };
   function logKeyAndValue(key, value) {
     console.log(`Key: ${key}, Value: ${value}`);
   }

   xDeepObjectTraversal(deepArray, logKeyAndValue);
   // Key: a, Value: 1
   // Key: b, Value: { c: 2, d: { e: 3, f: 4 } }
   // Key: c, Value: 2
   // Key: d, Value: { e: 3, f: 4 }
   // Key: e, Value: 3
   // Key: f, Value: 4


2. Import the `xDeepObjectTraversal` class into your Javascript code:

   ```javascript
   const { xDeepObjectTraversal } = require("x-deep-object-traversal")
    const nestedObject = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4,
        },
      },
    };
   function logKeyAndValue(key, value) {
     console.log(`Key: ${key}, Value: ${value}`);
   }

   xDeepObjectTraversal(deepArray, logKeyAndValue);
   // Key: a, Value: 1
   // Key: b, Value: { c: 2, d: { e: 3, f: 4 } }
   // Key: c, Value: 2
   // Key: d, Value: { e: 3, f: 4 }
   // Key: e, Value: 3
   // Key: f, Value: 4

## Support Me

If you find this project helpful or want to show your appreciation, you can support me by [buying me a coffee](https://www.buymeacoffee.com/nhutdm). Your support is greatly appreciated!
