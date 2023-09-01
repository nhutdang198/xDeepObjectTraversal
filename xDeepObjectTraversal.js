"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xDeepArrayTraversal = void 0;
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
function xDeepArrayTraversal(deepArray, callback) {
    for (var _i = 0, deepArray_1 = deepArray; _i < deepArray_1.length; _i++) {
        var iterator = deepArray_1[_i];
        if (Array.isArray(iterator)) {
            xDeepArrayTraversal(iterator, callback);
        }
        else {
            if (typeof callback === 'function') {
                callback(iterator);
            }
        }
    }
}
exports.xDeepArrayTraversal = xDeepArrayTraversal;
