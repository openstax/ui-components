import{R as t,a as o}from"./index.cde79570.js";import{E as s}from"./ErrorModal.b0629857.js";import{E as n}from"./ErrorBoundary.88086476.js";import"./Button.dba300d2.js";import"./theme.3812c92b.js";import"./palette.15e4d008.js";import"./buttons.f63fedea.js";import"./Modal.401e6eae.js";import"./Error.de0f6a94.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};