import{R as t,a as o}from"./index.a97e6f4a.js";import{E as s}from"./ErrorModal.c197f589.js";import{E as n}from"./ErrorBoundary.74c2f239.js";import"./Button.b2f0d2a2.js";import"./theme.cfa2d711.js";import"./palette.15e4d008.js";import"./buttons.acc71dcd.js";import"./Modal.8605199d.js";import"./Error.0d206115.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};