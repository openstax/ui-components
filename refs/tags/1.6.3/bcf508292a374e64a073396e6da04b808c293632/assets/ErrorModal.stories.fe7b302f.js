import{R as t,a as o}from"./index.fa85b90d.js";import{E as s}from"./ErrorModal.82b15c01.js";import{E as n}from"./ErrorBoundary.5ccb7730.js";import"./Button.efda26aa.js";import"./theme.b2156def.js";import"./palette.15e4d008.js";import"./buttons.c26bf874.js";import"./Modal.c0d12cff.js";import"./Error.0a69b598.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};