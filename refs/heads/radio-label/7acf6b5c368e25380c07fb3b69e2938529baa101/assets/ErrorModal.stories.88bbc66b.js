import{R as t,a as o}from"./index.0ba2d2c4.js";import{E as s}from"./ErrorModal.fcc86b48.js";import{E as n}from"./ErrorBoundary.61794106.js";import"./Button.24cf811e.js";import"./theme.06f16076.js";import"./palette.15e4d008.js";import"./buttons.4cc7848c.js";import"./Modal.3fc9a6f9.js";import"./Error.5b03f53a.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};