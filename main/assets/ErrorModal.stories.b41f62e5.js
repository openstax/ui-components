import{R as t,a as o}from"./index.e5f1b1c3.js";import{E as s}from"./ErrorModal.9e8f946c.js";import{E as n}from"./ErrorBoundary.766cb7cc.js";import"./Button.9a19c110.js";import"./theme.a3de81d4.js";import"./palette.15e4d008.js";import"./buttons.17d1aece.js";import"./Modal.7a01a74c.js";import"./Error.1d1b2be2.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};