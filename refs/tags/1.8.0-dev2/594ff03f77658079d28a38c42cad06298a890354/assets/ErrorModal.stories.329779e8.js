import{R as t,a as o}from"./index.6b082630.js";import{E as s}from"./ErrorModal.b577f98e.js";import{E as n}from"./ErrorBoundary.fa8fcf90.js";import"./Button.98750564.js";import"./theme.d4b81e15.js";import"./palette.15e4d008.js";import"./buttons.11c8936c.js";import"./Modal.4fc25695.js";import"./Error.8eb84580.js";const w=()=>{t.useEffect(()=>{Promise.reject("Test error for modal")},[]);const[e,r]=t.useState(!0);return o(n,{sentryDsn:"https://0@o0.ingest.sentry.io/0",children:o(s,{onModalClose:()=>r(!1),show:e})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default};