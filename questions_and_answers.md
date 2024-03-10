<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A 

<i>The corrected code will output an empty object ({}) to the console. Let me explain the code step by step:

1.let greeting;: This declares a variable named greeting but does not assign any value to it. At this point, greeting is undefined.

2.greeting = {};: This line assigns an empty object ({}) to the greeting variable. Now, greeting is an object with no properties.

3.console.log(greeting);: This line logs the value of greeting to the console. Since greeting now holds an empty object, {} will be printed to the console.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here's what happens during the function invocation:

sum(1, "2");: The function is called with the arguments 1 and "2". JavaScript is a loosely-typed language, so it will attempt to perform type coercion if the operands of the + operator are of different types.

The + operator is used for addition, but if one or both of the operands are strings, it will concatenate them instead of performing numeric addition.



Therefore, the result of the function call sum(1, "2"); will be the string "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Let's break down the code:

const food = ["🍕", "🍫", "🥑", "🍔"];: Declares a constant array food containing four emoji elements.

const info = { favoriteFood: food[0] };: Declares a constant object info with a property favoriteFood initialized to the first element of the food array ("🍕").

info.favoriteFood = "🍝";: Updates the value of info.favoriteFood to "🍝". Note that even though info is declared with const, the properties of the object can still be modified.

console.log(food);: Logs the food array to the console.
Here modification to info.favoriteFood does not affect the original food array. The array remains unchanged, and the elements in it are still "🍕", "🍫", "🥑", and "🍔"</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The sayHi function takes a parameter name and returns a string greeting that includes the provided name. However, when you call sayHi() without passing an argument, the name parameter will be undefined.

In JavaScript, if you concatenate a string with undefined, it converts undefined to the string "undefined". Therefore, the function call sayHi() will result in the string "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>here for every truthy element of num arry count will increment by 1.but the thing is 0 is one element which is falsy ,so the count will increse for rest of three number except 0.
so the oout put will be 3 </i>

</p>
</details>