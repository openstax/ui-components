import{R as t,a as o}from"./index.bc9e2bce.js";import{E as s}from"./ErrorModal.42cdae27.js";import{E as n}from"./ErrorBoundary.9ff9fd74.js";import"./Button.01bd8bdf.js";import"./theme.d001b740.js";import"./palette.15e4d008.js";import"./Modal.7e59aaa0.js";import"./Error.3159e9a7.js";const l=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{l as Default};