import{R as c,j as i,F as T,a as o}from"./index.f09e7bf3.js";import{E as h}from"./ErrorBoundary.3f50027b.js";import{V as b}from"./contexts.144565b4.js";import{u as f}from"./hooks.f83b6ada.js";import"./Error.6b122a93.js";import"./Modal.62359cfd.js";import"./theme.18fe5a74.js";import"./palette.15e4d008.js";import"./Dialog.module.3dba56b6.js";import"./OverlayArrow.module.7c1f8c9b.js";import"./context.module.86edc84f.js";import"./Hidden.module.9a7d5e7b.js";import"./useButton.module.a1a7d796.js";import"./Collection.module.d02059cb.js";import"./FocusScope.module.c88fe1c5.js";import"./utils.e3275d2c.js";const k=({message:e,showEventId:r=!0})=>{var s;const{error:t}=c.useContext(b);return i(T,{children:[e||((s=t==null?void 0:t.error)==null?void 0:s.message),r?o("div",{children:t==null?void 0:t.eventId}):null]})};var n={};Object.defineProperty(n,"__esModule",{value:!0});var m=n.SessionExpiredError=n.NotFoundError=S=n.UnauthorizedError=n.InvalidRequestError=n.isAppError=void 0;const p=({TYPE:e})=>r=>r instanceof Error&&r.constructor.TYPE===e,x=e=>e instanceof Error&&typeof e.constructor.TYPE=="string";n.isAppError=x;class E extends Error{constructor(r){super(r||E.TYPE)}}n.InvalidRequestError=E;E.TYPE="InvalidRequestError";E.matches=p(E);class a extends Error{constructor(r){super(r||a.TYPE)}}var S=n.UnauthorizedError=a;a.TYPE="UnauthorizedError";a.matches=p(a);class u extends Error{constructor(r){super(r||u.TYPE)}}n.NotFoundError=u;u.TYPE="NotFoundError";u.matches=p(u);class l extends Error{constructor(r){super(r||l.TYPE)}}m=n.SessionExpiredError=l;l.TYPE="SessionExpiredError";l.matches=p(l);const d=({doThrow:e,setShowError:r,error:t,errorMessage:s})=>(c.useEffect(()=>{if(e)throw r(!1),t instanceof Error?t:new Error(s||"Test Error")},[e,t,s,r]),null),w=()=>{const e=f();return o("button",{onClick:()=>{Promise.reject(Error("Test Error")).catch(e)},children:"Async Trigger Error Display"})},N=()=>{const[e,r]=c.useState(!1);return i(h,{children:[o(k,{}),o(d,{doThrow:e,setShowError:r}),o("button",{onClick:()=>{r(!0)},children:"Throw Error"}),o(w,{})]})},G=()=>{const[e,r]=c.useState(!1);return i(h,{renderFallback:!0,sentryDsn:"https://0@o0.ingest.sentry.io/0",children:[o(d,{doThrow:e,setShowError:r}),o("button",{onClick:()=>{r(!0)},children:"Throw Error"}),o(w,{})]})},M=()=>{const[e,r]=c.useState(!1);return i(h,{renderFallback:!0,fallback:t=>i(T,{children:[o("h2",{children:"This is a custom error fallback"}),o("p",{children:t&&t.error.toString()}),t&&t.resetError?o("button",{onClick:t&&t.resetError,children:"Reset"}):null]}),children:[o(d,{doThrow:e,setShowError:r}),o("button",{onClick:()=>{r(!0)},children:"Throw Error"}),o(w,{})]})},y=()=>{const e=f();return o("button",{onClick:()=>{(async()=>{try{throw new m}catch(r){e(r)}})()},children:"Async Throw Session Expired"})},O=()=>{const[e,r]=c.useState(!1),[t,s]=c.useState(!1);return i(h,{renderFallback:!0,children:[o(d,{doThrow:e,setShowError:r,error:new m}),o(d,{doThrow:t,setShowError:s,error:new S}),o("button",{onClick:()=>{r(!0)},children:"Throw SessionExpiredError"}),o("br",{}),o(y,{}),o("br",{}),o("button",{onClick:()=>{s(!0)},children:"Throw UnauthorizedError"})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{M as Fallback_GenericError_Custom,G as Fallback_GenericError_Default,O as Fallback_SpecialError,N as InlineMessages};
