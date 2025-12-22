import{R as i,s as I,j as v,F as $,a as d,W as M}from"./index.85ae25d8.js";import{B as D,a as x}from"./BodyPortal.68600771.js";import{a as C,b as N,d as B}from"./NavBarMenuButtons.2eab6bf7.js";import{c as u}from"./theme.1c2c1863.js";import"./Dialog.module.7e1956e8.js";import"./Button.module.bc67202a.js";import"./useFocusRing.module.249111bf.js";import"./context.module.7a701e50.js";import"./useButton.module.45768283.js";import"./VisuallyHidden.module.4f8c6c7d.js";import"./OverlayArrow.module.4e7efcf6.js";import"./Collection.module.61f4df8f.js";import"./useTreeState.module.5078a42e.js";import"./palette.15e4d008.js";const F=[["assignmentId","Assignment_Id"],["contextId","Context_Id"],["deploymentId","Deployment_Id"],["platformId","Platform_Id"],["registration","Registration_Id"],["organizationName","School"],["userEmail","Email"],["userFirstName","First_Name"],["userId","OpenStax_UUID"],["userLastName","Last_Name"]],_=o=>Object.fromEntries(F.map(([t,e])=>[e,o[t]]).filter(t=>typeof t[0]=="string"&&typeof t[1]=="string")),R=o=>{var g;const{userName:t,userFirstName:e,userLastName:s,userEmail:r,organizationName:n}=o,a=(g=t==null?void 0:t.split(" "))!=null?g:[],m=e!=null?e:a.slice(0,-1).join(" "),c=s!=null?s:a.slice(-1).join(""),p=l=>typeof l=="string"&&l.length>0,w=[["_firstName",m,!p(e)],["_lastName",c,!p(s)],["_email",r!=null?r:"",!p(r)],["School",n!=null?n:"",!0]];return Object.fromEntries(w.map(([l,f,h])=>[l,{value:f,isEditableByEndUser:h}]))},j=o=>{const t=Object.fromEntries(o.map(({key:e,value:s})=>[e,s]));return{visibleFields:R(t),hiddenFields:_(t)}},P=(o,t=5e3)=>{const e=i.useRef(),[s,r]=i.useState();return i.useEffect(()=>{let n;if(o!==void 0){const a=Date.now(),{businessHoursInfo:{businessHours:m}}=o;n=m.find(c=>c.startTime-t<=a&&a<c.endTime+t)}if(clearTimeout(e.current),n!==void 0){const a=Math.max(n.endTime-Date.now(),1e3);e.current=setTimeout(()=>{r(void 0)},a)}return r(a=>a!==void 0&&a.startTime===(n==null?void 0:n.startTime)&&a.endTime===(n==null?void 0:n.endTime)?a:n),()=>{clearTimeout(e.current)}},[o,t]),s},O=(o,t)=>{const e=new Date(o),s=new Date(t);if(isNaN(e.getTime())||isNaN(s.getTime()))return"";try{const r={hour:"numeric",hour12:!0},n=new Intl.DateTimeFormat(void 0,r).format(e),a=new Intl.DateTimeFormat(void 0,{...r,timeZoneName:"short"}).format(s);return`${n} - ${a}`}catch(r){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",r),`${e.getHours()} - ${s.getHours()}`}},A=(o,t)=>{const e=P(o,t);return i.useMemo(()=>e?O(e.startTime,e.endTime):void 0,[e])},L=(o,t)=>{const e=i.useRef(null),s=i.useMemo(()=>o?new URL(o).origin:void 0,[o]),r=i.useCallback(c=>{!e.current||!s||e.current.postMessage(c,s)},[s]),n=i.useCallback(()=>{r({type:"preChatFields",data:t})},[r,t]),a=i.useCallback(()=>{n(),r({type:"open"})},[r,n]),m=i.useCallback(()=>{if(e.current||!o)return;const c=500,p=800,w=(window.screenX||window.screenLeft)+window.outerWidth,l=(window.screenY||window.screenTop)+window.outerHeight-p,f=w-c,h=Object.entries({popup:!0,width:c,height:p,top:l,left:f}).map(([b,T])=>`${b}=${T}`).join(",");if(e.current=window.open(o,"_blank",h),!e.current)return;const y=b=>{const{source:T,data:{type:E}}=b;T===e.current&&E==="ready"&&a()},k=setInterval(()=>{var b;(b=e.current)!=null&&b.closed&&(window.removeEventListener("message",y,!1),e.current=null,clearInterval(k))},500);window.addEventListener("message",y,!1)},[o,a]);return i.useEffect(()=>{n()},[n]),o?{openChat:m}:{}},U=I(C)`
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
`,V=({contactFormParams:o,chatConfig:t,children:e})=>{const[s,r]=i.useState(),{chatEmbedPath:n,businessHours:a,err:m}=i.useMemo(()=>t!=null?t:{},[t]),c=A(a),p=i.useMemo(()=>j(o),[o]),{openChat:w}=L(n,p),g=i.useMemo(()=>{const l="https://openstax.org/embedded/contact",f=o.map(({key:h,value:y})=>encodeURIComponent(`${h}=${y}`)).map(h=>`body=${h}`).join("&");return`${l}?${f}`},[o]);return i.useEffect(()=>{const l=({data:f})=>{f==="CONTACT_FORM_SUBMITTED"&&r(void 0)};return window.addEventListener("message",l,!1),()=>window.removeEventListener("message",l,!1)},[]),m&&console.error("Error getting chat config",m),v($,{children:[v(U,{label:"Help","aria-label":"Help menu",children:[c&&w?v(H,{onAction:()=>w(),children:["Chat With Us (",c,")"]}):d(H,{onAction:()=>r(g),children:"Report an issue"}),e]}),s&&v(S,{children:[d(W,{title:"Contact form",src:s}),d(Y,{onClick:()=>r(void 0)})]})]})},X=M`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,G={businessHoursInfo:{businessHours:[{startTime:Date.now()-6e4,endTime:Date.now()+144e4}]},timestamp:Date.now()},Z=[{key:"userId",value:"test"},{key:"userFirstName",value:"test"},{key:"organizationName",value:"org"}],q="https://localhost/assignable-chat",J={chatEmbedPath:q,businessHours:G},me=()=>v(x.Provider,{value:["nav","root"],children:[d(X,{}),d(B,{logo:!0,children:d(V,{contactFormParams:Z,chatConfig:J,children:d(H,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{me as Default};
