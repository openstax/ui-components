import{R as n,s as S,j as E,F as B,a as f,W as I}from"./index.d75e0607.js";import{B as $,a as C}from"./BodyPortal.ab862888.js";import{a as A,b as N,d as U}from"./NavBarMenuButtons.d9d84016.js";import{c as h}from"./theme.5fee477c.js";import"./Dialog.module.8a470a20.js";import"./Button.module.03418106.js";import"./useFocusRing.module.d4d86887.js";import"./context.module.25743320.js";import"./useButton.module.86f36f81.js";import"./VisuallyHidden.module.9894bbee.js";import"./OverlayArrow.module.e2b47b46.js";import"./Collection.module.22734059.js";import"./useTreeState.module.ca19a871.js";import"./palette.15e4d008.js";const D="00DU0000000Kwch",H="Web_Messaging_Deployment",_="ESWWebMessagingDeployme1716235390398",R=`https://openstax.my.site.com/${_}`,T="https://openstax.my.salesforce-scrt.com",M=`${R}/assets/js/bootstrap.min.js`,k=`${T}/embeddedservice/v1/businesshours?orgId=${D}&esConfigName=${H}`,F={orgId:D,app:H,deploymentURL:R,scrt2URL:T,scriptUrl:M,businessHoursURL:k},w={READY:"onEmbeddedMessagingReady",BUSINESS_HOURS_STARTED:"onEmbeddedMessagingBusinessHoursStarted",BUSINESS_HOURS_ENDED:"onEmbeddedMessagingBusinessHoursEnded"},L=e=>typeof e=="object"&&e!==null&&"startTime"in e&&typeof e.startTime=="number"&&"endTime"in e&&typeof e.endTime=="number",j=e=>Array.isArray(e)&&e.every(L),O=e=>typeof e=="object"&&e!==null&&"businessHoursInfo"in e&&typeof e.businessHoursInfo=="object"&&e.businessHoursInfo!==null&&"businessHours"in e.businessHoursInfo&&j(e.businessHoursInfo.businessHours),P=e=>{const[r,s]=n.useState(!1),[a,o]=n.useState(null),i=n.useRef(null);return n.useEffect(()=>{if(document.querySelector(`script[src="${e}"]`)){s(!0);return}const t=document.createElement("script");t.src=e,t.onload=()=>{s(!0),o(null)},t.onerror=()=>{o(new Error(`Failed to load ${e}`)),s(!1)},document.body.appendChild(t),i.current=t},[e]),{ready:r,error:a}},W=({businessHoursInfo:e})=>{const r=Date.now(),s=e.businessHours.find(({startTime:o,endTime:i})=>o<=r&&r<i);return s?{...s,openChat:async()=>{const o=window.embeddedservice_bootstrap;if(!!o)return await o.utilAPI.launchChat()}}:null},x=(e,r)=>{const[s,a]=n.useState(null),[o,i]=n.useState(null),t=n.useRef(!1),d=n.useRef(null),p=n.useRef(null),b=n.useCallback(async()=>{var m;(m=p.current)==null||m.abort();const c=new AbortController;p.current=c,t.current=!0,i(null);try{const g=await fetch(e,c);if(!g.ok)throw new Error(`HTTP ${g.status}`);const v=await g.json();O(v)?a(v):(i(new Error("Invalid business hours response")),a(null)),d.current=Date.now()}catch(g){if(g.name==="AbortError")return;i(g),a(null)}finally{t.current=!1}},[e]),l=n.useCallback(()=>{if(t.current)return;const c=Date.now(),m=d.current;m&&c-m<r||b()},[b,r]),u=n.useCallback(()=>{a(null)},[]);return n.useEffect(()=>{const c=()=>{l(),window.removeEventListener(w.READY,c)};return window.addEventListener(w.READY,c),window.addEventListener(w.BUSINESS_HOURS_STARTED,l),window.addEventListener(w.BUSINESS_HOURS_ENDED,u),()=>{var m;(m=p.current)==null||m.abort(),window.removeEventListener(w.READY,c),window.removeEventListener(w.BUSINESS_HOURS_STARTED,l),window.removeEventListener(w.BUSINESS_HOURS_ENDED,u)}},[l,u]),{hours:s,error:o}},z=({orgId:e,app:r,deploymentURL:s,scrt2URL:a,scriptUrl:o,businessHoursURL:i})=>{const{ready:t,error:d}=P(o),{hours:p,error:b}=x(i,5e3),l=n.useMemo(()=>p&&W(p),[p]);return n.useEffect(()=>{if(!t||typeof window>"u")return;const u=window.embeddedservice_bootstrap;try{u.settings.language="en_US",u.settings.hideChatButtonOnLoad=!0,u.init(e,r,s,{scrt2URL:a})}catch(c){console.error("Error initializing Embedded Messaging",c)}},[t,i,e,r,s,a]),{chatEmbed:l,error:d!=null?d:b}},Y=S(A)`
  color: ${h.palette.gray};
  font-size: 1.4rem;
`,y=S(N)`
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
`,q=S($)`
  background-color: ${h.palette.neutralBright};
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
`,J=(e,r)=>{const s=new Date(e),a=new Date(r);if(isNaN(s.getTime())||isNaN(a.getTime()))return"";try{const o={hour:"numeric",hour12:!0},i=new Intl.DateTimeFormat(void 0,o).format(s),t=new Intl.DateTimeFormat(void 0,{...o,timeZoneName:"short"}).format(a);return`${i} - ${t}`}catch(o){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",o),`${s.getHours()} - ${a.getHours()}`}},Q=({contactFormParams:e,chatEmbedParams:r,children:s})=>{const[a,o]=n.useState(),i=n.useMemo(()=>({...F,...r}),[r]),{chatEmbed:t,error:d}=z(i),p=n.useMemo(()=>{const l="https://openstax.org/embedded/contact",u=e.map(({key:c,value:m})=>encodeURIComponent(`${c}=${m}`)).map(c=>`body=${c}`).join("&");return`${l}?${u}`},[e]),b=n.useMemo(()=>(t==null?void 0:t.startTime)&&(t==null?void 0:t.endTime)?J(t.startTime,t.endTime):null,[t==null?void 0:t.startTime,t==null?void 0:t.endTime]);return n.useEffect(()=>{const l=({data:u})=>{u==="CONTACT_FORM_SUBMITTED"&&o(void 0)};return window.addEventListener("message",l,!1),()=>window.removeEventListener("message",l,!1)},[]),d&&console.error(d),E(B,{children:[E(Y,{label:"Help","aria-label":"Help menu",children:[t!==null&&d===null?E(y,{onAction:()=>t.openChat(),children:["Chat With Us (",b,")"]}):f(y,{onAction:()=>o(p),children:"Report an issue"}),s]}),a&&E(q,{children:[f(G,{title:"Contact form",src:a}),f(Z,{onClick:()=>o(void 0)})]})]})},V=I`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,pe=()=>E(C.Provider,{value:["nav","root"],children:[f(V,{}),f(U,{logo:!0,children:f(Q,{contactFormParams:[{key:"userId",value:"test"}],children:f(y,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{pe as Default};
