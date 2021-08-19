# React Review and Props Notes

## Steps to Set Up a New React App
- npx create-react-app `the-name-of-your-app`
- cd `the-name-of-your-app`
- npm start


## Steps to Create a Functional Component
- Declare a function
- The name of the function must be in PascalCase
- The function should return JSX
- Export our function (`export default MyComponent`)

## index.html
The first file that gets loaded into the browser. Once the file loads, it runs the JavaScript to load the App onto the page.

## index.js
Gets our App Component and inserts it into the element with the id of root in our HTML.

## App.js
App Component
The App component is the top parent-level component.<br>
All other components will go inside of there.

## Passing Props to a Component
1. Set up component to receive props. Add `props` as a parameter to the function component.
- for example `function Person(props) {}`

2. Pass in props when you render the component
- for example `<Person personName="Herbert" />`

3. Pass props into our JSX for that component.
- for example `<h2>Name: {props.personName}</h2>`
