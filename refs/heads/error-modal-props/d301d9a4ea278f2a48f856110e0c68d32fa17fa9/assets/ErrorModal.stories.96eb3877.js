import{R as t,a as o}from"./index.9ba56b05.js";import{E as s}from"./ErrorModal.abea80aa.js";import{E as n}from"./ErrorBoundary.4ee18acb.js";import"./Button.c0721161.js";import"./theme.04a91492.js";import"./palette.15e4d008.js";import"./Modal.3ade1552.js";import"./Error.10224430.js";const l=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{l as Default};