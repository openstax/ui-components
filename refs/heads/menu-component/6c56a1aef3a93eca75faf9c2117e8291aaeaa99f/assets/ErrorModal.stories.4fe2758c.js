import{R as t,a as o}from"./index.6ca07a40.js";import{E as s}from"./ErrorModal.c231f7d4.js";import{E as n}from"./ErrorBoundary.1d3e4828.js";import"./Button.167d9ba7.js";import"./theme.f31ae823.js";import"./palette.15e4d008.js";import"./buttons.525327d1.js";import"./Modal.98df5d58.js";import"./Error.b9714572.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};