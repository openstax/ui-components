import{R as t,a as o}from"./index.9f77c1ed.js";import{E as s}from"./ErrorModal.6204e626.js";import{E as n}from"./ErrorBoundary.6c56e9d0.js";import"./Button.eb731bca.js";import"./theme.bdfe0cb0.js";import"./palette.15e4d008.js";import"./buttons.7321c257.js";import"./Modal.ed4d4379.js";import"./Error.3a176fb9.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};