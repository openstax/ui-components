import{R as t,a as o}from"./index.2aa33a75.js";import{E as s}from"./ErrorModal.9d2e1b52.js";import{E as n}from"./ErrorBoundary.3e0d4444.js";import"./Button.d23f0d52.js";import"./theme.d95f6de0.js";import"./palette.15e4d008.js";import"./buttons.715e83b2.js";import"./Modal.2628c2cc.js";import"./Error.ac00c9c7.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};