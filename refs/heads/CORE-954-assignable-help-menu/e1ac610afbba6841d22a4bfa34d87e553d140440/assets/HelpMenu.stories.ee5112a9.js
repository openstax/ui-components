import{R as s,s as S,j as b,F as C,a as c,W as H}from"./index.82170460.js";import{B as U,a as N}from"./BodyPortal.76d86765.js";import{a as _,b as x,d as A}from"./NavBarMenuButtons.c9ef7235.js";import{c as d}from"./theme.fb1fd088.js";import"./Dialog.module.2ccae1e3.js";import"./Button.module.078e1228.js";import"./useFocusRing.module.4ab47471.js";import"./context.module.341bdf06.js";import"./useButton.module.b8fa1bea.js";import"./VisuallyHidden.module.7fc74035.js";import"./OverlayArrow.module.6ad572a2.js";import"./Collection.module.a04540a5.js";import"./useTreeState.module.8b2e93a1.js";import"./palette.15e4d008.js";const $="00DU0000000Kwch",T="Web_Messaging_Deployment",M="ESWWebMessagingDeployme1716235390398",B=`https://openstax.my.site.com/${M}`,I="https://openstax.my.salesforce-scrt.com",k=`${B}/assets/js/bootstrap.min.js`,L=`${I}/embeddedservice/v1/businesshours?orgId=${$}&esConfigName=${T}`,O={orgId:$,app:T,deploymentURL:B,scrt2URL:I,scriptUrl:k,businessHoursURL:L},w={READY:"onEmbeddedMessagingReady",BUSINESS_HOURS_STARTED:"onEmbeddedMessagingBusinessHoursStarted",BUSINESS_HOURS_ENDED:"onEmbeddedMessagingBusinessHoursEnded"},F=o=>{const[r,t]=s.useState(!1),[a,n]=s.useState(null),l=s.useRef(null);return s.useEffect(()=>{if(document.querySelector(`script[src="${o}"]`)){t(!0);return}const e=document.createElement("script");e.src=o,e.onload=()=>{t(!0),n(null)},e.onerror=()=>{n(new Error(`Failed to load ${o}`)),t(!1)},document.body.appendChild(e),l.current=e},[o]),{ready:r,error:a}},j=async(o,r)=>{const t=await fetch(o,{signal:r});if(!t.ok)throw new Error(`HTTP ${t.status}`);return await t.json()},P=async(o,r)=>{const{businessHoursInfo:t}=await j(o,r),a=new Date().toISOString().slice(0,10),n=t.businessHours.find(e=>a===new Date(e.startTime).toISOString().slice(0,10)),l=async()=>{const e=window.embeddedservice_bootstrap;if(!!e)return await e.utilAPI.launchChat()};return!t.isActive||n===void 0?null:{...n,openChat:l}},W=({orgId:o,app:r,deploymentURL:t,scrt2URL:a,scriptUrl:n,businessHoursURL:l})=>{const[e,m]=s.useState(null),[y,E]=s.useState(!1),[p,f]=s.useState(null),{ready:h,error:g}=F(n),v=s.useRef(null),R=s.useCallback(({signal:u})=>()=>(E(!0),f(null),P(l,u).then(m).catch(i=>{i.name!=="AbortError"&&(f(i),m(null))}).finally(()=>E(!1))),[l]);return s.useEffect(()=>{if(!h||typeof window>"u")return;v.current=new AbortController;const u=R(v.current);window.addEventListener(w.READY,u),window.addEventListener(w.BUSINESS_HOURS_STARTED,u),window.addEventListener(w.BUSINESS_HOURS_ENDED,u);try{const i=window.embeddedservice_bootstrap;i.settings.language="en_US",i.settings.hideChatButtonOnLoad=!0,i.init(o,r,t,{scrt2URL:a})}catch(i){console.error("Error initializing Embedded Messaging",i)}return()=>{var i;(i=v.current)==null||i.abort(),v.current=null,window.removeEventListener(w.READY,u),window.removeEventListener(w.BUSINESS_HOURS_STARTED,u),window.removeEventListener(w.BUSINESS_HOURS_ENDED,u)}},[h,R,o,r,t,a]),{chatEmbed:e,loading:y,error:g!=null?g:p}},z=S(_)`
  color: ${d.palette.gray};
  font-size: 1.4rem;
`,D=S(x)`
  color: ${d.palette.neutralDarker};
  text-decoration: none;

  :focus-visible {
    outline: 0;
    background: ${d.palette.neutralLighter};
  }
  :hover {
    color: ${d.palette.neutralDarker};
    text-decoration: none;
  }
`,Y=S(U)`
  background-color: ${d.palette.neutralBright};
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
`;function G({onClick:o,className:r}){return c("div",{className:r,children:c("button",{type:"button",onClick:o,"aria-label":"close form",children:"Back"})})}const K=S(G)`
  border-top: 0.1rem solid ${d.palette.pale};
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${d.palette.neutralBright};
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
    background-color: ${d.palette.white};
    border: 1px solid ${d.palette.pale};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`,Z=(o,r)=>{const t=new Date(o),a=new Date(r);if(isNaN(t.getTime())||isNaN(a.getTime()))return"";try{const n={hour:"numeric",hour12:!0},l=new Intl.DateTimeFormat(void 0,n).format(t),e=new Intl.DateTimeFormat(void 0,{...n,timeZoneName:"short"}).format(a);return`${l} - ${e}`}catch(n){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",n),`${t.getHours()} - ${a.getHours()}`}},J=({contactFormParams:o,chatEmbedParams:r,children:t})=>{const[a,n]=s.useState(),l=s.useMemo(()=>({...O,...r}),[r]),{chatEmbed:e,error:m}=W(l),y=s.useMemo(()=>{const p="https://openstax.org/embedded/contact",f=o.map(({key:h,value:g})=>encodeURIComponent(`${h}=${g}`)).map(h=>`body=${h}`).join("&");return`${p}?${f}`},[o]),E=s.useMemo(()=>(e==null?void 0:e.startTime)&&(e==null?void 0:e.endTime)?Z(e.startTime,e.endTime):null,[e==null?void 0:e.startTime,e==null?void 0:e.endTime]);return s.useEffect(()=>{const p=({data:f})=>{f==="CONTACT_FORM_SUBMITTED"&&n(void 0)};return window.addEventListener("message",p,!1),()=>window.removeEventListener("message",p,!1)},[]),m&&console.error(m),b(C,{children:[b(z,{label:"Help","aria-label":"Help menu",children:[e!==null&&m===null?b(D,{onAction:()=>e.openChat(),children:["Chat With Us (",E,")"]}):c(D,{onAction:()=>n(y),children:"Report an issue"}),t]}),a&&b(Y,{children:[c(q,{title:"Contact form",src:a}),c(K,{onClick:()=>n(void 0)})]})]})},Q=H`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,me=()=>b(N.Provider,{value:["nav","root"],children:[c(Q,{}),c(A,{logo:!0,children:c(J,{contactFormParams:[{key:"userId",value:"test"}],children:c(D,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{me as Default};
