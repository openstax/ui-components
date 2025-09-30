import{R as a,s as v,j as g,F as B,a as h,W as C}from"./index.275c3d05.js";import{B as A,a as N}from"./BodyPortal.13b9c965.js";import{a as $,b as U,d as F}from"./NavBarMenuButtons.97e9ffcf.js";import{c as w}from"./theme.f1eeab5d.js";import"./Dialog.module.e93a59ae.js";import"./Button.module.45864509.js";import"./useFocusRing.module.eef34ac4.js";import"./context.module.123aa522.js";import"./useButton.module.39b3eef1.js";import"./VisuallyHidden.module.431fe3cd.js";import"./OverlayArrow.module.06d04c30.js";import"./Collection.module.e10f2ec9.js";import"./useTreeState.module.dbf42e7b.js";import"./palette.15e4d008.js";const R="00DU0000000Kwch",D="Web_Messaging_Deployment",M="ESWWebMessagingDeployme1716235390398",T=`https://openstax.my.site.com/${M}`,_="https://openstax.my.salesforce-scrt.com",k=`${T}/assets/js/bootstrap.min.js`,L=`${_}/embeddedservice/v1/businesshours?orgId=${R}&esConfigName=${D}`,j={orgId:R,app:D,deploymentURL:T,scrt2URL:_,scriptUrl:k,businessHoursURL:L},b={READY:"onEmbeddedMessagingReady",BUSINESS_HOURS_STARTED:"onEmbeddedMessagingBusinessHoursStarted",BUSINESS_HOURS_ENDED:"onEmbeddedMessagingBusinessHoursEnded"},O=e=>typeof e=="object"&&e!==null&&"startTime"in e&&typeof e.startTime=="number"&&"endTime"in e&&typeof e.endTime=="number",P=e=>Array.isArray(e)&&e.every(O),x=e=>typeof e=="object"&&e!==null&&"businessHoursInfo"in e&&typeof e.businessHoursInfo=="object"&&e.businessHoursInfo!==null&&"businessHours"in e.businessHoursInfo&&P(e.businessHoursInfo.businessHours),W=(e,t)=>e===t||(e==null?void 0:e.businessHoursInfo.businessHours.map((n,s)=>[n,t.businessHoursInfo.businessHours[s]]).every(([n,s])=>n.startTime===s.startTime&&n.endTime===s.endTime))===!0,I=()=>window.embeddedservice_bootstrap,Y=e=>{const[t,n]=a.useState(!1),[s,i]=a.useState(null);return a.useEffect(()=>{if(document.querySelector(`script[src="${e}"]`)){n(!0);return}const r=document.createElement("script");r.src=e,r.onload=()=>{n(!0),i(null)},r.onerror=()=>{i(new Error(`Failed to load ${e}`)),n(!1)},document.body.appendChild(r)},[e]),{ready:t,error:s}},z=({businessHoursInfo:e},t=5e3)=>{const n=Date.now(),s=e.businessHours.find(({startTime:r,endTime:o})=>r-t<=n&&n<o+t);return s?{...s,openChat:async()=>{const r=I();if(!!r)return await r.utilAPI.launchChat()}}:null},V=[["assignmentId","Assignment_Id"],["contextId","Context_Id"],["deploymentId","Deployment_Id"],["platformId","Platform_Id"],["registration","Registration_Id"],["organizationName","School"],["userEmail","Email"],["userFirstName","First_Name"],["userId","OpenStax_UUID"],["userLastName","Last_Name"]],q=e=>Object.fromEntries(V.map(([t,n])=>[n,e[t]]).filter(t=>typeof t[0]=="string"&&typeof t[1]=="string")),G=e=>{var c;const{userName:t,userFirstName:n,userLastName:s,userEmail:i,organizationName:r}=e,o=(c=t==null?void 0:t.split(" "))!=null?c:[],d=n!=null?n:o.slice(0,-1).join(" "),p=s!=null?s:o.slice(-1).join(""),E=[["_firstName",d,n===void 0],["_lastName",p,s===void 0],["_email",i!=null?i:"",i===void 0],["School",r!=null?r:"",!0]];return Object.fromEntries(E.map(([l,u,m])=>[l,{value:u,isEditableByEndUser:m}]))},K=e=>{const{visibleFields:t,hiddenFields:n}=a.useMemo(()=>{const r=Object.fromEntries(e.map(({key:o,value:d})=>[o,d]));return{visibleFields:G(r),hiddenFields:q(r)}},[e]),s=a.useRef(!1),i=a.useCallback(()=>{const r=I();s.current=!0,r&&(r.prechatAPI.setVisiblePrechatFields(t),r.prechatAPI.setHiddenPrechatFields(n))},[t,n]);a.useEffect(()=>(s.current&&i(),window.addEventListener(b.READY,i),()=>{window.removeEventListener(b.READY,i)}),[i])},Z=(e,t)=>{const[n,s]=a.useState(null),[i,r]=a.useState(null),o=a.useRef(!1),d=a.useRef(null),p=a.useRef(null),E=a.useCallback(async()=>{var m;(m=p.current)==null||m.abort();const u=new AbortController;p.current=u,o.current=!0,r(null);try{const f=await fetch(e,u);if(!f.ok)throw new Error(`HTTP ${f.status}`);const y=await f.json();x(y)?s(H=>W(H,y)?H:y):(r(new Error("Invalid business hours response")),s(null)),d.current=Date.now()}catch(f){if(f.name==="AbortError")return;r(f),s(null)}finally{o.current=!1}},[e]),c=a.useCallback(()=>{if(o.current)return;const u=Date.now(),m=d.current;m&&u-m<t||E()},[E,t]),l=a.useCallback(()=>{s(null)},[]);return a.useEffect(()=>{const u=()=>{c(),window.removeEventListener(b.READY,u)},m=()=>{document.hidden||c()};return window.addEventListener(b.READY,u),window.addEventListener("visibilitychange",m),window.addEventListener(b.BUSINESS_HOURS_STARTED,c),window.addEventListener(b.BUSINESS_HOURS_ENDED,l),()=>{var f;(f=p.current)==null||f.abort(),window.removeEventListener(b.READY,u),window.removeEventListener("visibilitychange",m),window.removeEventListener(b.BUSINESS_HOURS_STARTED,c),window.removeEventListener(b.BUSINESS_HOURS_ENDED,l)}},[c,l]),{hours:n,error:i}},J=({orgId:e,app:t,deploymentURL:n,scrt2URL:s,scriptUrl:i,businessHoursURL:r})=>{const{ready:o,error:d}=Y(i),{hours:p,error:E}=Z(r,5e3),c=a.useMemo(()=>p&&z(p),[p]);return a.useEffect(()=>{if(!(!o||typeof window>"u"))try{const l=I();if(!l)throw new Error("Embed service unavailable");l.settings.language="en_US",l.settings.hideChatButtonOnLoad=!0,l.init(e,t,n,{scrt2URL:s})}catch(l){console.error("Error initializing Embedded Messaging",l)}},[o,e,t,n,s]),{chatEmbed:c,error:d!=null?d:E}},Q=v($)`
  color: ${w.palette.gray};
  font-size: 1.4rem;
`,S=v(U)`
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
`,X=v(A)`
  background-color: ${w.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,ee=v.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function te({onClick:e,className:t}){return h("div",{className:t,children:h("button",{type:"button",onClick:e,"aria-label":"close form",children:"Back"})})}const ne=v(te)`
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
`,se=(e,t)=>{const n=new Date(e),s=new Date(t);if(isNaN(n.getTime())||isNaN(s.getTime()))return"";try{const i={hour:"numeric",hour12:!0},r=new Intl.DateTimeFormat(void 0,i).format(n),o=new Intl.DateTimeFormat(void 0,{...i,timeZoneName:"short"}).format(s);return`${r} - ${o}`}catch(i){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",i),`${n.getHours()} - ${s.getHours()}`}},oe=({contactFormParams:e,chatEmbedParams:t,children:n})=>{const[s,i]=a.useState(),r=a.useMemo(()=>({...j,...t}),[t]),{chatEmbed:o,error:d}=J(r);K(e);const p=a.useMemo(()=>{const c="https://openstax.org/embedded/contact",l=e.map(({key:u,value:m})=>encodeURIComponent(`${u}=${m}`)).map(u=>`body=${u}`).join("&");return`${c}?${l}`},[e]),E=a.useMemo(()=>(o==null?void 0:o.startTime)&&(o==null?void 0:o.endTime)?se(o.startTime,o.endTime):null,[o==null?void 0:o.startTime,o==null?void 0:o.endTime]);return a.useEffect(()=>{const c=({data:l})=>{l==="CONTACT_FORM_SUBMITTED"&&i(void 0)};return window.addEventListener("message",c,!1),()=>window.removeEventListener("message",c,!1)},[]),d&&console.error(d),g(B,{children:[g(Q,{label:"Help","aria-label":"Help menu",children:[o!==null&&d===null?g(S,{onAction:()=>o.openChat(),children:["Chat With Us (",E,")"]}):h(S,{onAction:()=>i(p),children:"Report an issue"}),n]}),s&&g(X,{children:[h(ee,{title:"Contact form",src:s}),h(ne,{onClick:()=>i(void 0)})]})]})},re=C`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,ie=[{key:"userId",value:"test"},{key:"userFirstName",value:"test"},{key:"organizationName",value:"org"}],ye=()=>g(N.Provider,{value:["nav","root"],children:[h(re,{}),h(F,{logo:!0,children:h(oe,{contactFormParams:ie,children:h(S,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ye as Default};
