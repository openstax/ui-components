import{R as t,a as o}from"./index.7f496473.js";import{E as s}from"./ErrorModal.0c6c5d57.js";import{E as n}from"./ErrorBoundary.61d3a329.js";import"./Button.8fa1982e.js";import"./theme.79b85ac5.js";import"./palette.15e4d008.js";import"./buttons.8a56aee3.js";import"./Modal.09cd8c32.js";import"./Error.77aecd9a.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};