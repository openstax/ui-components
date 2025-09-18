import{R as s,s as S,j as b,F as C,a as d,W as H}from"./index.5c74dffd.js";import{B as U,a as N}from"./BodyPortal.a9bfec71.js";import{a as _,b as x,d as A}from"./NavBarMenuButtons.efeab756.js";import{c as l}from"./theme.41418f80.js";import"./Dialog.module.17b2592e.js";import"./Button.module.9b9b5188.js";import"./useFocusRing.module.e3a9d4d9.js";import"./context.module.c4073eef.js";import"./useButton.module.d6d66488.js";import"./VisuallyHidden.module.daaf5062.js";import"./OverlayArrow.module.f7d352e5.js";import"./Collection.module.667421e7.js";import"./useTreeState.module.089f3c30.js";import"./palette.15e4d008.js";const $="00DU0000000Kwch",T="Web_Messaging_Deployment",M="ESWWebMessagingDeployme1716235390398",B=`https://openstax.my.site.com/${M}`,I="https://openstax.my.salesforce-scrt.com",k=`${B}/assets/js/bootstrap.min.js`,L=`${I}/embeddedservice/v1/businesshours?orgId=${$}&esConfigName=${T}`,O={orgId:$,app:T,deploymentURL:B,scrt2URL:I,scriptUrl:k,businessHoursURL:L},w={READY:"onEmbeddedMessagingReady",BUSINESS_HOURS_STARTED:"onEmbeddedMessagingBusinessHoursStarted",BUSINESS_HOURS_ENDED:"onEmbeddedMessagingBusinessHoursEnded"},F=t=>{const[n,o]=s.useState(!1),[a,r]=s.useState(null),c=s.useRef(null);return s.useEffect(()=>{if(document.querySelector(`script[src="${t}"]`)){o(!0);return}const e=document.createElement("script");e.src=t,e.async=!0,e.onload=()=>o(!0),e.onerror=()=>r(new Error(`Failed to load ${t}`)),document.head.appendChild(e),c.current=e},[t]),{ready:n,error:a}},j=async(t,n)=>{const o=await fetch(t,{signal:n});if(!o.ok)throw new Error(`HTTP ${o.status}`);return await o.json()},P=async(t,n)=>{const{businessHoursInfo:o}=await j(t,n),a=new Date().toISOString().slice(0,10),r=o.businessHours.find(e=>a===new Date(e.startTime).toISOString().slice(0,10)),c=async()=>{const e=window.embeddedservice_bootstrap;if(!!e)return await e.utilAPI.launchChat()};return!o.isActive||r===void 0?null:{...r,openChat:c}},W=({orgId:t,app:n,deploymentURL:o,scrt2URL:a,scriptUrl:r,businessHoursURL:c})=>{const[e,m]=s.useState(null),[y,E]=s.useState(!1),[p,f]=s.useState(null),{ready:h,error:g}=F(r),v=s.useRef(null),R=s.useCallback(({signal:u})=>()=>(E(!0),f(null),P(c,u).then(m).catch(i=>{i.name!=="AbortError"&&(f(i),m(null))}).finally(()=>E(!1))),[c]);return s.useEffect(()=>{if(!h||typeof window>"u")return;v.current=new AbortController;const u=R(v.current);window.addEventListener(w.READY,u),window.addEventListener(w.BUSINESS_HOURS_STARTED,u),window.addEventListener(w.BUSINESS_HOURS_ENDED,u);try{const i=window.embeddedservice_bootstrap;i.settings.language="en_US",i.settings.hideChatButtonOnLoad=!0,i.init(t,n,o,{scrt2URL:a})}catch(i){console.error("Error initializing Embedded Messaging",i)}return()=>{var i;(i=v.current)==null||i.abort(),v.current=null,window.removeEventListener(w.READY,u),window.removeEventListener(w.BUSINESS_HOURS_STARTED,u),window.removeEventListener(w.BUSINESS_HOURS_ENDED,u)}},[h,R,t,n,o,a]),{chatEmbed:e,loading:y,error:g!=null?g:p}},z=S(_)`
  color: ${l.palette.gray};
  font-size: 1.4rem;
`,D=S(x)`
  color: ${l.palette.neutralDarker};
  text-decoration: none;

  :focus-visible {
    outline: 0;
    background: ${l.palette.neutralLighter};
  }
  :hover {
    color: ${l.palette.neutralDarker};
    text-decoration: none;
  }
`,Y=S(U)`
  background-color: ${l.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,q=S.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function G({onClick:t,className:n}){return d("div",{className:n,children:d("button",{type:"button",onClick:t,"aria-label":"close form",children:"Back"})})}const K=S(G)`
  border-top: 0.1rem solid ${l.palette.pale};
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${l.palette.neutralBright};
  padding-left: 1.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;

  @media(min-width: 56em) {
    padding: 0 calc(50vw - 43rem);
  }

  button {
    height: 3rem;
    background-color: ${l.palette.white};
    border: 1px solid ${l.palette.pale};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`,Z=(t,n)=>{const o=new Date(t),a=new Date(n);if(isNaN(o.getTime())||isNaN(a.getTime()))return"";try{const r={hour:"numeric",hour12:!0},c=new Intl.DateTimeFormat(void 0,r).format(o),e=new Intl.DateTimeFormat(void 0,{...r,timeZoneName:"short"}).format(a);return`${c} - ${e}`}catch(r){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",r),`${o.getHours()} - ${a.getHours()}`}},J=({contactFormParams:t,chatEmbedParams:n,children:o})=>{const[a,r]=s.useState(),c=s.useMemo(()=>({...O,...n}),[n]),{chatEmbed:e,error:m}=W(c),y=s.useMemo(()=>{const p="https://openstax.org/embedded/contact",f=t.map(({key:h,value:g})=>encodeURIComponent(`${h}=${g}`)).map(h=>`body=${h}`).join("&");return`${p}?${f}`},[t]),E=s.useMemo(()=>(e==null?void 0:e.startTime)&&(e==null?void 0:e.endTime)?Z(e.startTime,e.endTime):null,[e==null?void 0:e.startTime,e==null?void 0:e.endTime]);return s.useEffect(()=>{const p=({data:f})=>{f==="CONTACT_FORM_SUBMITTED"&&r(void 0)};return window.addEventListener("message",p,!1),()=>window.removeEventListener("message",p,!1)},[]),m&&console.error(m),b(C,{children:[b(z,{label:"Help","aria-label":"Help menu",children:[e!==null&&m===null?b(D,{onAction:()=>e.openChat(),children:["Chat With Us (",E,")"]}):d(D,{onAction:()=>r(y),children:"Report an issue"}),o]}),a&&b(Y,{children:[d(q,{title:"Contact form",src:a}),d(K,{onClick:()=>r(void 0)})]})]})},Q=H`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,me=()=>b(N.Provider,{value:["nav","root"],children:[d(Q,{}),d(A,{logo:!0,children:d(J,{contactFormParams:[{key:"userId",value:"test"}],children:d(D,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{me as Default};
