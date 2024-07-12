import{R as s,j as i,F as T,a as e}from"./index.eb7b38b1.js";import{g as x,E as h}from"./ErrorBoundary.02d3df30.js";import{a as f,c as y}from"./Error.d33e3042.js";import"./Modal.a5fe6d8d.js";import"./theme.b57e9cd5.js";import"./palette.15e4d008.js";import"./BodyPortal.47903540.js";const k=({message:o,showEventId:r=!0})=>{var c;const{error:t}=s.useContext(f);return i(T,{children:[o||((c=t==null?void 0:t.error)==null?void 0:c.message),r?e("div",{children:t==null?void 0:t.eventId}):null]})};var n={};Object.defineProperty(n,"__esModule",{value:!0});var w=n.SessionExpiredError=n.NotFoundError=S=n.UnauthorizedError=n.InvalidRequestError=n.isAppError=void 0;const p=({TYPE:o})=>r=>r instanceof Error&&r.constructor.TYPE===o,C=o=>o instanceof Error&&typeof o.constructor.TYPE=="string";n.isAppError=C;class E extends Error{constructor(r){super(r||E.TYPE)}}n.InvalidRequestError=E;E.TYPE="InvalidRequestError";E.matches=p(E);class a extends Error{constructor(r){super(r||a.TYPE)}}var S=n.UnauthorizedError=a;a.TYPE="UnauthorizedError";a.matches=p(a);class u extends Error{constructor(r){super(r||u.TYPE)}}n.NotFoundError=u;u.TYPE="NotFoundError";u.matches=p(u);class l extends Error{constructor(r){super(r||l.TYPE)}}w=n.SessionExpiredError=l;l.TYPE="SessionExpiredError";l.matches=p(l);const b=()=>{const{setError:o}=s.useContext(f);return s.useCallback(r=>{o(r?{error:r,type:x(r),eventId:y(r)}:null)},[o])},d=({doThrow:o,setShowError:r,error:t,errorMessage:c})=>(s.useEffect(()=>{if(o)throw r(!1),t instanceof Error?t:new Error(c||"Test Error")},[o]),null),m=()=>{const o=b();return e("button",{onClick:()=>{Promise.reject(Error("Test Error")).catch(o)},children:"Async Trigger Error Display"})},j=()=>{const[o,r]=s.useState(!1);return i(h,{children:[e(k,{}),e(d,{doThrow:o,setShowError:r}),e("button",{onClick:()=>{r(!0)},children:"Throw Error"}),e(m,{})]})},z=()=>{const[o,r]=s.useState(!1);return i(h,{renderFallback:!0,sentryDsn:"https://0@o0.ingest.sentry.io/0",children:[e(d,{doThrow:o,setShowError:r}),e("button",{onClick:()=>{r(!0)},children:"Throw Error"}),e(m,{})]})},U=()=>{const[o,r]=s.useState(!1);return i(h,{renderFallback:!0,fallback:t=>i(T,{children:[e("h2",{children:"This is a custom error fallback"}),e("p",{children:t&&t.error.toString()}),t&&t.resetError?e("button",{onClick:t&&t.resetError,children:"Reset"}):null]}),children:[e(d,{doThrow:o,setShowError:r}),e("button",{onClick:()=>{r(!0)},children:"Throw Error"}),e(m,{})]})},g=()=>{const o=b();return e("button",{onClick:()=>{(async()=>{try{throw new w}catch(r){o(r)}})()},children:"Async Throw Session Expired"})},_=()=>{const[o,r]=s.useState(!1),[t,c]=s.useState(!1);return i(h,{renderFallback:!0,children:[e(d,{doThrow:o,setShowError:r,error:new w}),e(d,{doThrow:t,setShowError:c,error:new S}),e("button",{onClick:()=>{r(!0)},children:"Throw SessionExpiredError"}),e("br",{}),e(g,{}),e("br",{}),e("button",{onClick:()=>{c(!0)},children:"Throw UnauthorizedError"})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{U as Fallback_GenericError_Custom,z as Fallback_GenericError_Default,_ as Fallback_SpecialError,j as InlineMessages};
