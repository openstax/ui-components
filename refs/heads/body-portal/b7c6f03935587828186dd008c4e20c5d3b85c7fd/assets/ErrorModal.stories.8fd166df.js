import{R as t,a as o}from"./index.9c531c8a.js";import{E as s}from"./ErrorModal.6a48e553.js";import{E as m}from"./ErrorBoundary.4a7b8402.js";import"./Button.3258e209.js";import"./theme.f923e64e.js";import"./palette.15e4d008.js";import"./buttons.348f340b.js";import"./Modal.90965d29.js";import"./BodyPortal.c9353eb5.js";import"./Error.65e863db.js";const E=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(m,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Default};