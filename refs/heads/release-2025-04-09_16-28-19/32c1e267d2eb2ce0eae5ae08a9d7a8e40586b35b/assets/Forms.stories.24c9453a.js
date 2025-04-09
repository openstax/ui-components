import{s as b,a as n,j as m,R as d,F as V}from"./index.2e188ec9.js";import{T as J,C as B}from"./inputTypes.dbe2ee80.js";import"./Radio.a9dddfc0.js";import"./theme.38d1f9b8.js";import"./palette.15e4d008.js";import"./Tooltip.4a3222c8.js";import"./OverlayArrow.module.f177c9be.js";import"./context.module.ca0d0dfa.js";import"./useButton.module.8ce757ac.js";import"./Info.7eccfc2f.js";import"./Checkbox.dae757cc.js";var S={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.stateHasError=e.stateHasData=e.fetchIdle=e.fetchSuccess=e.fetchError=e.fetchLoading=e.FetchStateType=void 0;var t;(function(o){o.SUCCESS="success",o.ERROR="error",o.LOADING="loading",o.IDLE="idle"})(t=e.FetchStateType||(e.FetchStateType={}));const c=o=>({type:t.LOADING,...o&&"data"in o?{data:o.data}:{}});e.fetchLoading=c;const a=(o,u)=>({...u,type:t.ERROR,error:o});e.fetchError=a;const r=o=>({type:t.SUCCESS,data:o});e.fetchSuccess=r;const i=()=>({type:t.IDLE});e.fetchIdle=i;const s=o=>"data"in o;e.stateHasData=s;const l=o=>"error"in o;e.stateHasError=l})(S);const x=b.form`
  margin: 5px;
  > *:not(:first-child) {
    margin-top: 2rem;
  }

  h3 {
    border-bottom: 1px solid #ccc;
  }
`,G=({children:e,...t})=>n(x,{...t,children:e}),F=b.div`
  > *:not(:first-child) {
    margin-top: 2rem;
  }
`;b.div`
  font-weight: bold;
`;const U=b.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  && {
    margin-top: 3rem;
  }
