import{R as t,a as o}from"./index.95680532.js";import{E as s}from"./ErrorModal.1ad24201.js";import{E as n}from"./ErrorBoundary.e6cfc590.js";import"./Button.7dcbfb56.js";import"./theme.ef5c3f10.js";import"./palette.15e4d008.js";import"./buttons.de3360c4.js";import"./Modal.0fbc1606.js";import"./Error.e7e9c040.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};