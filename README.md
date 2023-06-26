# Description

- [Project intro](https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/learn/lecture/24209032#content)
- This project demonstrates how to use ESBuild to transpile a code in a web browser using React app

# Library used
This project uses following library
- monaco editor: To provide a nice code editing experience for users.
- esbuild: To transpiler code written in web browser in executable javascript code.
- prittier code formatter: To format code written by user in monaco editor.
- bulmaswatch: css library for overall styling of application. 
- react-resizable: to resize react components
- uiw/react-md-wd: for markdown editor in this application
- immer: for simplified state reducers implementations

# Scripts
Create a react project with typescript support
```shell
npx create-react-app 04-jbook --template typescript
```

Install exact dependencies
```shell
npm install --save-exact esbuild-wasm@0.8.27
```