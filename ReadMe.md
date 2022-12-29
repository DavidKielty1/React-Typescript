**Content**\

1. What and Why?
2. Typescript basics.
3. Combining React & Typescript

**What And Why?**\
Superset to JS. Extends JS.\
Typescript adds static typing to JS.\
Install typescript on to machine, check typescriptlang google.z
Compiles certain .ts files into .js files.

**_Types_**\
Array: let people: string[]; People will have type an array of strings.
Array of objects: let people: {name: string, age: number}[]; People will be an array of objects.

_Inference_\
Typescript will automatically attempt to infer and cast types after variable declaration--\
let course = 'React - The Complete Guide' -> type will be cast as string.

_Union Types_\
If you have more than one type you want to be allowed, an object can take two forms etc.
use pipe symbol let course: string | number = ...
