import{R as a,s as b,a as w,F as C,j as c,W as E}from"./index-eb83cddb.js";import{B as H,a as M}from"./BodyPortal-2afe93ea.js";import{N as x,a as D,b as k}from"./NavBar-7051df05.js";import{c as l}from"./theme-e8c258fa.js";import"./Dialog-fc4b2c9e.js";import"./Button-b4e93eb8.js";import"./useFocusRing-36033347.js";import"./context-e9c2fce8.js";import"./useButton-e22d0ffe.js";import"./VisuallyHidden-b9289708.js";import"./OverlayArrow-303da9e8.js";import"./Collection-96ab132a.js";import"./useTreeState-12c38387.js";import"./palette-f868513b.js";const $=(e,o)=>{if(!e)return;const t=Date.now(),{businessHoursInfo:{businessHours:n}}=e;return n.find(s=>s.startTime-o<=t&&t<s.endTime+o)},F=(e,o=5e3)=>{const t=a.useRef(),[n,s]=a.useState();return a.useEffect(()=>{const r=$(e,o);if(clearTimeout(t.current),r!==void 0){const i=Math.max(r.endTime-Date.now(),1e3);t.current=setTimeout(()=>{s(void 0)},i)}return s(i=>i!==void 0&&r!==void 0&&i.startTime===r.startTime&&i.endTime===r.endTime?i:r),()=>{clearTimeout(t.current)}},[e,o]),n},P=(e,o)=>{const t=new Date(e),n=new Date(o);if(isNaN(t.getTime())||isNaN(n.getTime()))return"";try{const s={hour:"numeric",hour12:!0},r=new Intl.DateTimeFormat(void 0,s).format(t),i=new Intl.DateTimeFormat(void 0,{...s,timeZoneName:"short"}).format(n);return`${r} - ${i}`}catch(s){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",s),`${t.getHours()} - ${n.getHours()}`}},B=(e,o)=>{const t=F(e,o);return a.useMemo(()=>t?P(t.startTime,t.endTime):void 0,[t])},_=[["assignmentId","Assignment_Id"],["contextId","Context_Id"],["deploymentId","Deployment_Id"],["platformId","Platform_Id"],["registration","Registration_Id"],["organizationName","School"],["userEmail","Email"],["userFirstName","First_Name"],["userId","OpenStax_UUID"],["userLastName","Last_Name"]],R=e=>Object.fromEntries(_.map(([o,t])=>[t,e[o]]).filter(o=>typeof o[0]=="string"&&typeof o[1]=="string")),y=e=>typeof e=="string"&&e.length>0,S=(e,o,t)=>{const n=(e==null?void 0:e.split(" "))??[],s=o??n.slice(0,-1).join(" "),r=t??n.slice(-1).join("");return[s,r]},O=e=>{const{userName:o,userFirstName:t,userLastName:n,userEmail:s,organizationName:r}=e,[i,u]=S(o,t,n),d=[["_firstName",i,!y(t)],["_lastName",u,!y(n)],["_email",s??"",!y(s)],["School",r??"",!0]];return Object.fromEntries(d.map(([m,p,f])=>[m,{value:p,isEditableByEndUser:f}]))},j=e=>{const o=Object.fromEntries(e.map(({key:t,value:n})=>[t,n]));return{visibleFields:O(o),hiddenFields:R(o)}},I={width:500,height:800},L=()=>{const e=(window.screenX||window.screenLeft)+window.outerWidth,t=(window.screenY||window.screenTop)+window.outerHeight-I.height,n=e-I.width;return{top:t,left:n}},A=()=>{const e=L(),o={popup:!0,width:I.width,height:I.height,...e};return Object.entries(o).map(([t,n])=>`${t}=${n}`).join(",")},U=(e,o)=>{const t=a.useMemo(()=>o?new URL(o).origin:void 0,[o]);return{sendMessage:a.useCallback(s=>{!e.current||!t||e.current.postMessage(s,t)},[e,t]),popupOrigin:t}},z=(e,o)=>{const t=a.useRef(null),{sendMessage:n}=U(t,e),s=a.useCallback(()=>{n({type:"preChatFields",data:o})},[n,o]),r=a.useCallback(()=>{s(),n({type:"open"})},[n,s]),i=a.useCallback(()=>{if(t.current||!e)return;const u=A();if(t.current=window.open(e,"_blank",u),!t.current)return;const d=t.current,m=f=>{const{source:h,data:{type:g}}=f;h===d&&g==="ready"&&r()},p=setInterval(()=>{d.closed&&(window.removeEventListener("message",m,!1),t.current=null,clearInterval(p))},500);window.addEventListener("message",m,!1)},[e,r]);return a.useEffect(()=>{s()},[s]),e?{openChat:i}:{}},W=b(x)`
  color: ${l.palette.gray};
  font-size: 1.4rem;
`,N=b(D)`
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
`,G=b(H)`
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
`;function V({onClick:e,className:o}){return c("div",{className:o,children:c("button",{type:"button",onClick:e,"aria-label":"close form",children:"Back"})})}const X=b(V)`
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
`,Z=({contactFormParams:e,chatConfig:o,children:t})=>{const[n,s]=a.useState(),{chatEmbedPath:r,businessHours:i,err:u}=a.useMemo(()=>o??{},[o]),d=B(i),m=a.useMemo(()=>j(e),[e]),{openChat:p}=z(r,m),f=a.useMemo(()=>{const h="https://openstax.org/embedded/contact",g=e.map(({key:v,value:T})=>encodeURIComponent(`${v}=${T}`)).map(v=>`body=${v}`).join("&");return`${h}?${g}`},[e]);return a.useEffect(()=>{const h=({data:g})=>{g==="CONTACT_FORM_SUBMITTED"&&s(void 0)};return window.addEventListener("message",h,!1),()=>window.removeEventListener("message",h,!1)},[]),u&&console.error("Error getting chat config",u),w(C,{children:[w(W,{label:"Help","aria-label":"Help menu",children:[d&&p?w(N,{onAction:()=>p(),children:["Chat With Us (",d,")"]}):c(N,{onAction:()=>s(f),children:"Report an issue"}),t]}),n&&w(G,{children:[c(Y,{title:"Contact form",src:n}),c(X,{onClick:()=>s(void 0)})]})]})},q=E`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,J={businessHoursInfo:{businessHours:[{startTime:Date.now()-6e4,endTime:Date.now()+144e4}]},timestamp:Date.now()},K=[{key:"userId",value:"test"},{key:"userFirstName",value:"test"},{key:"organizationName",value:"org"}],Q="https://localhost/assignable-chat",ee={chatEmbedPath:Q,businessHours:J},fe=()=>w(M.Provider,{value:["nav","root"],children:[c(q,{}),c(k,{logo:!0,children:c(Z,{contactFormParams:K,chatConfig:ee,children:c(N,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{fe as Default};
