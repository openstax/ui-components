import{R as a,s as b,j as g,F as E,a as c,W as M}from"./index.97ecd76e.js";import{B as x,a as D}from"./BodyPortal.bc7e89e4.js";import{a as k,b as C,d as $}from"./NavBarMenuButtons.91311647.js";import{c as l}from"./theme.77988faf.js";import"./Dialog.module.48c173de.js";import"./Button.module.28087eeb.js";import"./useFocusRing.module.e0fe8a29.js";import"./context.module.c932fb5c.js";import"./useButton.module.39ab81c2.js";import"./VisuallyHidden.module.bb06af6d.js";import"./OverlayArrow.module.2fa7a07c.js";import"./Collection.module.456bed97.js";import"./useTreeState.module.a7faae97.js";import"./palette.15e4d008.js";const P=(t,o)=>{if(!t)return;const e=Date.now(),{businessHoursInfo:{businessHours:n}}=t;return n.find(s=>s.startTime-o<=e&&e<s.endTime+o)},B=(t,o=5e3)=>{const e=a.useRef(),[n,s]=a.useState();return a.useEffect(()=>{const r=P(t,o);if(clearTimeout(e.current),r!==void 0){const i=Math.max(r.endTime-Date.now(),1e3);e.current=setTimeout(()=>{s(void 0)},i)}return s(i=>i!==void 0&&r!==void 0&&i.startTime===r.startTime&&i.endTime===r.endTime?i:r),()=>{clearTimeout(e.current)}},[t,o]),n},_=(t,o)=>{const e=new Date(t),n=new Date(o);if(isNaN(e.getTime())||isNaN(n.getTime()))return"";try{const s={hour:"numeric",hour12:!0},r=new Intl.DateTimeFormat(void 0,s).format(e),i=new Intl.DateTimeFormat(void 0,{...s,timeZoneName:"short"}).format(n);return`${r} - ${i}`}catch(s){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",s),`${e.getHours()} - ${n.getHours()}`}},N=(t,o)=>{const e=B(t,o);return a.useMemo(()=>e?_(e.startTime,e.endTime):void 0,[e])},F=[["assignmentId","Assignment_Id"],["contextId","Context_Id"],["deploymentId","Deployment_Id"],["platformId","Platform_Id"],["registration","Registration_Id"],["organizationName","School"],["userEmail","Email"],["userFirstName","First_Name"],["userId","OpenStax_UUID"],["userLastName","Last_Name"]],R=t=>Object.fromEntries(F.map(([o,e])=>[e,t[o]]).filter(o=>typeof o[0]=="string"&&typeof o[1]=="string")),y=t=>typeof t=="string"&&t.length>0,S=(t,o,e)=>{var i;const n=(i=t==null?void 0:t.split(" "))!=null?i:[],s=o!=null?o:n.slice(0,-1).join(" "),r=e!=null?e:n.slice(-1).join("");return[s,r]},O=t=>{const{userName:o,userFirstName:e,userLastName:n,userEmail:s,organizationName:r}=t,[i,u]=S(o,e,n),d=[["_firstName",i,!y(e)],["_lastName",u,!y(n)],["_email",s!=null?s:"",!y(s)],["School",r!=null?r:"",!0]];return Object.fromEntries(d.map(([m,p,f])=>[m,{value:p,isEditableByEndUser:f}]))},j=t=>{const o=Object.fromEntries(t.map(({key:e,value:n})=>[e,n]));return{visibleFields:O(o),hiddenFields:R(o)}},I={width:500,height:800},A=()=>{const t=(window.screenX||window.screenLeft)+window.outerWidth,e=(window.screenY||window.screenTop)+window.outerHeight-I.height,n=t-I.width;return{top:e,left:n}},U=()=>{const t=A(),o={popup:!0,width:I.width,height:I.height,...t};return Object.entries(o).map(([e,n])=>`${e}=${n}`).join(",")},L=(t,o)=>{const e=a.useMemo(()=>o?new URL(o).origin:void 0,[o]);return{sendMessage:a.useCallback(s=>{!t.current||!e||t.current.postMessage(s,e)},[t,e]),popupOrigin:e}},W=(t,o)=>{const e=a.useRef(null),{sendMessage:n}=L(e,t),s=a.useCallback(()=>{n({type:"preChatFields",data:o})},[n,o]),r=a.useCallback(()=>{s(),n({type:"open"})},[n,s]),i=a.useCallback(()=>{if(e.current||!t)return;const u=U();if(e.current=window.open(t,"_blank",u),!e.current)return;const d=e.current,m=f=>{const{source:h,data:{type:w}}=f;h===d&&w==="ready"&&r()},p=setInterval(()=>{d.closed&&(window.removeEventListener("message",m,!1),e.current=null,clearInterval(p))},500);window.addEventListener("message",m,!1)},[t,r]);return a.useEffect(()=>{s()},[s]),t?{openChat:i}:{}},z=b(k)`
  color: ${l.palette.gray};
  font-size: 1.4rem;
`,T=b(C)`
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
`,G=b(x)`
  background-color: ${l.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,Y=b.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function V({onClick:t,className:o}){return c("div",{className:o,children:c("button",{type:"button",onClick:t,"aria-label":"close form",children:"Back"})})}const X=b(V)`
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
`,Z=({contactFormParams:t,chatConfig:o,children:e})=>{const[n,s]=a.useState(),{chatEmbedPath:r,businessHours:i,err:u}=a.useMemo(()=>o!=null?o:{},[o]),d=N(i),m=a.useMemo(()=>j(t),[t]),{openChat:p}=W(r,m),f=a.useMemo(()=>{const h="https://openstax.org/embedded/contact",w=t.map(({key:v,value:H})=>encodeURIComponent(`${v}=${H}`)).map(v=>`body=${v}`).join("&");return`${h}?${w}`},[t]);return a.useEffect(()=>{const h=({data:w})=>{w==="CONTACT_FORM_SUBMITTED"&&s(void 0)};return window.addEventListener("message",h,!1),()=>window.removeEventListener("message",h,!1)},[]),u&&console.error("Error getting chat config",u),g(E,{children:[g(z,{label:"Help","aria-label":"Help menu",children:[d&&p?g(T,{onAction:()=>p(),children:["Chat With Us (",d,")"]}):c(T,{onAction:()=>s(f),children:"Report an issue"}),e]}),n&&g(G,{children:[c(Y,{title:"Contact form",src:n}),c(X,{onClick:()=>s(void 0)})]})]})},q=M`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,J={businessHoursInfo:{businessHours:[{startTime:Date.now()-6e4,endTime:Date.now()+144e4}]},timestamp:Date.now()},K=[{key:"userId",value:"test"},{key:"userFirstName",value:"test"},{key:"organizationName",value:"org"}],Q="https://localhost/assignable-chat",ee={chatEmbedPath:Q,businessHours:J},fe=()=>g(D.Provider,{value:["nav","root"],children:[c(q,{}),c($,{logo:!0,children:c(Z,{contactFormParams:K,chatConfig:ee,children:c(T,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{fe as Default};
