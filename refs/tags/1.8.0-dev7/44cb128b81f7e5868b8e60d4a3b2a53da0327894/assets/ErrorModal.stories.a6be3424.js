import{R as t,a as o}from"./index.c0508c2f.js";import{E as s}from"./ErrorModal.a4e0f443.js";import{E as n}from"./ErrorBoundary.9014dbe4.js";import"./Button.e4e01397.js";import"./theme.22a64bc8.js";import"./palette.15e4d008.js";import"./buttons.4a41be9b.js";import"./Modal.0e714bb6.js";import"./Error.c49a19f8.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};