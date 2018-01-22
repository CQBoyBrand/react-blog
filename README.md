# react-blog
React+Redux+React-router4+axios+antd demo

# 之前只能在chrome浏览器运行，在其他浏览器报错的问题已解决
在index.js文件中代码有问题，下面是问题代码：
```javascript
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => {} //因为使用了chrome的redux插件，所以没有执行 ()=>{}这个函数，所一没报错，而在其他浏览器执行()=>{}这个就报错了将这个改成 f=>f就好了
))
```
正确代码：
```javascript
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

```
