import{R as t,a as o}from"./index.beec7e28.js";import{E as s}from"./ErrorModal.7a0f9cb4.js";import{E as n}from"./ErrorBoundary.ab8e4094.js";import"./Button.fdd578e8.js";import"./theme.31ecaead.js";import"./palette.15e4d008.js";import"./buttons.69577d19.js";import"./Modal.c31b27fd.js";import"./Error.5e5a2f3b.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};