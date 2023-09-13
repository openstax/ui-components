import{R as s,j as i,F as b,a as r}from"./index.bf89b9fa.js";import{E as h}from"./ErrorBoundary.0fc2129a.js";import{a as T}from"./Error.d8969530.js";import"./Modal.4cc65327.js";import"./theme.8ccad95b.js";import"./palette.15e4d008.js";const f=({message:e,showEventId:o=!0})=>{const t=s.useContext(T);return i(b,{children:[e||(t==null?void 0:t.error.message),o?r("div",{children:t==null?void 0:t.eventId}):null]})};var n={};Object.defineProperty(n,"__esModule",{value:!0});var m=n.SessionExpiredError=n.NotFoundError=S=n.UnauthorizedError=n.InvalidRequestError=void 0;const w=({TYPE:e})=>o=>o instanceof Error&&o.constructor.TYPE===e;class a extends Error{}n.InvalidRequestError=a;a.TYPE="InvalidRequestError";a.matches=w(a);class l extends Error{}var S=n.UnauthorizedError=l;l.TYPE="UnauthorizedError";l.matches=w(l);class d extends Error{}n.NotFoundError=d;d.TYPE="NotFoundError";d.matches=w(d);class u extends Error{}m=n.SessionExpiredError=u;u.TYPE="SessionExpiredError";u.matches=w(u);const c=({doThrow:e,setShowError:o,error:t,errorMessage:E})=>(s.useEffect(()=>{if(e)throw o(!1),t instanceof Error?t:new Error(E||"Test Error")},[e]),null),v=()=>{const[e,o]=s.useState(!1);return i(h,{children:[r(f,{}),r(c,{doThrow:e,setShowError:o}),r("button",{onClick:()=>{o(!0)},children:"Throw Error"}),r("button",{onClick:()=>{Promise.reject(Error("Test Error"))},children:"Reject Promise"})]})},j=()=>{const[e,o]=s.useState(!1);return i(h,{renderFallback:!0,sentryDsn:"https://0@o0.ingest.sentry.io/0",children:[r(c,{doThrow:e,setShowError:o}),r("button",{onClick:()=>{o(!0)},children:"Throw Error"}),r("button",{onClick:()=>{Promise.reject(Error("Test Error"))},children:"Reject Promise"})]})},R=()=>{const[e,o]=s.useState(!1);return i(h,{renderFallback:!0,fallback:t=>i(b,{children:[r("h2",{children:"This is a custom error fallback"}),r("p",{children:t&&t.error.toString()}),t&&t.resetError?r("button",{onClick:t&&t.resetError,children:"Reset"}):null]}),children:[r(c,{doThrow:e,setShowError:o}),r("button",{onClick:()=>{o(!0)},children:"Throw Error"}),r("button",{onClick:()=>{Promise.reject(Error("Test Error"))},children:"Reject Promise"})]})},y=()=>{const[e,o]=s.useState(!1),[t,E]=s.useState(!1);return i(h,{renderFallback:!0,children:[r(c,{doThrow:e,setShowError:o,error:new m}),r(c,{doThrow:t,setShowError:E,error:new S}),r("button",{onClick:()=>{o(!0)},children:"Throw SessionExpiredError"}),r("br",{}),r("button",{onClick:async()=>{throw new m},children:"Throw Async SessionExpiredError"}),r("br",{}),r("button",{onClick:()=>{E(!0)},children:"Throw UnauthorizedError"})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Fallback_GenericError_Custom,j as Fallback_GenericError_Default,y as Fallback_SpecialError,v as InlineMessages};
