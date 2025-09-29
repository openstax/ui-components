import{R as o,s as y,j as g,F as A,a as h,W as N}from"./index.c72783d2.js";import{B as $,a as U}from"./BodyPortal.f63b3ff1.js";import{a as F,b as M,d as k}from"./NavBarMenuButtons.1cef58b2.js";import{c as w}from"./theme.09220cf1.js";import"./Dialog.module.2f635bc4.js";import"./Button.module.4666d548.js";import"./useFocusRing.module.fb6cdfe4.js";import"./context.module.5c49e7c5.js";import"./useButton.module.d31fa088.js";import"./VisuallyHidden.module.9a8bc6f6.js";import"./OverlayArrow.module.669eb4a2.js";import"./Collection.module.40d2f043.js";import"./useTreeState.module.c3bc06f3.js";import"./palette.15e4d008.js";const B="00DU0000000Kwch",_="Web_Messaging_Deployment",L="ESWWebMessagingDeployme1716235390398",T=`https://openstax.my.site.com/${L}`,C="https://openstax.my.salesforce-scrt.com",j=`${T}/assets/js/bootstrap.min.js`,O=`${C}/embeddedservice/v1/businesshours?orgId=${B}&esConfigName=${_}`,P={orgId:B,app:_,deploymentURL:T,scrt2URL:C,scriptUrl:j,businessHoursURL:O},b={READY:"onEmbeddedMessagingReady",BUSINESS_HOURS_STARTED:"onEmbeddedMessagingBusinessHoursStarted",BUSINESS_HOURS_ENDED:"onEmbeddedMessagingBusinessHoursEnded"},x=e=>typeof e=="object"&&e!==null&&"startTime"in e&&typeof e.startTime=="number"&&"endTime"in e&&typeof e.endTime=="number",W=e=>Array.isArray(e)&&e.every(x),Y=e=>typeof e=="object"&&e!==null&&"businessHoursInfo"in e&&typeof e.businessHoursInfo=="object"&&e.businessHoursInfo!==null&&"businessHours"in e.businessHoursInfo&&W(e.businessHoursInfo.businessHours),R=()=>window.embeddedservice_bootstrap,z=e=>{const[i,a]=o.useState(!1),[s,r]=o.useState(null);return o.useEffect(()=>{if(document.querySelector(`script[src="${e}"]`)){a(!0);return}const n=document.createElement("script");n.src=e,n.onload=()=>{a(!0),r(null)},n.onerror=()=>{r(new Error(`Failed to load ${e}`)),a(!1)},document.body.appendChild(n)},[e]),{ready:i,error:s}},q=({businessHoursInfo:e})=>{const i=Date.now(),a=5e3,s=e.businessHours.find(({startTime:n,endTime:t})=>n-a<=i&&i<t+a);return s?{...s,openChat:async()=>{const n=R();if(!!n)return await n.utilAPI.launchChat()}}:null},G=e=>{const{visibleFields:i,hiddenFields:a}=o.useMemo(()=>{var H;const n=[["assignmentId","Assignment_Id"],["contextId","Context_Id"],["deploymentId","Deployment_Id"],["platformId","Platform_Id"],["registration","Registration_Id"],["schoolName","School"],["userEmail","Email"],["userFirstName","First_Name"],["userId","OpenStax_UUID"],["userLastName","Last_Name"]],t=Object.fromEntries(e.map(({key:v,value:I})=>[v,I])),m=Object.fromEntries(n.map(([v,I])=>[I,t[v]]).filter(v=>v[1]!==void 0)),{userName:u,userFirstName:f,userLastName:d,userEmail:l}=t,c=(H=u==null?void 0:u.split(" "))!=null?H:[],p=f!=null?f:c.slice(0,-1).join(" "),E=d!=null?d:c.slice(-1).join("");return{visibleFields:{_firstName:{value:p,isEditableByEndUser:f===void 0},_lastName:{value:E,isEditableByEndUser:d===void 0},_email:{value:l!=null?l:"",isEditableByEndUser:l===void 0}},hiddenFields:m}},[e]),s=o.useRef(!1),r=o.useCallback(()=>{const n=R();s.current=!0,n&&(n.prechatAPI.setVisiblePrechatFields(i),n.prechatAPI.setHiddenPrechatFields(a))},[i,a]);o.useEffect(()=>(s.current&&r(),window.addEventListener(b.READY,r),()=>{window.removeEventListener(b.READY,r)}),[r])},K=(e,i)=>{const[a,s]=o.useState(null),[r,n]=o.useState(null),t=o.useRef(!1),m=o.useRef(null),u=o.useRef(null),f=o.useCallback(async()=>{var p;(p=u.current)==null||p.abort();const c=new AbortController;u.current=c,t.current=!0,n(null);try{const E=await fetch(e,c);if(!E.ok)throw new Error(`HTTP ${E.status}`);const S=await E.json();Y(S)?s(S):(n(new Error("Invalid business hours response")),s(null)),m.current=Date.now()}catch(E){if(E.name==="AbortError")return;n(E),s(null)}finally{t.current=!1}},[e]),d=o.useCallback(()=>{if(t.current)return;const c=Date.now(),p=m.current;p&&c-p<i||f()},[f,i]),l=o.useCallback(()=>{s(null)},[]);return o.useEffect(()=>{const c=()=>{d(),window.removeEventListener(b.READY,c)};return window.addEventListener(b.READY,c),window.addEventListener(b.BUSINESS_HOURS_STARTED,d),window.addEventListener(b.BUSINESS_HOURS_ENDED,l),()=>{var p;(p=u.current)==null||p.abort(),window.removeEventListener(b.READY,c),window.removeEventListener(b.BUSINESS_HOURS_STARTED,d),window.removeEventListener(b.BUSINESS_HOURS_ENDED,l)}},[d,l]),{hours:a,error:r}},V=({orgId:e,app:i,deploymentURL:a,scrt2URL:s,scriptUrl:r,businessHoursURL:n})=>{const{ready:t,error:m}=z(r),{hours:u,error:f}=K(n,5e3),d=o.useMemo(()=>u&&q(u),[u]);return o.useEffect(()=>{if(!(!t||typeof window>"u"))try{const l=R();if(!l)throw new Error("Embed service unavailable");l.settings.language="en_US",l.settings.hideChatButtonOnLoad=!0,l.init(e,i,a,{scrt2URL:s})}catch(l){console.error("Error initializing Embedded Messaging",l)}},[t,e,i,a,s]),{chatEmbed:d,error:m!=null?m:f}},Z=y(F)`
  color: ${w.palette.gray};
  font-size: 1.4rem;
`,D=y(M)`
  color: ${w.palette.neutralDarker};
  text-decoration: none;

  :focus-visible {
    outline: 0;
    background: ${w.palette.neutralLighter};
  }
  :hover {
    color: ${w.palette.neutralDarker};
    text-decoration: none;
  }
`,J=y($)`
  background-color: ${w.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,Q=y.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function X({onClick:e,className:i}){return h("div",{className:i,children:h("button",{type:"button",onClick:e,"aria-label":"close form",children:"Back"})})}const ee=y(X)`
  border-top: 0.1rem solid ${w.palette.pale};
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${w.palette.neutralBright};
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
    background-color: ${w.palette.white};
    border: 1px solid ${w.palette.pale};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`,te=(e,i)=>{const a=new Date(e),s=new Date(i);if(isNaN(a.getTime())||isNaN(s.getTime()))return"";try{const r={hour:"numeric",hour12:!0},n=new Intl.DateTimeFormat(void 0,r).format(a),t=new Intl.DateTimeFormat(void 0,{...r,timeZoneName:"short"}).format(s);return`${n} - ${t}`}catch(r){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",r),`${a.getHours()} - ${s.getHours()}`}},ne=({contactFormParams:e,chatEmbedParams:i,children:a})=>{const[s,r]=o.useState(),n=o.useMemo(()=>({...P,...i}),[i]),{chatEmbed:t,error:m}=V(n);G(e);const u=o.useMemo(()=>{const d="https://openstax.org/embedded/contact",l=e.map(({key:c,value:p})=>encodeURIComponent(`${c}=${p}`)).map(c=>`body=${c}`).join("&");return`${d}?${l}`},[e]),f=o.useMemo(()=>(t==null?void 0:t.startTime)&&(t==null?void 0:t.endTime)?te(t.startTime,t.endTime):null,[t==null?void 0:t.startTime,t==null?void 0:t.endTime]);return o.useEffect(()=>{const d=({data:l})=>{l==="CONTACT_FORM_SUBMITTED"&&r(void 0)};return window.addEventListener("message",d,!1),()=>window.removeEventListener("message",d,!1)},[]),m&&console.error(m),g(A,{children:[g(Z,{label:"Help","aria-label":"Help menu",children:[t!==null&&m===null?g(D,{onAction:()=>t.openChat(),children:["Chat With Us (",f,")"]}):h(D,{onAction:()=>r(u),children:"Report an issue"}),a]}),s&&g(J,{children:[h(Q,{title:"Contact form",src:s}),h(ee,{onClick:()=>r(void 0)})]})]})},oe=N`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,Ee=()=>g(U.Provider,{value:["nav","root"],children:[h(oe,{}),h(k,{logo:!0,children:h(ne,{contactFormParams:[{key:"userId",value:"test"},{key:"userFirstName",value:"test"}],children:h(D,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Ee as Default};
