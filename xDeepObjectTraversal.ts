/**
 * Recursively traverses a nested object and calls a callback function for each key-value pair.
 *
 * @param {Record<string, any>} deepObject - The object to be traversed.
 * @param {(key: string, value: any) => void} callback - The callback function to be called for each key-value pair.
 * @returns {void}
 *
 * @example
 * // Define a callback function to log key-value pairs
 * function logKeyAndValue(key, value) {
 *   console.log(`Key: ${key}, Value: ${value}`);
 * }
 *
 * // Create a sample nested object
 * const nestedObject = {
 *   a: 1,
 *   b: {
 *     c: 2,
 *     d: {
 *       e: 3,
 *       f: 4,
 *     },
 *   },
 * };
 *
 * // Traverse the nested object and log key-value pairs
 * xDeepObjectTraversal(nestedObject, logKeyAndValue);
 */
export function xDeepObjectTraversal(deepObject: Record<string, any>, callback: (key: string, value: any) => void) {
  for (const key in deepObject) {
    if (deepObject.hasOwnProperty(key)) {
      const value = deepObject[key];

      // Call the callback function with the current key and value
      callback(key, value);

      // If the current value is an object, recursively traverse it
      if (typeof value === 'object' && value !== null) {
        xDeepObjectTraversal(value, callback);
      }
    }
  }
}
