import{R as a,s as v,j as b,F as $,a as m,W as M}from"./index.f87a91fe.js";import{B as D,a as N}from"./BodyPortal.b505bcc1.js";import{a as B,b as E,d as F}from"./NavBarMenuButtons.3be22641.js";import{c as p}from"./theme.8e2e2444.js";import"./Dialog.module.c0126e4b.js";import"./Button.module.463f6375.js";import"./useFocusRing.module.b8376a91.js";import"./context.module.c597e578.js";import"./useButton.module.43f19e26.js";import"./VisuallyHidden.module.74c7b07d.js";import"./OverlayArrow.module.cfc1c070.js";import"./Collection.module.590d4e54.js";import"./useTreeState.module.9c56d9c4.js";import"./palette.15e4d008.js";const _=[["assignmentId","Assignment_Id"],["contextId","Context_Id"],["deploymentId","Deployment_Id"],["platformId","Platform_Id"],["registration","Registration_Id"],["organizationName","School"],["userEmail","Email"],["userFirstName","First_Name"],["userId","OpenStax_UUID"],["userLastName","Last_Name"]],x=e=>Object.fromEntries(_.map(([n,t])=>[t,e[n]]).filter(n=>typeof n[0]=="string"&&typeof n[1]=="string")),j=e=>{var u;const{userName:n,userFirstName:t,userLastName:s,userEmail:r,organizationName:o}=e,i=(u=n==null?void 0:n.split(" "))!=null?u:[],l=t!=null?t:i.slice(0,-1).join(" "),c=s!=null?s:i.slice(-1).join(""),d=[["_firstName",l,t===void 0],["_lastName",c,s===void 0],["_email",r!=null?r:"",r===void 0],["School",o!=null?o:"",!0]];return Object.fromEntries(d.map(([I,f,h])=>[I,{value:f,isEditableByEndUser:h}]))},O=e=>{const n=Object.fromEntries(e.map(({key:t,value:s})=>[t,s]));return{visibleFields:j(n),hiddenFields:x(n)}},A=(e,n=5e3)=>{const t=a.useRef(),[s,r]=a.useState();return a.useEffect(()=>{let o;if((e==null?void 0:e.err)!==void 0)o={err:e.err};else if((e==null?void 0:e.hours)!==void 0){const{businessHoursInfo:{businessHours:i},timestamp:l}=e.hours;o={hours:i.find(c=>c.startTime-n<=l&&l<c.endTime+n)}}if(clearTimeout(t.current),(o==null?void 0:o.hours)!==void 0){const i=Math.max(o.hours.endTime-Date.now(),1e3);t.current=setTimeout(()=>{r(void 0)},i)}return r(i=>{var l,c,d,u;return i===o||i!==void 0&&((l=i.hours)==null?void 0:l.startTime)===((c=o==null?void 0:o.hours)==null?void 0:c.startTime)&&((d=i.hours)==null?void 0:d.endTime)===((u=o==null?void 0:o.hours)==null?void 0:u.endTime)&&i.err===(o==null?void 0:o.err)?i:o}),()=>{clearTimeout(t.current)}},[e,n]),s},L=(e,n)=>{const t=new Date(e),s=new Date(n);if(isNaN(t.getTime())||isNaN(s.getTime()))return"";try{const r={hour:"numeric",hour12:!0},o=new Intl.DateTimeFormat(void 0,r).format(t),i=new Intl.DateTimeFormat(void 0,{...r,timeZoneName:"short"}).format(s);return`${o} - ${i}`}catch(r){return console.warn("Intl.DateTimeFormat not available, falling back to simple hours.",r),`${t.getHours()} - ${s.getHours()}`}},U=(e,n)=>{const t=A(e,n);return a.useMemo(()=>{if(t){const{hours:s,err:r}=t;if(s)return{range:L(s.startTime,s.endTime)};if(r)return{err:r}}return{}},[t])},P=(e,n)=>{const t=a.useRef(null),s=a.useMemo(()=>e?new URL(e).origin:void 0,[e]),r=a.useCallback(c=>{!t.current||!s||t.current.postMessage(c,s)},[s]),o=a.useCallback(()=>{r({type:"preChatFields",data:n})},[r,n]),i=a.useCallback(()=>{o(),r({type:"open"})},[r,o]),l=a.useCallback(()=>{if(t.current||!e)return;const c=500,d=800,u=(window.screenX||window.screenLeft)+window.outerWidth,f=(window.screenY||window.screenTop)+window.outerHeight-d,h=u-c,g=Object.entries({popup:!0,width:c,height:d,top:f,left:h}).map(([w,T])=>`${w}=${T}`).join(",");if(t.current=window.open(e,"_blank",g),!t.current)return;const y=w=>{const{source:T,data:{type:k}}=w;T===t.current&&k==="ready"&&i()},H=setInterval(()=>{var w;(w=t.current)!=null&&w.closed&&(window.removeEventListener("message",y,!1),t.current=null,clearInterval(H))},500);window.addEventListener("message",y,!1)},[e,i]);return a.useEffect(()=>{o()},[o]),e?{openChat:l}:{}},W=v(B)`
  color: ${p.palette.gray};
  font-size: 1.4rem;
`,C=v(E)`
  color: ${p.palette.neutralDarker};
  text-decoration: none;

  :focus-visible {
    outline: 0;
    background: ${p.palette.neutralLighter};
  }
  :hover {
    color: ${p.palette.neutralDarker};
    text-decoration: none;
  }
`,z=v(D)`
  background-color: ${p.palette.neutralBright};
  position: absolute;
  width: 100%;
  top: 4rem;
  left: 0;
  bottom: 0;
  z-index: 20;
`,S=v.iframe`
  border: 0;
  width: 100%;
  height: calc(100% - 5rem);
`;function R({onClick:e,className:n}){return m("div",{className:n,children:m("button",{type:"button",onClick:e,"aria-label":"close form",children:"Back"})})}const Y=v(R)`
  border-top: 0.1rem solid ${p.palette.pale};
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  background-color: ${p.palette.neutralBright};
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
    background-color: ${p.palette.white};
    border: 1px solid ${p.palette.pale};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    width: 9rem;
    border-radius: 0.5rem;
  }
`,X=({contactFormParams:e,chatEmbedParams:n,children:t})=>{const[s,r]=a.useState(),{chatEmbedPath:o,businessHours:i}=a.useMemo(()=>n!=null?n:{},[n]),{range:l,err:c}=U(i),d=a.useMemo(()=>O(e),[e]),{openChat:u}=P(o,d),I=a.useMemo(()=>{const f="https://openstax.org/embedded/contact",h=e.map(({key:g,value:y})=>encodeURIComponent(`${g}=${y}`)).map(g=>`body=${g}`).join("&");return`${f}?${h}`},[e]);return a.useEffect(()=>{const f=({data:h})=>{h==="CONTACT_FORM_SUBMITTED"&&r(void 0)};return window.addEventListener("message",f,!1),()=>window.removeEventListener("message",f,!1)},[]),c&&console.error("Error getting business hours",c),b($,{children:[b(W,{label:"Help","aria-label":"Help menu",children:[l&&u?b(C,{onAction:()=>u(),children:["Chat With Us (",l,")"]}):m(C,{onAction:()=>r(I),children:"Report an issue"}),t]}),s&&b(z,{children:[m(S,{title:"Contact form",src:s}),m(Y,{onClick:()=>r(void 0)})]})]})},G=M`
  [data-portal-slot="nav"] {
    position: fixed;
    top: 0;
    width: 100%;
  }
`,V={hours:{businessHoursInfo:{businessHours:[{startTime:Date.now()-6e4,endTime:Date.now()+144e4}]},timestamp:Date.now()}},Z=[{key:"userId",value:"test"},{key:"userFirstName",value:"test"},{key:"organizationName",value:"org"}],q="",J={chatEmbedPath:q,businessHours:V},me=()=>b(N.Provider,{value:["nav","root"],children:[m(G,{}),m(F,{logo:!0,children:m(X,{contactFormParams:Z,chatEmbedParams:J,children:m(C,{onAction:()=>window.alert("Ran HelpMenu callback function"),children:"Test Callback"})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{me as Default};
