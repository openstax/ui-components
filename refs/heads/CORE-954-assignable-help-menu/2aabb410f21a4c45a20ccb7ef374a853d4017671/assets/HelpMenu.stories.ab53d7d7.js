import{R as n,s as S,j as E,F as B,a as f,W as I}from"./index.96928e17.js";import{B as $,a as C}from"./BodyPortal.5a215b51.js";import{a as A,b as U,d as N}from"./NavBarMenuButtons.56f90844.js";import{c as b}from"./theme.e4769a80.js";import"./Dialog.module.f48e7ad0.js";import"./Button.module.211a1013.js";import"./useFocusRing.module.c891d4bf.js";import"./context.module.e7fa66f3.js";import"./useButton.module.eeaa7f20.js";import"./VisuallyHidden.module.0d3dc116.js";import"./OverlayArrow.module.7cdad0c9.js";import"./Collection.module.a6b5330b.js";import"./useTreeState.module.6b46194c.js";import"./palette.15e4d008.js";const H="00DU0000000Kwch",D="Web_Messaging_Deployment",_="ESWWebMessagingDeployme1716235390398",R=`https://openstax.my.site.com/${_}`,T="https://openstax.my.salesforce-scrt.com",M=`${R}/assets/js/bootstrap.min.js`,k=`${T}/embeddedservice/v1/businesshours?orgId=${H}&esConfigName=${D}`,L={orgId:H,app:D,deploymentURL:R,scrt2URL:T,scriptUrl:M,businessHoursURL:k},h={READY:"onEmbeddedMessagingReady",BUSINESS_HOURS_STARTED:"onEmbeddedMessagingBusinessHoursStarted",BUSINESS_HOURS_ENDED:"onEmbeddedMessagingBusinessHoursEnded"},F=e=>typeof e=="object"&&e!==null&&"startTime"in e&&typeof e.startTime=="number"&&"endTime"in e&&typeof e.endTime=="number",j=e=>Array.isArray(e)&&e.every(F),O=e=>typeof e=="object"&&e!==null&&"businessHoursInfo"in e&&typeof e.businessHoursInfo=="object"&&e.businessHoursInfo!==null&&"businessHours"in e.businessHoursInfo&&j(e.businessHoursInfo.businessHours),P=e=>{const[r,s]=n.useState(!1),[a,o]=n.useState(null);return n.useEffect(()=>{if(document.querySelector(`script[src="${e}"]`)){s(!0);return}const i=document.createElement("script");i.src=e,i.onload=()=>{s(!0),o(null)},i.onerror=()=>{o(new Error(`Failed to load ${e}`)),s(!1)},document.body.appendChild(i)},[e]),{ready:r,error:a}},W=({businessHoursInfo:e})=>{const r=Date.now(),s=e.businessHours.find(({startTime:o,endTime:i})=>o<=r&&r<i);return s?{...s,openChat:async()=>{const o=window.embeddedservice_bootstrap;if(!!o)return await o.utilAPI.launchChat()}}:null},x=(e,r)=>{const[s,a]=n.useState(null),[o,i]=n.useState(null),t=n.useRef(!1),d=n.useRef(null),p=n.useRef(null),w=n.useCallback(async()=>{var m;(m=p.current)==null||m.abort();const l=new AbortController;p.current=l,t.current=!0,i(null);try{const g=await fetch(e,l);if(!g.ok)throw new Error(`HTTP ${g.status}`);const v=await g.json();O(v)?a(v):(i(new Error("Invalid business hours response")),a(null)),d.current=Date.now()}catch(g){if(g.name==="AbortError")return;i(g),a(null)}finally{t.current=!1}},[e]),c=n.useCallback(()=>{if(t.current)return;const l=Date.now(),m=d.current;m&&l-m<r||w()},[w,r]),u=n.useCallback(()=>{a(null)},[]);return n.useEffect(()=>{const l=()=>{c(),window.removeEventListener(h.READY,l)};return window.addEventListener(h.READY,l),window.addEventListener(h.BUSINESS_HOURS_STARTED,c),window.addEventListener(h.BUSINESS_HOURS_ENDED,u),()=>{var m;(m=p.current)==null||m.abort(),window.removeEventListener(h.READY,l),window.removeEventListener(h.BUSINESS_HOURS_STARTED,c),window.removeEventListener(h.BUSINESS_HOURS_ENDED,u)}},[c,u]),{hours:s,error:o}},z=({orgId:e,app:r,deploymentURL:s,scrt2URL:a,scriptUrl:o,businessHoursURL:i})=>{const{ready:t,error:d}=P(o),{hours:p,error:w}=x(i,5e3),c=n.useMemo(()=>p&&W(p),[p]);return n.useEffect(()=>{if(!t||typeof window>"u")return;const u=window.embeddedservice_bootstrap;try{u.settings.language="en_US",u.settings.hideChatButtonOnLoad=!0,u.init(e,r,s,{scrt2URL:a})}catch(l){console.error("Error initializing Embedded Messaging",l)}},[t,e,r,s,a]),{chatEmbed:c,error:d!=null?d:w}},Y=S(A)`
  color: ${b.palette.gray};
  font-size: 1.4rem;
`,y=S(U)`
  color: ${b.palette.neutralDarker};
  text-decoration: none;

  :focus-visible {
    outline: 0;
    background: ${b.palette.neutralLighter};
  }
  :hover {
    color: ${b.palette.neutralDarker};
    text-decoration: none;
  }
`,q=S($)`
  background-color: ${b.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,G=S.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function K({onClick:e,className:r}){return f("div",{className:r,children:f("button",{type:"button",onClick:e,"aria-label":"close form",children:"Back"})})}const Z=S(K)`
  border-top: 0.1rem solid ${b.palette.pale};
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${b.palette.neutralBright};
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
    background-color: ${b.palette.white};
    border: 1px solid ${b.palette.pale};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`,J=(e,r)=>{const s=new Date(e),a=new Date(r);if(isNaN(s.getTime())||isNaN(a.getTime()))return"";try{const o={hour:"numeric",hour12:!0},i=new Intl.DateTimeFormat(void 0,o).format(s),t=new Intl.DateTimeFormat(void 0,{...o,timeZoneName:"short"}).format(a);return`${i} - ${t}`}catch(o){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",o),`${s.getHours()} - ${a.getHours()}`}},Q=({contactFormParams:e,chatEmbedParams:r,children:s})=>{const[a,o]=n.useState(),i=n.useMemo(()=>({...L,...r}),[r]),{chatEmbed:t,error:d}=z(i),p=n.useMemo(()=>{const c="https://openstax.org/embedded/contact",u=e.map(({key:l,value:m})=>encodeURIComponent(`${l}=${m}`)).map(l=>`body=${l}`).join("&");return`${c}?${u}`},[e]),w=n.useMemo(()=>(t==null?void 0:t.startTime)&&(t==null?void 0:t.endTime)?J(t.startTime,t.endTime):null,[t==null?void 0:t.startTime,t==null?void 0:t.endTime]);return n.useEffect(()=>{const c=({data:u})=>{u==="CONTACT_FORM_SUBMITTED"&&o(void 0)};return window.addEventListener("message",c,!1),()=>window.removeEventListener("message",c,!1)},[]),d&&console.error(d),E(B,{children:[E(Y,{label:"Help","aria-label":"Help menu",children:[t!==null&&d===null?E(y,{onAction:()=>t.openChat(),children:["Chat With Us (",w,")"]}):f(y,{onAction:()=>o(p),children:"Report an issue"}),s]}),a&&E(q,{children:[f(G,{title:"Contact form",src:a}),f(Z,{onClick:()=>o(void 0)})]})]})},V=I`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,pe=()=>E(C.Provider,{value:["nav","root"],children:[f(V,{}),f(N,{logo:!0,children:f(Q,{contactFormParams:[{key:"userId",value:"test"}],children:f(y,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{pe as Default};
