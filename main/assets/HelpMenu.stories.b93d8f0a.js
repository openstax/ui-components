import{R as a,s as g,j as w,F as E,a as l,W as M}from"./index.6f835c86.js";import{B as x,a as D}from"./BodyPortal.e210ec4b.js";import{a as k,b as C,d as $}from"./NavBarMenuButtons.877e25e6.js";import{c as d}from"./theme.70751264.js";import"./Dialog.module.f81f10ae.js";import"./Button.module.d5960e02.js";import"./useFocusRing.module.96ff117b.js";import"./context.module.c1f58a16.js";import"./useButton.module.0a488349.js";import"./VisuallyHidden.module.44e38d43.js";import"./OverlayArrow.module.a51e2a16.js";import"./Collection.module.fa499ba0.js";import"./useTreeState.module.ad1577f1.js";import"./palette.5e342580.js";const P=(t,o)=>{if(!t)return;const e=Date.now(),{businessHoursInfo:{businessHours:n}}=t;return n.find(s=>s.startTime-o<=e&&e<s.endTime+o)},B=(t,o=5e3)=>{const e=a.useRef(),[n,s]=a.useState();return a.useEffect(()=>{const r=P(t,o);if(clearTimeout(e.current),r!==void 0){const i=Math.max(r.endTime-Date.now(),1e3);e.current=setTimeout(()=>{s(void 0)},i)}return s(i=>i!==void 0&&r!==void 0&&i.startTime===r.startTime&&i.endTime===r.endTime?i:r),()=>{clearTimeout(e.current)}},[t,o]),n},_=(t,o)=>{const e=new Date(t),n=new Date(o);if(isNaN(e.getTime())||isNaN(n.getTime()))return"";try{const s={hour:"numeric",hour12:!0},r=new Intl.DateTimeFormat(void 0,s).format(e),i=new Intl.DateTimeFormat(void 0,{...s,timeZoneName:"short"}).format(n);return`${r} - ${i}`}catch(s){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",s),`${e.getHours()} - ${n.getHours()}`}},N=(t,o)=>{const e=B(t,o);return a.useMemo(()=>e?_(e.startTime,e.endTime):void 0,[e])},F=[["assignmentId","Assignment_Id"],["contextId","Context_Id"],["deploymentId","Deployment_Id"],["platformId","Platform_Id"],["registration","Registration_Id"],["organizationName","School"],["userEmail","Email"],["userFirstName","First_Name"],["userId","OpenStax_UUID"],["userLastName","Last_Name"]],R=t=>Object.fromEntries(F.map(([o,e])=>[e,t[o]]).filter(o=>typeof o[0]=="string"&&typeof o[1]=="string")),y=t=>typeof t=="string"&&t.length>0,S=(t,o,e)=>{var i;const n=(i=t==null?void 0:t.split(" "))!=null?i:[],s=o!=null?o:n.slice(0,-1).join(" "),r=e!=null?e:n.slice(-1).join("");return[s,r]},O=t=>{const{userName:o,userFirstName:e,userLastName:n,userEmail:s,organizationName:r}=t,[i,m]=S(o,e,n),u=[["_firstName",i,!y(e)],["_lastName",m,!y(n)],["_email",s!=null?s:"",!y(s)],["School",r!=null?r:"",!0]];return Object.fromEntries(u.map(([h,c,f])=>[h,{value:c,isEditableByEndUser:f}]))},j=t=>{const o=Object.fromEntries(t.map(({key:e,value:n})=>[e,n]));return{visibleFields:O(o),hiddenFields:R(o)}},b={width:500,height:800},A=()=>{const t=(window.screenX||window.screenLeft)+window.outerWidth,e=(window.screenY||window.screenTop)+window.outerHeight-b.height,n=t-b.width;return{top:e,left:n}},U=()=>{const t=A(),o={popup:!0,width:b.width,height:b.height,...t};return Object.entries(o).map(([e,n])=>`${e}=${n}`).join(",")},L=(t,o)=>{const e=a.useMemo(()=>o?new URL(o).origin:void 0,[o]);return{sendMessage:a.useCallback(s=>{!t.current||!e||t.current.postMessage(s,e)},[t,e]),popupOrigin:e}},W=(t,o)=>{const e=a.useRef(null),{sendMessage:n}=L(e,t),s=a.useCallback(()=>{n({type:"preChatFields",data:o})},[n,o]),r=a.useCallback(()=>{s(),n({type:"open"})},[n,s]),i=a.useCallback(()=>{if(e.current||!t)return;const m=U();if(e.current=window.open(t,"_blank",m),!e.current)return;const u=c=>{const{source:f,data:{type:p}}=c;f===e.current&&p==="ready"&&r()},h=setInterval(()=>{var c;(c=e.current)!=null&&c.closed&&(window.removeEventListener("message",u,!1),e.current=null,clearInterval(h))},500);window.addEventListener("message",u,!1)},[t,r]);return a.useEffect(()=>{s()},[s]),t?{openChat:i}:{}},z=g(k)`
  color: ${d.palette.gray};
  font-size: 1.4rem;
`,T=g(C)`
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
`,G=g(x)`
  background-color: ${d.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,Y=g.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function V({onClick:t,className:o}){return l("div",{className:o,children:l("button",{type:"button",onClick:t,"aria-label":"close form",children:"Back"})})}const X=g(V)`
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
`,Z=({contactFormParams:t,chatConfig:o,children:e})=>{const[n,s]=a.useState(),{chatEmbedPath:r,businessHours:i,err:m}=a.useMemo(()=>o!=null?o:{},[o]),u=N(i),h=a.useMemo(()=>j(t),[t]),{openChat:c}=W(r,h),f=a.useMemo(()=>{const p="https://openstax.org/embedded/contact",I=t.map(({key:v,value:H})=>encodeURIComponent(`${v}=${H}`)).map(v=>`body=${v}`).join("&");return`${p}?${I}`},[t]);return a.useEffect(()=>{const p=({data:I})=>{I==="CONTACT_FORM_SUBMITTED"&&s(void 0)};return window.addEventListener("message",p,!1),()=>window.removeEventListener("message",p,!1)},[]),m&&console.error("Error getting chat config",m),w(E,{children:[w(z,{label:"Help","aria-label":"Help menu",children:[u&&c?w(T,{onAction:()=>c(),children:["Chat With Us (",u,")"]}):l(T,{onAction:()=>s(f),children:"Report an issue"}),e]}),n&&w(G,{children:[l(Y,{title:"Contact form",src:n}),l(X,{onClick:()=>s(void 0)})]})]})},q=M`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,J={businessHoursInfo:{businessHours:[{startTime:Date.now()-6e4,endTime:Date.now()+144e4}]},timestamp:Date.now()},K=[{key:"userId",value:"test"},{key:"userFirstName",value:"test"},{key:"organizationName",value:"org"}],Q="https://localhost/assignable-chat",ee={chatEmbedPath:Q,businessHours:J},fe=()=>w(D.Provider,{value:["nav","root"],children:[l(q,{}),l($,{logo:!0,children:l(Z,{contactFormParams:K,chatConfig:ee,children:l(T,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{fe as Default};
