This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Rich Text Editor POC

  

**Objective**: Understand which library provides the best solution in text editor

  
  

## DraftJs

  

-  [Official github page](https://github.com/facebook/draft-js)

-  [Best practices when working with draft js](https://reactrocket.com/post/draft-js-best-practices/)


**Requirements:** 

 - [x] Typing text - text editor as normal (Insert, substitute, delete text characters), undo/redo, support copy paste
 - [x] Should support UTF-8 encoded languages
 - [x] Can interact with text - highlighting, clicking, additional styles, react component inside of the text
 - [x] Must support pins and events, other things nice to have
 - [x] We can configure for right to left writing. **- The Documentation says it is possible, however, couldn't make it work on this project when using an Arabic keyboard. Did it using a CSS property.**
  

## Quill JS

  

-  [Offical website](https://quilljs.com/)

-  [React Quill Library](https://github.com/zenoamaro/react-quill).


**Official note from React Quill Library:**

> ReactQuill 2 is here, baby! And it brings a full port to TypeScript

> and React 16+, a refactored build system, and a general tightening of

> the internal logic.

-  [Similiar logic used to run the library on a React project](https://github.com/zenoamaro/react-quill/blob/master/src/index.tsx)
 
**Requirements:** Still looking QuillJS

 - [x] Typing text - text editor as normal (Insert, substitute, delete text characters), undo/redo, support copy paste
 - [x] Should support UTF-8 encoded languages
 - [ ] Can interact with text - highlighting, clicking, additional styles, react component inside of the text
 - [ ] Must support pins and events, other things nice to have
 - [x] We can configure for right to left writing. **- Did it using a CSS property. Didn't find any native support**

 **Notes**:

- **About Perfomance:** Like DOM events, Quill key bindings are blocking calls on every match, so it is a bad idea to have a very expensive handler for a very common key binding.

- **QuillJS impressions:** Does provide a easy way to have a simple editor. Provides default themes, .e.g., snow, that already has a basic setup. However, the issue is when trying to add customized React components to the editor. The library does not provide a simple and straightforward away. It's simple to add paragraphs, div, span, but a new component, i had to add directly into the DOM to have a result on it. Even so, it wasn't the best one we could have expected.


## Editable Content Tag

  

-  [MDN Page Link](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content)


**Requirements:** 

 - [ ] Typing text - text editor as normal (Insert, substitute, delete text characters), undo/redo, support copy paste
 - [x] Should support UTF-8 encoded languages. **- It does supports UTF8**
 - [ ] Can interact with text - highlighting, clicking, additional styles, react component inside of the text
 - [ ] Must support pins and events, other things nice to have
 - [x] We can configure for right to left writing. **- We only need to apply CSS to make this happen**