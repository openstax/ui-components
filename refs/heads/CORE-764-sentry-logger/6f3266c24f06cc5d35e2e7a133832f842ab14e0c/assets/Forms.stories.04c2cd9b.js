import{s as b,a as n,j as u,R as d,F as A}from"./index.c82e9722.js";import{T as M,C as V}from"./inputTypes.62fa867c.js";import"./Radio.f2c9a60a.js";import"./theme.52473b37.js";import"./palette.15e4d008.js";import"./Tooltip.ac7c496b.js";import"./OverlayArrow.module.af455877.js";import"./context.module.6bb24aee.js";import"./useButton.module.7e38f064.js";import"./Info.902ce2bb.js";import"./Checkbox.f9432301.js";var S={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.stateHasError=e.stateHasData=e.fetchIdle=e.fetchSuccess=e.fetchError=e.fetchLoading=e.FetchStateType=void 0;var t;(function(o){o.SUCCESS="success",o.ERROR="error",o.LOADING="loading",o.IDLE="idle"})(t=e.FetchStateType||(e.FetchStateType={}));const c=o=>({type:t.LOADING,...o&&"data"in o?{data:o.data}:{}});e.fetchLoading=c;const r=(o,m)=>({...m,type:t.ERROR,error:o});e.fetchError=r;const a=o=>({type:t.SUCCESS,data:o});e.fetchSuccess=a;const i=()=>({type:t.IDLE});e.fetchIdle=i;const s=o=>"data"in o;e.stateHasData=s;const l=o=>"error"in o;e.stateHasError=l})(S);const J=b.form`
  margin: 5px;
  > *:not(:first-child) {
    margin-top: 2rem;
  }

  h3 {
    border-bottom: 1px solid #ccc;
  }
`,B=({children:e,...t})=>n(J,{...t,children:e}),F=b.div`
  > *:not(:first-child) {
    margin-top: 2rem;
  }
`;b.div`
  font-weight: bold;
`;const x=b.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  && {
    margin-top: 3rem;
  }
`,G=e=>u(x,{children:["onCancel"in e?n(q,{onClick:e.onCancel,children:"Cancel"}):null,n($,{})]}),U=b.input`
`,$=({...e})=>n(U,{type:"submit",value:"Submit",...e}),z=b.button`
`,q=({...e})=>n(z,{...e});var w={},O={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ifDefined=e.isPlainObject=e.isNumber=e.isDefined=void 0;const t=i=>i!==void 0;e.isDefined=t;const c=i=>typeof i=="number";e.isNumber=c;const r=i=>i instanceof Object&&i.__proto__.constructor.name==="Object";e.isPlainObject=r;const a=(i,s)=>(0,e.isDefined)(i)?i:s;e.ifDefined=a})(O);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.merge=e.getCommonProperties=void 0;const t=O,c=(a,i)=>Object.keys(a).filter(s=>Object.keys(i).includes(s));e.getCommonProperties=c;const r=(...[a,...i])=>{const s=i.length>0?(0,e.merge)(...i):null;return s?{...a,...s,...(0,e.getCommonProperties)(a,s).reduce((l,o)=>({...l,...(0,t.isPlainObject)(a[o])&&(0,t.isPlainObject)(s[o])?{[o]:(0,e.merge)(a[o],s[o])}:Array.isArray(a[o])&&Array.isArray(s[o])?{[o]:[...a[o],...s[o]]}:{}}),{})}:a};e.merge=r})(w);const p=()=>window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16),y=d.createContext(()=>{throw new Error("form helpers not provided")}),g=()=>d.useContext(y)(),R=e=>({field:r=>a=>{e(i=>({...i,[r]:a}))},fields:e,merge:r=>e(a=>w.merge(a,r))}),K=(e,t,c)=>{const[r,a]=d.useState("data"in e&&e.data?e.data:t||{}),i=d.useRef(r);i.current=r;const s=d.useCallback(()=>{c==null||c(i.current)},[c]);return{namespace:"form",submit:s,data:r,state:e,setInput:R(a)}},Q=e=>{const t=g(),c=r=>t.setInput.fields(a=>({...a,[e]:r instanceof Function?r(a[e]||{}):r}));return{namespace:t.namespace+"."+e,submit:t.submit,data:t.data[e]||{},state:t.state,setInput:R(c)}},N=d.createContext(()=>{throw new Error("form list helpers not provided")}),D=()=>d.useContext(N)(),W=({name:e})=>{const t=g(),c=d.useCallback(s=>t.setInput.fields(l=>({...l,[e]:s instanceof Function?s(l[e]||[]):s})),[e,t.setInput]),r=s=>({data:s,state:t.state,submit:t.submit,namespace:t.namespace+"."+s.id,setInput:R(l=>c(o=>o.map(m=>m.id===s.id?l instanceof Function?l(m):l:m)))}),a=d.useMemo(()=>t.data[e]||[],[e,t.data]),i=d.useMemo(()=>a.every(s=>!!s.id),[a]);return d.useEffect(()=>{i||t.setInput.fields(s=>({...s,[e]:a.map(l=>l.id===void 0?{...l,id:p()}:l)}))},[a,i,e,t.setInput]),{addRecord:s=>t.setInput.fields(l=>({...l,[e]:[...l[e]||[],{id:p(),...s}]})),removeRecord:s=>t.setInput.fields(l=>({...l,[e]:(l[e]||[]).filter(o=>o.id!==s)})),data:i?a:[],setData:c,makeRecordHelpers:r}},X=(e,t,c)=>{const{disabled:r,emptyDisabledValue:a}=e,i=d.useRef(),s=d.useRef(c);s.current=c,d.useEffect(()=>{a!==!1&&r&&t&&(i.current=t,s.current(void 0)),a!==!1&&!r&&t===void 0&&t!==i.current&&s.current(i.current)},[r,a,t])},h=e=>{const{data:t,namespace:c,setInput:r}=g(),a=s=>{var l;(l=e.onChangeValue)==null||l.call(e,s),r.field(e.name)(s)},i=t[e.name];return X(e,i,a),n(M,{...e,name:c+"."+e.name,value:i||"",onChangeValue:a})},C=({children:e,state:t,onSubmit:c,defaultData:r,...a})=>{const i=K(t,r,c);return n(y.Provider,{value:()=>i,children:n(B,{...a,onSubmit:s=>{s.preventDefault(),i.submit()},children:e})})},I=e=>{const{state:t}=g();return n(G,{...e,state:t})},H=e=>{const{data:t}=g();return e.children(t[e.name])},v=e=>{const{data:t}=g();return e.children(t)},Y=e=>{const t=Q(e.name);return n(y.Provider,{value:()=>t,children:e.children})},P=({children:e,...t})=>{const c=W(t);return n(N.Provider,{value:()=>c,children:e})},j=d.createContext(()=>{throw new Error("context not provided")}),k=e=>{const t=D(),c=d.useRef(),r=d.useRef(),a=l=>o=>{if(!r.current)return;o.preventDefault();const m=t.data.findIndex(f=>f.id===r.current),E=t.data.findIndex(f=>f.id===l.id);if(m!==E){const f=[...t.data];f.splice(E,0,f.splice(m,1)[0]),t.setData(f)}},i=l=>{l.preventDefault(),c.current=!1},s=l=>o=>{if(!c.current){o.preventDefault();return}o.dataTransfer.effectAllowed="move",r.current=l.id};return n(F,{children:t.data.map(l=>n(j.Provider,{value:()=>c,children:n(y.Provider,{value:()=>t.makeRecordHelpers(l),children:n(F,{draggable:!0,onDrop:i,onDragOver:a(l),onDragStart:s(l),style:{userSelect:"text"},children:e.children})})},l.id))})},Z=e=>{const t=d.useContext(j)();return n("div",{tabIndex:-1,...e,onMouseDown:()=>t.current=!0,style:{cursor:"move",backgroundImage:"radial-gradient(circle at 1px 1px, #aaa 1px, transparent 0), radial-gradient(circle at 4px 4px, #aaa 1px, transparent 0)",backgroundSize:"5px 6px",height:"11px",width:"11px",...e.style}})},L=e=>{const t=g(),c=D();return n("button",{...e,onClick:r=>{var a;c.removeRecord(t.data.id),(a=e.onClick)==null||a.call(e,r)},type:"button"})},T=e=>{const t=D();return n("button",{...e,onClick:c=>{var r;t.addRecord(),(r=e.onClick)==null||r.call(e,c)},type:"button"})},ue=()=>{const e={name:"Test McTesterson"},t=S.fetchSuccess(e),[c,r]=d.useState({});return u(C,{state:t,onSubmit:a=>r(a),children:[n(h,{name:"name",label:"Name"}),n(I,{}),n("pre",{children:JSON.stringify(c,null,2)})]})},_=b(F)`
  display: flex;
  flex-direction: row;

  > *:not(:first-child) {
    margin-top: 0;
    margin-left: 5px;
  }
