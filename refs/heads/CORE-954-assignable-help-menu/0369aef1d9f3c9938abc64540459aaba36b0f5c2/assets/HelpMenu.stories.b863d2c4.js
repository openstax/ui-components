import{R as n,s as v,j as g,F as B,a as f,W as C}from"./index.5be0f26b.js";import{B as $,a as A}from"./BodyPortal.0ad351a8.js";import{a as U,b as M,d as N}from"./NavBarMenuButtons.056ee0fc.js";import{c as h}from"./theme.88e7dbb5.js";import"./Dialog.module.0afa04a0.js";import"./Button.module.4dde147c.js";import"./useFocusRing.module.6d335bc9.js";import"./context.module.39f6032a.js";import"./useButton.module.1f070060.js";import"./VisuallyHidden.module.124ef6c1.js";import"./OverlayArrow.module.d4850431.js";import"./Collection.module.15a18290.js";import"./useTreeState.module.7435a196.js";import"./palette.15e4d008.js";const R="00DU0000000Kwch",D="Web_Messaging_Deployment",_="ESWWebMessagingDeployme1716235390398",I=`https://openstax.my.site.com/${_}`,T="https://openstax.my.salesforce-scrt.com",k=`${I}/assets/js/bootstrap.min.js`,L=`${T}/embeddedservice/v1/businesshours?orgId=${R}&esConfigName=${D}`,F={orgId:R,app:D,deploymentURL:I,scrt2URL:T,scriptUrl:k,businessHoursURL:L},p={READY:"onEmbeddedMessagingReady",BUSINESS_HOURS_STARTED:"onEmbeddedMessagingBusinessHoursStarted",BUSINESS_HOURS_ENDED:"onEmbeddedMessagingBusinessHoursEnded"},j=e=>typeof e=="object"&&e!==null&&"startTime"in e&&typeof e.startTime=="number"&&"endTime"in e&&typeof e.endTime=="number",O=e=>Array.isArray(e)&&e.every(j),P=e=>typeof e=="object"&&e!==null&&"businessHoursInfo"in e&&typeof e.businessHoursInfo=="object"&&e.businessHoursInfo!==null&&"businessHours"in e.businessHoursInfo&&O(e.businessHoursInfo.businessHours),S=()=>window.embeddedservice_bootstrap,W=e=>{const[r,o]=n.useState(!1),[s,a]=n.useState(null);return n.useEffect(()=>{if(document.querySelector(`script[src="${e}"]`)){o(!0);return}const c=document.createElement("script");c.src=e,c.onload=()=>{o(!0),a(null)},c.onerror=()=>{a(new Error(`Failed to load ${e}`)),o(!1)},document.body.appendChild(c)},[e]),{ready:r,error:s}},x=({businessHoursInfo:e})=>{const r=Date.now(),o=e.businessHours.find(({startTime:a,endTime:c})=>a<=r&&r<c);return o?{...o,openChat:async()=>{const a=S();if(!!a)return await a.utilAPI.launchChat()}}:null},Y=e=>{const r=n.useRef(!1),o=n.useCallback(()=>{const s=S();r.current=!0,s&&s.prechatAPI.setHiddenPrechatFields(e)},[e]);n.useEffect(()=>(r.current&&o(),window.addEventListener(p.READY,o),()=>{window.removeEventListener(p.READY,o)}),[o])},z=(e,r)=>{const[o,s]=n.useState(null),[a,c]=n.useState(null),t=n.useRef(!1),d=n.useRef(null),m=n.useRef(null),E=n.useCallback(async()=>{var u;(u=m.current)==null||u.abort();const l=new AbortController;m.current=l,t.current=!0,c(null);try{const b=await fetch(e,l);if(!b.ok)throw new Error(`HTTP ${b.status}`);const H=await b.json();P(H)?s(H):(c(new Error("Invalid business hours response")),s(null)),d.current=Date.now()}catch(b){if(b.name==="AbortError")return;c(b),s(null)}finally{t.current=!1}},[e]),w=n.useCallback(()=>{if(t.current)return;const l=Date.now(),u=d.current;u&&l-u<r||E()},[E,r]),i=n.useCallback(()=>{s(null)},[]);return n.useEffect(()=>{const l=()=>{w(),window.removeEventListener(p.READY,l)};return window.addEventListener(p.READY,l),window.addEventListener(p.BUSINESS_HOURS_STARTED,w),window.addEventListener(p.BUSINESS_HOURS_ENDED,i),()=>{var u;(u=m.current)==null||u.abort(),window.removeEventListener(p.READY,l),window.removeEventListener(p.BUSINESS_HOURS_STARTED,w),window.removeEventListener(p.BUSINESS_HOURS_ENDED,i)}},[w,i]),{hours:o,error:a}},q=({orgId:e,app:r,deploymentURL:o,scrt2URL:s,scriptUrl:a,businessHoursURL:c})=>{const{ready:t,error:d}=W(a),{hours:m,error:E}=z(c,5e3),w=n.useMemo(()=>m&&x(m),[m]);return n.useEffect(()=>{if(!(!t||typeof window>"u"))try{const i=S();if(!i)throw new Error("Embed service unavailable");i.settings.language="en_US",i.settings.hideChatButtonOnLoad=!0,i.init(e,r,o,{scrt2URL:s})}catch(i){console.error("Error initializing Embedded Messaging",i)}},[t,e,r,o,s]),{chatEmbed:w,error:d!=null?d:E}},G=v(U)`
  color: ${h.palette.gray};
  font-size: 1.4rem;
`,y=v(M)`
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
`;function J({onClick:e,className:r}){return f("div",{className:r,children:f("button",{type:"button",onClick:e,"aria-label":"close form",children:"Back"})})}const Q=v(J)`
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
`,V=(e,r)=>{const o=new Date(e),s=new Date(r);if(isNaN(o.getTime())||isNaN(s.getTime()))return"";try{const a={hour:"numeric",hour12:!0},c=new Intl.DateTimeFormat(void 0,a).format(o),t=new Intl.DateTimeFormat(void 0,{...a,timeZoneName:"short"}).format(s);return`${c} - ${t}`}catch(a){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",a),`${o.getHours()} - ${s.getHours()}`}},X=({contactFormParams:e,chatEmbedParams:r,children:o})=>{const[s,a]=n.useState(),c=n.useMemo(()=>({...F,...r}),[r]),{chatEmbed:t,error:d}=q(c),m=n.useMemo(()=>Object.fromEntries(e.map(({key:i,value:l})=>[i,l])),[e]);Y(m);const E=n.useMemo(()=>{const i="https://openstax.org/embedded/contact",l=e.map(({key:u,value:b})=>encodeURIComponent(`${u}=${b}`)).map(u=>`body=${u}`).join("&");return`${i}?${l}`},[e]),w=n.useMemo(()=>(t==null?void 0:t.startTime)&&(t==null?void 0:t.endTime)?V(t.startTime,t.endTime):null,[t==null?void 0:t.startTime,t==null?void 0:t.endTime]);return n.useEffect(()=>{const i=({data:l})=>{l==="CONTACT_FORM_SUBMITTED"&&a(void 0)};return window.addEventListener("message",i,!1),()=>window.removeEventListener("message",i,!1)},[]),d&&console.error(d),g(B,{children:[g(G,{label:"Help","aria-label":"Help menu",children:[t!==null&&d===null?g(y,{onAction:()=>t.openChat(),children:["Chat With Us (",w,")"]}):f(y,{onAction:()=>a(E),children:"Report an issue"}),o]}),s&&g(K,{children:[f(Z,{title:"Contact form",src:s}),f(Q,{onClick:()=>a(void 0)})]})]})},ee=C`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,he=()=>g(A.Provider,{value:["nav","root"],children:[f(ee,{}),f(N,{logo:!0,children:f(X,{contactFormParams:[{key:"userId",value:"test"}],children:f(y,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{he as Default};
