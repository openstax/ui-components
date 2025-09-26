import{R as n,s as v,j as g,F as B,a as f,W as C}from"./index.1d4fd22b.js";import{B as $,a as A}from"./BodyPortal.8fb3ac00.js";import{a as U,b as M,d as N}from"./NavBarMenuButtons.bf2b3e5a.js";import{c as h}from"./theme.f2f944c8.js";import"./Dialog.module.0e2b3e04.js";import"./Button.module.96ab0b3b.js";import"./useFocusRing.module.65829788.js";import"./context.module.6adf29b8.js";import"./useButton.module.6442461d.js";import"./VisuallyHidden.module.34b5cc5e.js";import"./OverlayArrow.module.8bf8c2fa.js";import"./Collection.module.462be43a.js";import"./useTreeState.module.5c658aaa.js";import"./palette.15e4d008.js";const D="00DU0000000Kwch",R="Web_Messaging_Deployment",_="ESWWebMessagingDeployme1716235390398",I=`https://openstax.my.site.com/${_}`,T="https://openstax.my.salesforce-scrt.com",k=`${I}/assets/js/bootstrap.min.js`,L=`${T}/embeddedservice/v1/businesshours?orgId=${D}&esConfigName=${R}`,F={orgId:D,app:R,deploymentURL:I,scrt2URL:T,scriptUrl:k,businessHoursURL:L},p={READY:"onEmbeddedMessagingReady",BUSINESS_HOURS_STARTED:"onEmbeddedMessagingBusinessHoursStarted",BUSINESS_HOURS_ENDED:"onEmbeddedMessagingBusinessHoursEnded"},j=e=>typeof e=="object"&&e!==null&&"startTime"in e&&typeof e.startTime=="number"&&"endTime"in e&&typeof e.endTime=="number",O=e=>Array.isArray(e)&&e.every(j),P=e=>typeof e=="object"&&e!==null&&"businessHoursInfo"in e&&typeof e.businessHoursInfo=="object"&&e.businessHoursInfo!==null&&"businessHours"in e.businessHoursInfo&&O(e.businessHoursInfo.businessHours),y=()=>window.embeddedservice_bootstrap,W=e=>{const[o,r]=n.useState(!1),[a,s]=n.useState(null);return n.useEffect(()=>{if(document.querySelector(`script[src="${e}"]`)){r(!0);return}const c=document.createElement("script");c.src=e,c.onload=()=>{r(!0),s(null)},c.onerror=()=>{s(new Error(`Failed to load ${e}`)),r(!1)},document.body.appendChild(c)},[e]),{ready:o,error:a}},x=({businessHoursInfo:e})=>{const o=Date.now(),r=e.businessHours.find(({startTime:s,endTime:c})=>s<=o&&o<c);return r?{...r,openChat:async()=>{const s=y();if(!!s)return await s.utilAPI.launchChat()}}:null},Y=e=>{const o=n.useCallback(()=>{const r=y();!r||r.prechatAPI.setHiddenPrechatFields(e)},[e]);n.useEffect(()=>(window.addEventListener(p.READY,o),()=>{window.removeEventListener(p.READY,o)}),[o])},z=(e,o)=>{const[r,a]=n.useState(null),[s,c]=n.useState(null),t=n.useRef(!1),d=n.useRef(null),m=n.useRef(null),E=n.useCallback(async()=>{var u;(u=m.current)==null||u.abort();const l=new AbortController;m.current=l,t.current=!0,c(null);try{const b=await fetch(e,l);if(!b.ok)throw new Error(`HTTP ${b.status}`);const H=await b.json();P(H)?a(H):(c(new Error("Invalid business hours response")),a(null)),d.current=Date.now()}catch(b){if(b.name==="AbortError")return;c(b),a(null)}finally{t.current=!1}},[e]),w=n.useCallback(()=>{if(t.current)return;const l=Date.now(),u=d.current;u&&l-u<o||E()},[E,o]),i=n.useCallback(()=>{a(null)},[]);return n.useEffect(()=>{const l=()=>{w(),window.removeEventListener(p.READY,l)};return window.addEventListener(p.READY,l),window.addEventListener(p.BUSINESS_HOURS_STARTED,w),window.addEventListener(p.BUSINESS_HOURS_ENDED,i),()=>{var u;(u=m.current)==null||u.abort(),window.removeEventListener(p.READY,l),window.removeEventListener(p.BUSINESS_HOURS_STARTED,w),window.removeEventListener(p.BUSINESS_HOURS_ENDED,i)}},[w,i]),{hours:r,error:s}},q=({orgId:e,app:o,deploymentURL:r,scrt2URL:a,scriptUrl:s,businessHoursURL:c})=>{const{ready:t,error:d}=W(s),{hours:m,error:E}=z(c,5e3),w=n.useMemo(()=>m&&x(m),[m]);return n.useEffect(()=>{if(!(!t||typeof window>"u"))try{const i=y();if(!i)throw new Error("Embed service unavailable");i.settings.language="en_US",i.settings.hideChatButtonOnLoad=!0,i.init(e,o,r,{scrt2URL:a})}catch(i){console.error("Error initializing Embedded Messaging",i)}},[t,e,o,r,a]),{chatEmbed:w,error:d!=null?d:E}},G=v(U)`
  color: ${h.palette.gray};
  font-size: 1.4rem;
`,S=v(M)`
  color: ${h.palette.neutralDarker};
  text-decoration: none;

  :focus-visible {
    outline: 0;
    background: ${h.palette.neutralLighter};
  }
  :hover {
    color: ${h.palette.neutralDarker};
    text-decoration: none;
  }
`,K=v($)`
  background-color: ${h.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,Z=v.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function J({onClick:e,className:o}){return f("div",{className:o,children:f("button",{type:"button",onClick:e,"aria-label":"close form",children:"Back"})})}const Q=v(J)`
  border-top: 0.1rem solid ${h.palette.pale};
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${h.palette.neutralBright};
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
    background-color: ${h.palette.white};
    border: 1px solid ${h.palette.pale};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`,V=(e,o)=>{const r=new Date(e),a=new Date(o);if(isNaN(r.getTime())||isNaN(a.getTime()))return"";try{const s={hour:"numeric",hour12:!0},c=new Intl.DateTimeFormat(void 0,s).format(r),t=new Intl.DateTimeFormat(void 0,{...s,timeZoneName:"short"}).format(a);return`${c} - ${t}`}catch(s){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",s),`${r.getHours()} - ${a.getHours()}`}},X=({contactFormParams:e,chatEmbedParams:o,children:r})=>{const[a,s]=n.useState(),c=n.useMemo(()=>({...F,...o}),[o]),{chatEmbed:t,error:d}=q(c),m=n.useMemo(()=>Object.fromEntries(e.map(({key:i,value:l})=>[i,l])),[e]);Y(m);const E=n.useMemo(()=>{const i="https://openstax.org/embedded/contact",l=e.map(({key:u,value:b})=>encodeURIComponent(`${u}=${b}`)).map(u=>`body=${u}`).join("&");return`${i}?${l}`},[e]),w=n.useMemo(()=>(t==null?void 0:t.startTime)&&(t==null?void 0:t.endTime)?V(t.startTime,t.endTime):null,[t==null?void 0:t.startTime,t==null?void 0:t.endTime]);return n.useEffect(()=>{const i=({data:l})=>{l==="CONTACT_FORM_SUBMITTED"&&s(void 0)};return window.addEventListener("message",i,!1),()=>window.removeEventListener("message",i,!1)},[]),d&&console.error(d),g(B,{children:[g(G,{label:"Help","aria-label":"Help menu",children:[t!==null&&d===null?g(S,{onAction:()=>t.openChat(),children:["Chat With Us (",w,")"]}):f(S,{onAction:()=>s(E),children:"Report an issue"}),r]}),a&&g(K,{children:[f(Z,{title:"Contact form",src:a}),f(Q,{onClick:()=>s(void 0)})]})]})},ee=C`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,he=()=>g(A.Provider,{value:["nav","root"],children:[f(ee,{}),f(N,{logo:!0,children:f(X,{contactFormParams:[{key:"userId",value:"test"}],children:f(S,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{he as Default};
