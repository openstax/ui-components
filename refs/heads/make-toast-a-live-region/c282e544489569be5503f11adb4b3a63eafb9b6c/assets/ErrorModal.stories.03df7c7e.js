import{R as t,a as o}from"./index.22fa5c1e.js";import{E as s}from"./ErrorModal.98607aad.js";import{E as n}from"./ErrorBoundary.38731a1c.js";import"./Button.8862bf02.js";import"./theme.0f731287.js";import"./palette.15e4d008.js";import"./buttons.3fc0f14f.js";import"./Modal.986063e2.js";import"./Error.d4631edf.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};