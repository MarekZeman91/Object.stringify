# Object.stringify
Object.stringify is enhanced version of JSON.stringify with extra support for functions inside stringified object.

### Usage:

Stringify complex object with function.
```js
function FN(a, b, c) {
    a += b; c += b;
    return a * c;
}
 
var obj = {
    string: 'string',
    number: 999,
    object: {
        array: ['abcd', 1234, true, undefined, null],
        boolean: false
    },
    boolean: true,
    function: FN
};
 
var result = Object.stringify(obj, 4);
 
/*
result = {
    "string": "string",
    "number": 999,
    "object": {
        "array": [
            "abcd",
            1234,
            true,
            null,
            null
        ],
        "boolean": false
    },
    "boolean": true,
    "function": "function FN(a, b, c) {\n    a += b; c += b;\n    return a * c;\n}"
}
*/
```