`,$=e=>m(U,{children:["onCancel"in e?n(Q,{onClick:e.onCancel,children:"Cancel"}):null,n(q,{})]}),z=b.input`
`,q=({...e})=>n(z,{type:"submit",value:"Submit",...e}),K=b.button`
`,Q=({...e})=>n(K,{...e});var H={},N={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ifDefined=e.isPlainObject=e.isNumber=e.isDefined=void 0;const t=i=>i!==void 0;e.isDefined=t;const c=i=>typeof i=="number";e.isNumber=c;const a=i=>i instanceof Object&&i.__proto__.constructor.name==="Object";e.isPlainObject=a;const r=(i,s)=>(0,e.isDefined)(i)?i:s;e.ifDefined=r})(N);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.merge=e.getCommonProperties=void 0;const t=N,c=(r,i)=>Object.keys(r).filter(s=>Object.keys(i).includes(s));e.getCommonProperties=c;const a=(...[r,...i])=>{const s=i.length>0?(0,e.merge)(...i):null;return s?{...r,...s,...(0,e.getCommonProperties)(r,s).reduce((l,o)=>({...l,...(0,t.isPlainObject)(r[o])&&(0,t.isPlainObject)(s[o])?{[o]:(0,e.merge)(r[o],s[o])}:Array.isArray(r[o])&&Array.isArray(s[o])?{[o]:[...r[o],...s[o]]}:{}}),{})}:r};e.merge=a})(H);const O=()=>window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16),C=d.createContext(()=>{throw new Error("form helpers not provided")}),g=()=>d.useContext(C)(),R=e=>({field:a=>r=>{e(i=>({...i,[a]:r}))},fields:e,merge:a=>e(r=>H.merge(r,a))}),W=(e,t,c)=>{const[a,r]=d.useState("data"in e&&e.data?e.data:t||{}),i=d.useRef(a);i.current=a;const s=d.useCallback(()=>{c==null||c(i.current)},[c]),l={namespace:"form",submit:s,data:a,state:e,setInput:R(r)};return l.rootHelpers=l,l},X=e=>{const t=g(),c=a=>t.setInput.fields(r=>({...r,[e]:a instanceof Function?a(r[e]||{}):a}));return{namespace:t.namespace+"."+e,submit:t.submit,data:t.data[e]||{},rootHelpers:t.rootHelpers,state:t.state,setInput:R(c)}},P=d.createContext(()=>{throw new Error("form list helpers not provided")}),E=()=>d.useContext(P)(),Y=({name:e})=>{const t=g(),c=d.useCallback(s=>t.setInput.fields(l=>({...l,[e]:s instanceof Function?s(l[e]||[]):s})),[e,t.setInput]),a=s=>({data:s,rootHelpers:t.rootHelpers,state:t.state,submit:t.submit,namespace:t.namespace+"."+s.id,setInput:R(l=>c(o=>o.map(u=>u.id===s.id?l instanceof Function?l(u):l:u)))}),r=d.useMemo(()=>t.data[e]||[],[e,t.data]),i=d.useMemo(()=>r.every(s=>!!s.id),[r]);return d.useEffect(()=>{i||t.setInput.fields(s=>({...s,[e]:r.map(l=>l.id===void 0?{...l,id:O()}:l)}))},[r,i,e,t.setInput]),{addRecord:s=>t.setInput.fields(l=>({...l,[e]:[...l[e]||[],{id:O(),...s}]})),removeRecord:s=>t.setInput.fields(l=>({...l,[e]:(l[e]||[]).filter(o=>o.id!==s)})),data:i?r:[],rootHelpers:t.rootHelpers,setData:c,makeRecordHelpers:a}},Z=(e,t,c)=>{const{disabled:a,emptyDisabledValue:r}=e,i=d.useRef(),s=d.useRef(c);s.current=c,d.useEffect(()=>{r!==!1&&a&&t&&(i.current=t,s.current(void 0)),r!==!1&&!a&&t===void 0&&t!==i.current&&s.current(i.current)},[a,r,t])},h=e=>{const{data:t,namespace:c,setInput:a}=g(),r=s=>{var l;(l=e.onChangeValue)==null||l.call(e,s),a.field(e.name)(s)},i=t[e.name];return Z(e,i,r),n(J,{...e,name:c+"."+e.name,value:i||"",onChangeValue:r})},I=({children:e,state:t,onSubmit:c,defaultData:a,...r})=>{const i=W(t,a,c);return n(C.Provider,{value:()=>i,children:n(G,{...r,onSubmit:s=>{s.preventDefault(),i.submit()},children:e})})},p=e=>{const{state:t}=g();return n($,{...e,state:t})},j=e=>{const{data:t}=g();return e.children(t[e.name])},y=e=>{const{data:t}=g();return e.children(t)},ee=e=>{const t=X(e.name);return n(C.Provider,{value:()=>t,children:e.children})},k=({children:e,...t})=>{const c=Y(t);return n(P.Provider,{value:()=>c,children:e})},L=d.createContext(()=>{throw new Error("context not provided")}),T=e=>{const t=E(),[c,a]=d.useState(!1),r=d.useRef(),i=d.useRef();r.current=c;const s=u=>v=>{if(!i.current)return;v.preventDefault();const D=t.data.findIndex(f=>f.id===i.current),w=t.data.findIndex(f=>f.id===u.id);if(D!==w){const f=[...t.data];f.splice(w,0,f.splice(D,1)[0]),t.setData(f)}},l=u=>{u.preventDefault(),a(!1)},o=u=>v=>{if(!r.current){v.preventDefault();return}v.dataTransfer.effectAllowed="move",i.current=u.id};return n(F,{children:t.data.map(u=>n(L.Provider,{value:a,children:n(C.Provider,{value:()=>t.makeRecordHelpers(u),children:n(F,{draggable:c,onDrop:l,onDragOver:s(u),onDragStart:o(u),style:{userSelect:"text"},children:e.children})})},u.id))})},te=e=>{const t=d.useContext(L);return n("div",{tabIndex:-1,...e,onMouseDown:()=>t(!0),style:{cursor:"move",backgroundImage:"radial-gradient(circle at 1px 1px, #aaa 1px, transparent 0), radial-gradient(circle at 4px 4px, #aaa 1px, transparent 0)",backgroundSize:"5px 6px",height:"11px",width:"11px",...e.style}})},_=e=>{const t=g(),c=E();return n("button",{...e,onClick:a=>{var r;c.removeRecord(t.data.id),(r=e.onClick)==null||r.call(e,a)},type:"button"})},A=e=>{const t=E();return n("button",{...e,onClick:c=>{var a;t.addRecord(),(a=e.onClick)==null||a.call(e,c)},type:"button"})},fe=()=>{const e={name:"Test McTesterson"},t=S.fetchSuccess(e),[c,a]=d.useState({});return m(I,{state:t,onSubmit:r=>a(r),children:[n(h,{name:"name",label:"Name"}),n(p,{}),n("pre",{children:JSON.stringify(c,null,2)})]})},M=b(F)`
  display: flex;
  flex-direction: row;

  > *:not(:first-child) {
    margin-top: 0;
    margin-left: 5px;
  }
