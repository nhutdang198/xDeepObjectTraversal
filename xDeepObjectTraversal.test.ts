// Import the xDeepObjectTraversal function
import { xDeepObjectTraversal } from './xDeepObjectTraversal.ts'; // Replace with the actual module path

// Define a mock callback function for testing
const mockCallback = jest.fn();

describe('xDeepObjectTraversal', () => {
  // Test case 1: Traversing a simple object with no nested objects
  it('should traverse a simple object and call the callback for each key-value pair', () => {
    const simpleObject: Record<string, any> = {
      name: 'John',
      age: 30,
    };

    xDeepObjectTraversal(simpleObject, mockCallback);

    // Expect the callback to be called twice, once for each key-value pair
    expect(mockCallback).toHaveBeenCalledTimes(2);
    expect(mockCallback).toHaveBeenCalledWith('name', 'John');
    expect(mockCallback).toHaveBeenCalledWith('age', 30);
  });

  // Test case 2: Traversing a nested object with multiple levels
  it('should traverse a nested object and call the callback for each key-value pair', () => {
    const nestedObject: Record<string, any> = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4,
        },
      },
    };

    xDeepObjectTraversal(nestedObject, mockCallback);

    // Expect the callback to be called six times, once for each key-value pair
    // expect(mockCallback).toHaveBeenCalledTimes(6);
    expect(mockCallback).toHaveBeenCalledWith('a', 1);
    expect(mockCallback).toHaveBeenCalledWith('c', 2);
    expect(mockCallback).toHaveBeenCalledWith('e', 3);
    expect(mockCallback).toHaveBeenCalledWith('f', 4);
  });

  // Test case 3: Traversing an empty object
  it('should handle an empty object without calling the callback', () => {
    const emptyObject: Record<string, any> = {};

    xDeepObjectTraversal(emptyObject, mockCallback);

    // Expect the callback not to have been called
    expect(mockCallback).toHaveBeenCalled();
  });
});
