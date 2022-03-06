# Brown Bag: Using Javascript Proxy to reduce boilerplace code

_by Paulo Diovani_

This is a short talk about how to use a Javascript Proxy object to reduce boilerplace code.

The example app uses a (maybe outdated) redux-thunk application. The Proxy is used as a replacement
for repetitive code on redux actions as a POC (_proof of concept_).

Note: for real-world applications, conside using [Redux Toolkit](https://redux.js.org/redux-toolkit/overview) instead.

## Presentation progress

Use `git tag` present the application in different development states, before and after the changes.

```
slide-001-standard-redux
slide-002-proxy-sync-actions
slide-003-proxy-async-actions
slide-004-add-ts-types
```

## Video

_in Brazillian Portuguese_

📺 https://youtube.com/watch?v=qd2lxAQp0OY

## References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
- https://www.typescriptlang.org/docs/
