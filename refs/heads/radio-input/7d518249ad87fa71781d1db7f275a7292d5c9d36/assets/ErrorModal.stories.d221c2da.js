import{R as t,a as o}from"./index.e6e97d61.js";import{E as s}from"./ErrorModal.bdc178ce.js";import{E as n}from"./ErrorBoundary.8391fa8b.js";import"./Button.8f785505.js";import"./theme.d3dab273.js";import"./palette.15e4d008.js";import"./buttons.cc330e77.js";import"./Modal.fe9a62f7.js";import"./Error.3aa82857.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};