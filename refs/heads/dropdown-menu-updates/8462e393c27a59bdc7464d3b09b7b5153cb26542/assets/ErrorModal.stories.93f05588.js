import{R as t,a as o}from"./index.29e8c80b.js";import{E as s}from"./ErrorModal.9567adcf.js";import{E as n}from"./ErrorBoundary.4dfce6b7.js";import"./Button.b350f3ba.js";import"./theme.eaa51723.js";import"./palette.15e4d008.js";import"./buttons.8912eeb4.js";import"./Modal.a4b7a2bd.js";import"./Error.94ac3d05.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};