`,me=()=>{const e={name:"Test McTesterson",interests:[{interest:"sleeping"}]},t=S.fetchSuccess(e),[c,r]=d.useState({}),[a,i]=d.useState(!1);return u(C,{state:t,onSubmit:s=>r(s),children:[n(h,{name:"name",label:"Name"}),n(V,{name:"sortable",label:"Sortable",onChangeValue:s=>i(!!s)}),u(P,{name:"interests",children:[n(k,{children:u(_,{children:[a?n(Z,{style:{height:"auto"}}):null,n(h,{name:"interest",label:"Interest"}),n(L,{children:"remove interest"})]})}),n(T,{children:"add interest"})]}),n(I,{}),n("pre",{children:JSON.stringify(c,null,2)})]})},fe=()=>{const e={name:"Test McTesterson"},t=S.fetchSuccess(e);return u(C,{state:t,children:[n(h,{name:"name",label:"Name"}),n(I,{}),n(H,{name:"name",children:c=>n("pre",{children:JSON.stringify(c,null,2)})}),n(v,{children:c=>n("pre",{children:JSON.stringify(c,null,2)})})]})},he=()=>{const e={name:"Test McTesterson",interests:[{interest:"sleeping"}],address:{line1:"1 main st"}},t=S.fetchSuccess(e);return u(C,{state:t,children:[n(h,{name:"name",label:"Name"}),u("p",{children:["in a loop or namespace ",n("code",{children:"Forms.GetFormData"})," and ",n("code",{children:"Forms.GetFormValue"})," will return only values within the namespace"]}),n(v,{children:c=>u(A,{children:[u(Y,{name:"address",children:[n(h,{name:"line1",label:"line1"}),n(v,{children:r=>n("pre",{children:JSON.stringify(r,null,2)})}),n("p",{children:"if you need the parent context data in a subcomponent, you can wrap the entire section"}),n("pre",{children:JSON.stringify(c,null,2)})]}),u(P,{name:"interests",children:[u(k,{children:[u(_,{children:[n(h,{name:"interest",label:"Interest"}),n(L,{children:"remove interest"})]}),n(v,{children:r=>n("pre",{children:JSON.stringify(r,null,2)})})]}),n(T,{children:"add interest"})]}),n(I,{}),n(H,{name:"name",children:r=>n("pre",{children:JSON.stringify(r,null,2)})})]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ue as BasicControlledForm,fe as BasicDataReferences,he as DataReferencesInNamespaces,me as FormRepeatableElements};
