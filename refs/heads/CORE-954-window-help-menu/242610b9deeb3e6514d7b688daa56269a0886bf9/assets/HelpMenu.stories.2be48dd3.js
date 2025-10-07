import{R as i,s as I,j as v,F as $,a as d,W as M}from"./index.a3efb7d3.js";import{B as D,a as x}from"./BodyPortal.e05b5f3b.js";import{a as C,b as N,d as B}from"./NavBarMenuButtons.d3ae92a7.js";import{c as u}from"./theme.651ccb6e.js";import"./Dialog.module.ea5c5c1d.js";import"./Button.module.bb38a1eb.js";import"./useFocusRing.module.7877cdca.js";import"./context.module.efdc0192.js";import"./useButton.module.6b63b0df.js";import"./VisuallyHidden.module.3530e458.js";import"./OverlayArrow.module.7fa64f51.js";import"./Collection.module.d8127701.js";import"./useTreeState.module.0cd70f1d.js";import"./palette.15e4d008.js";const F=[["assignmentId","Assignment_Id"],["contextId","Context_Id"],["deploymentId","Deployment_Id"],["platformId","Platform_Id"],["registration","Registration_Id"],["organizationName","School"],["userEmail","Email"],["userFirstName","First_Name"],["userId","OpenStax_UUID"],["userLastName","Last_Name"]],_=o=>Object.fromEntries(F.map(([t,e])=>[e,o[t]]).filter(t=>typeof t[0]=="string"&&typeof t[1]=="string")),R=o=>{var g;const{userName:t,userFirstName:e,userLastName:r,userEmail:s,organizationName:n}=o,a=(g=t==null?void 0:t.split(" "))!=null?g:[],m=e!=null?e:a.slice(0,-1).join(" "),c=r!=null?r:a.slice(-1).join(""),p=l=>typeof l=="string"&&l.length>0,w=[["_firstName",m,!p(e)],["_lastName",c,!p(r)],["_email",s!=null?s:"",!p(s)],["School",n!=null?n:"",!0]];return Object.fromEntries(w.map(([l,f,h])=>[l,{value:f,isEditableByEndUser:h}]))},j=o=>{const t=Object.fromEntries(o.map(({key:e,value:r})=>[e,r]));return{visibleFields:R(t),hiddenFields:_(t)}},P=(o,t=5e3)=>{const e=i.useRef(),[r,s]=i.useState();return i.useEffect(()=>{let n;if(o!==void 0){const a=Date.now(),{businessHoursInfo:{businessHours:m}}=o;n=m.find(c=>c.startTime-t<=a&&a<c.endTime+t)}if(clearTimeout(e.current),n!==void 0){const a=Math.max(n.endTime-Date.now(),1e3);e.current=setTimeout(()=>{s(void 0)},a)}return s(a=>a!==void 0&&a.startTime===(n==null?void 0:n.startTime)&&a.endTime===(n==null?void 0:n.endTime)?a:n),()=>{clearTimeout(e.current)}},[o,t]),r},O=(o,t)=>{const e=new Date(o),r=new Date(t);if(isNaN(e.getTime())||isNaN(r.getTime()))return"";try{const s={hour:"numeric",hour12:!0},n=new Intl.DateTimeFormat(void 0,s).format(e),a=new Intl.DateTimeFormat(void 0,{...s,timeZoneName:"short"}).format(r);return`${n} - ${a}`}catch(s){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",s),`${e.getHours()} - ${r.getHours()}`}},A=(o,t)=>{const e=P(o,t);return i.useMemo(()=>e?O(e.startTime,e.endTime):void 0,[e])},L=(o,t)=>{const e=i.useRef(null),r=i.useMemo(()=>o?new URL(o).origin:void 0,[o]),s=i.useCallback(c=>{!e.current||!r||e.current.postMessage(c,r)},[r]),n=i.useCallback(()=>{s({type:"preChatFields",data:t})},[s,t]),a=i.useCallback(()=>{n(),s({type:"open"})},[s,n]),m=i.useCallback(()=>{if(e.current||!o)return;const c=500,p=800,w=(window.screenX||window.screenLeft)+window.outerWidth,l=(window.screenY||window.screenTop)+window.outerHeight-p,f=w-c,h=Object.entries({popup:!0,width:c,height:p,top:l,left:f}).map(([b,T])=>`${b}=${T}`).join(",");if(e.current=window.open(o,"_blank",h),!e.current)return;const y=b=>{const{source:T,data:{type:E}}=b;T===e.current&&E==="ready"&&a()},k=setInterval(()=>{var b;(b=e.current)!=null&&b.closed&&(window.removeEventListener("message",y,!1),e.current=null,clearInterval(k))},500);window.addEventListener("message",y,!1)},[o,a]);return i.useEffect(()=>{n()},[n]),o?{openChat:m}:{}},U=I(C)`
  color: ${u.palette.gray};
  font-size: 1.4rem;
`,H=I(N)`
  color: ${u.palette.neutralDarker};
  text-decoration: none;

  :focus-visible {
    outline: 0;
    background: ${u.palette.neutralLighter};
  }
  :hover {
    color: ${u.palette.neutralDarker};
    text-decoration: none;
  }
`,S=I(D)`
  background-color: ${u.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,W=I.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function z({onClick:o,className:t}){return d("div",{className:t,children:d("button",{type:"button",onClick:o,"aria-label":"close form",children:"Back"})})}const Y=I(z)`
  border-top: 0.1rem solid ${u.palette.pale};
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${u.palette.neutralBright};
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
    background-color: ${u.palette.white};
    border: 1px solid ${u.palette.pale};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`,V=({contactFormParams:o,chatConfig:t,children:e})=>{const[r,s]=i.useState(),{chatEmbedPath:n,businessHours:a,err:m}=i.useMemo(()=>t!=null?t:{},[t]),c=A(a),p=i.useMemo(()=>j(o),[o]),{openChat:w}=L(n,p),g=i.useMemo(()=>{const l="https://openstax.org/embedded/contact",f=o.map(({key:h,value:y})=>encodeURIComponent(`${h}=${y}`)).map(h=>`body=${h}`).join("&");return`${l}?${f}`},[o]);return i.useEffect(()=>{const l=({data:f})=>{f==="CONTACT_FORM_SUBMITTED"&&s(void 0)};return window.addEventListener("message",l,!1),()=>window.removeEventListener("message",l,!1)},[]),m&&console.error("Error getting business hours",m),v($,{children:[v(U,{label:"Help","aria-label":"Help menu",children:[c&&w?v(H,{onAction:()=>w(),children:["Chat With Us (",c,")"]}):d(H,{onAction:()=>s(g),children:"Report an issue"}),e]}),r&&v(S,{children:[d(W,{title:"Contact form",src:r}),d(Y,{onClick:()=>s(void 0)})]})]})},X=M`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,G={businessHoursInfo:{businessHours:[{startTime:Date.now()-6e4,endTime:Date.now()+144e4}]},timestamp:Date.now()},Z=[{key:"userId",value:"test"},{key:"userFirstName",value:"test"},{key:"organizationName",value:"org"}],q="https://localhost/assignable-chat",J={chatEmbedPath:q,businessHours:G},me=()=>v(x.Provider,{value:["nav","root"],children:[d(X,{}),d(B,{logo:!0,children:d(V,{contactFormParams:Z,chatConfig:J,children:d(H,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{me as Default};
