import{R as t,a as o}from"./index.b9ef7298.js";import{E as s}from"./ErrorModal.dbf9debe.js";import{E as n}from"./ErrorBoundary.9664a0ae.js";import"./Button.7e083171.js";import"./theme.a02a7406.js";import"./palette.15e4d008.js";import"./buttons.4c033c8c.js";import"./Modal.7c94331c.js";import"./Error.223ba267.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};