`,he=()=>{const e={name:"Test McTesterson",interests:[{interest:"sleeping"}]},t=S.fetchSuccess(e),[c,a]=d.useState({}),[r,i]=d.useState(!1);return m(I,{state:t,onSubmit:s=>a(s),children:[n(h,{name:"name",label:"Name"}),n(B,{name:"sortable",label:"Sortable",onChangeValue:s=>i(!!s)}),m(k,{name:"interests",children:[n(T,{children:m(M,{children:[r?n(te,{style:{height:"auto"}}):null,n(h,{name:"interest",label:"Interest"}),n(_,{children:"remove interest"})]})}),n(A,{children:"add interest"})]}),n(p,{}),n("pre",{children:JSON.stringify(c,null,2)})]})},be=()=>{const e={name:"Test McTesterson"},t=S.fetchSuccess(e);return m(I,{state:t,children:[n(h,{name:"name",label:"Name"}),n(p,{}),n(j,{name:"name",children:c=>n("pre",{children:JSON.stringify(c,null,2)})}),n(y,{children:c=>n("pre",{children:JSON.stringify(c,null,2)})})]})},ge=()=>{const e={name:"Test McTesterson",interests:[{interest:"sleeping"}],address:{line1:"1 main st"}},t=S.fetchSuccess(e);return m(I,{state:t,children:[n(h,{name:"name",label:"Name"}),m("p",{children:["in a loop or namespace ",n("code",{children:"Forms.GetFormData"})," and ",n("code",{children:"Forms.GetFormValue"})," will return only values within the namespace"]}),n(y,{children:c=>m(V,{children:[m(ee,{name:"address",children:[n(h,{name:"line1",label:"line1"}),n(y,{children:a=>n("pre",{children:JSON.stringify(a,null,2)})}),n("p",{children:"if you need the parent context data in a subcomponent, you can wrap the entire section"}),n("pre",{children:JSON.stringify(c,null,2)})]}),m(k,{name:"interests",children:[m(T,{children:[m(M,{children:[n(h,{name:"interest",label:"Interest"}),n(_,{children:"remove interest"})]}),n(y,{children:a=>n("pre",{children:JSON.stringify(a,null,2)})})]}),n(A,{children:"add interest"})]}),n(p,{}),n(j,{name:"name",children:a=>n("pre",{children:JSON.stringify(a,null,2)})})]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{fe as BasicControlledForm,be as BasicDataReferences,ge as DataReferencesInNamespaces,he as FormRepeatableElements};
