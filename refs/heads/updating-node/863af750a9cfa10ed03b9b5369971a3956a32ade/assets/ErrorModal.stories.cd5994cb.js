import{R as t,a as o}from"./index.9b782105.js";import{E as s}from"./ErrorModal.aab8832e.js";import{E as n}from"./ErrorBoundary.3dd72dfd.js";import"./Button.ebf6d5ea.js";import"./theme.0bf77764.js";import"./palette.15e4d008.js";import"./buttons.414443f5.js";import"./Modal.ab7fcde1.js";import"./Error.1ff7a750.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};