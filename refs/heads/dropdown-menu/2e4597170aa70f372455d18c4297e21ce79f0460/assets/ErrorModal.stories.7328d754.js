import{R as t,a as o}from"./index.141fb4fa.js";import{E as s}from"./ErrorModal.89b6740f.js";import{E as n}from"./ErrorBoundary.e1e9b3c6.js";import"./Button.eafadcea.js";import"./theme.c3505fa7.js";import"./palette.15e4d008.js";import"./buttons.4a46796f.js";import"./Modal.cf67273c.js";import"./Error.2e635f39.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};