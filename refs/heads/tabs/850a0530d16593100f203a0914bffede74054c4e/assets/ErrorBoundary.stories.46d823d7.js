import{R as s,j as i,F as S,a as o}from"./index.21022e4c.js";import{g as x,E as h}from"./ErrorBoundary.967b57ce.js";import{a as T,c as k}from"./Error.5522f6c3.js";import"./Modal.97aaaf14.js";import"./theme.36283d69.js";import"./palette.15e4d008.js";const y=({message:r,showEventId:e=!0})=>{var c;const{error:t}=s.useContext(T);return i(S,{children:[r||((c=t==null?void 0:t.error)==null?void 0:c.message),e?o("div",{children:t==null?void 0:t.eventId}):null]})};var n={};Object.defineProperty(n,"__esModule",{value:!0});var m=n.SessionExpiredError=n.NotFoundError=b=n.UnauthorizedError=n.InvalidRequestError=void 0;const w=({TYPE:r})=>e=>e instanceof Error&&e.constructor.TYPE===r;class E extends Error{}n.InvalidRequestError=E;E.TYPE="InvalidRequestError";E.matches=w(E);class l extends Error{}var b=n.UnauthorizedError=l;l.TYPE="UnauthorizedError";l.matches=w(l);class u extends Error{}n.NotFoundError=u;u.TYPE="NotFoundError";u.matches=w(u);class d extends Error{}m=n.SessionExpiredError=d;d.TYPE="SessionExpiredError";d.matches=w(d);const f=()=>{const{setError:r}=s.useContext(T);return s.useCallback(e=>{r(e?{error:e,type:x(e),eventId:k(e)}:null)},[r])},a=({doThrow:r,setShowError:e,error:t,errorMessage:c})=>(s.useEffect(()=>{if(r)throw e(!1),t instanceof Error?t:new Error(c||"Test Error")},[r]),null),p=()=>{const r=f();return o("button",{onClick:()=>{Promise.reject(Error("Test Error")).catch(r)},children:"Async Trigger Error Display"})},P=()=>{const[r,e]=s.useState(!1);return i(h,{children:[o(y,{}),o(a,{doThrow:r,setShowError:e}),o("button",{onClick:()=>{e(!0)},children:"Throw Error"}),o(p,{})]})},R=()=>{const[r,e]=s.useState(!1);return i(h,{renderFallback:!0,sentryDsn:"https://0@o0.ingest.sentry.io/0",children:[o(a,{doThrow:r,setShowError:e}),o("button",{onClick:()=>{e(!0)},children:"Throw Error"}),o(p,{})]})},z=()=>{const[r,e]=s.useState(!1);return i(h,{renderFallback:!0,fallback:t=>i(S,{children:[o("h2",{children:"This is a custom error fallback"}),o("p",{children:t&&t.error.toString()}),t&&t.resetError?o("button",{onClick:t&&t.resetError,children:"Reset"}):null]}),children:[o(a,{doThrow:r,setShowError:e}),o("button",{onClick:()=>{e(!0)},children:"Throw Error"}),o(p,{})]})},C=()=>{const r=f();return o("button",{onClick:()=>{(async()=>{try{throw new m}catch(e){r(e)}})()},children:"Async Throw Session Expired"})},U=()=>{const[r,e]=s.useState(!1),[t,c]=s.useState(!1);return i(h,{renderFallback:!0,children:[o(a,{doThrow:r,setShowError:e,error:new m}),o(a,{doThrow:t,setShowError:c,error:new b}),o("button",{onClick:()=>{e(!0)},children:"Throw SessionExpiredError"}),o("br",{}),o(C,{}),o("br",{}),o("button",{onClick:()=>{c(!0)},children:"Throw UnauthorizedError"})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{z as Fallback_GenericError_Custom,R as Fallback_GenericError_Default,U as Fallback_SpecialError,P as InlineMessages};
