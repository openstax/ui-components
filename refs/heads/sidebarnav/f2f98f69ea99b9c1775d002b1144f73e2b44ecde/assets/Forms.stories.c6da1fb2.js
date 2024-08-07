import{s as m,a as n,F as x,j as u,R as d}from"./index.8b248e8d.js";import"./Radio.36235b90.js";import"./theme.c5c687aa.js";import"./palette.15e4d008.js";import"./Tooltip.ca00e196.js";import"./Button.module.6de1fda6.js";import"./context.module.fcd29e30.js";import"./useFocusRing.module.33ad2167.js";import"./OverlayArrow.module.05873ece.js";import"./Info.e7681c1a.js";var y={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.stateHasError=e.stateHasData=e.fetchIdle=e.fetchSuccess=e.fetchError=e.fetchLoading=e.FetchStateType=void 0;var t;(function(o){o.SUCCESS="success",o.ERROR="error",o.LOADING="loading",o.IDLE="idle"})(t=e.FetchStateType||(e.FetchStateType={}));const i=o=>({type:t.LOADING,...o&&"data"in o?{data:o.data}:{}});e.fetchLoading=i;const a=(o,f)=>({...f,type:t.ERROR,error:o});e.fetchError=a;const r=o=>({type:t.SUCCESS,data:o});e.fetchSuccess=r;const s=()=>({type:t.IDLE});e.fetchIdle=s;const c=o=>"data"in o;e.stateHasData=c;const l=o=>"error"in o;e.stateHasError=l})(y);const H=m.label`
  display: flex;
  flex-direction: column;
  flex: 0;
  justify-content: stretch;
`,R=m.span`
  white-space: nowrap;
  font-weight: bold;
  display: block;
`,G=m.p`
  font-style: italic;
  margin: 0;
  padding: 0;
`,N=({value:e,...t})=>e?n(G,{...t,children:e}):null,k=e=>e.show?n(x,{children:"*"}):null,q=m.input`
  flex: 1;
  justify-content: stretch;
`,U=m.div`
  flex-direction: row;
  display: flex;
`,V=({label:e,addon:t,help:i,wrapperProps:a,onChangeValue:r,...s})=>u(H,{...a,children:[u(R,{children:[n(k,{show:s.required}),e,":"]}),u(U,{children:[n(q,{type:"text",...s,onChange:c=>{var l;r==null||r(s.transformValue?s.transformValue(c.target.value):c.target.value),(l=s.onChange)==null||l.call(s,c)}}),t]}),n(N,{value:i})]});m.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;m(R)`
  white-space: normal;
`;const $=m.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`,z=({label:e,help:t,wrapperProps:i,onChangeValue:a,...r})=>u(H,{...i,children:[u($,{children:[n("input",{type:"checkbox",...r,onChange:s=>{var c;a==null||a(!!s.target.checked),(c=r.onChange)==null||c.call(r,s)}}),u(R,{children:[n(k,{show:r.required}),e]})]}),n(N,{value:t})]}),W=m.form`
  margin: 5px;
  > *:not(:first-child) {
    margin-top: 2rem;
  }

  h3 {
    border-bottom: 1px solid #ccc;
  }
`,K=({children:e,...t})=>n(W,{...t,children:e}),F=m.div`
  > *:not(:first-child) {
    margin-top: 2rem;
  }
`;m.div`
  font-weight: bold;
`;const Q=m.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  && {
    margin-top: 3rem;
  }
`,X=e=>u(Q,{children:["onCancel"in e?n(te,{onClick:e.onCancel,children:"Cancel"}):null,n(Z,{})]}),Y=m.input`
`,Z=({...e})=>n(Y,{type:"submit",value:"Submit",...e}),ee=m.button`
`,te=({...e})=>n(ee,{...e});var j={},p={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ifDefined=e.isPlainObject=e.isNumber=e.isDefined=void 0;const t=s=>s!==void 0;e.isDefined=t;const i=s=>typeof s=="number";e.isNumber=i;const a=s=>s instanceof Object&&s.__proto__.constructor.name==="Object";e.isPlainObject=a;const r=(s,c)=>(0,e.isDefined)(s)?s:c;e.ifDefined=r})(p);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.merge=e.getCommonProperties=void 0;const t=p,i=(r,s)=>Object.keys(r).filter(c=>Object.keys(s).includes(c));e.getCommonProperties=i;const a=(...[r,...s])=>{const c=s.length>0?(0,e.merge)(...s):null;return c?{...r,...c,...(0,e.getCommonProperties)(r,c).reduce((l,o)=>({...l,...(0,t.isPlainObject)(r[o])&&(0,t.isPlainObject)(c[o])?{[o]:(0,e.merge)(r[o],c[o])}:Array.isArray(r[o])&&Array.isArray(c[o])?{[o]:[...r[o],...c[o]]}:{}}),{})}:r};e.merge=a})(j);const O=()=>window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16),S=d.createContext(()=>{throw new Error("form helpers not provided")}),g=()=>d.useContext(S)(),C=e=>({field:a=>r=>{e(s=>({...s,[a]:r}))},fields:e,merge:a=>e(r=>j.merge(r,a))}),ne=(e,t,i)=>{const[a,r]=d.useState("data"in e&&e.data?e.data:t||{}),s=d.useRef(a);s.current=a;const c=d.useCallback(()=>{i==null||i(s.current)},[i]);return{namespace:"form",submit:c,data:a,state:e,setInput:C(r)}},re=e=>{const t=g(),i=a=>t.setInput.fields(r=>({...r,[e]:a instanceof Function?a(r[e]||{}):a}));return{namespace:t.namespace+"."+e,submit:t.submit,data:t.data[e]||{},state:t.state,setInput:C(i)}},L=d.createContext(()=>{throw new Error("form list helpers not provided")}),E=()=>d.useContext(L)(),ce=({name:e})=>{const t=g(),i=d.useCallback(c=>t.setInput.fields(l=>({...l,[e]:c instanceof Function?c(l[e]||[]):c})),[e,t.setInput]),a=c=>({data:c,state:t.state,submit:t.submit,namespace:t.namespace+"."+c.id,setInput:C(l=>i(o=>o.map(f=>f.id===c.id?l instanceof Function?l(f):l:f)))}),r=d.useMemo(()=>t.data[e]||[],[e,t.data]),s=d.useMemo(()=>r.every(c=>!!c.id),[r]);return d.useEffect(()=>{s||t.setInput.fields(c=>({...c,[e]:r.map(l=>l.id===void 0?{...l,id:O()}:l)}))},[r,s,e,t.setInput]),{addRecord:c=>t.setInput.fields(l=>({...l,[e]:[...l[e]||[],{id:O(),...c}]})),removeRecord:c=>t.setInput.fields(l=>({...l,[e]:(l[e]||[]).filter(o=>o.id!==c)})),data:s?r:[],setData:i,makeRecordHelpers:a}},ae=(e,t,i)=>{const{disabled:a,emptyDisabledValue:r}=e,s=d.useRef(),c=d.useRef(i);c.current=i,d.useEffect(()=>{r!==!1&&a&&t&&(s.current=t,c.current(void 0)),r!==!1&&!a&&t===void 0&&t!==s.current&&c.current(s.current)},[a,r,t])},b=e=>{const{data:t,namespace:i,setInput:a}=g(),r=c=>{var l;(l=e.onChangeValue)==null||l.call(e,c),a.field(e.name)(c)},s=t[e.name];return ae(e,s,r),n(V,{...e,name:i+"."+e.name,value:s||"",onChangeValue:r})},I=({children:e,state:t,onSubmit:i,defaultData:a,...r})=>{const s=ne(t,a,i);return n(S.Provider,{value:()=>s,children:n(K,{...r,onSubmit:c=>{c.preventDefault(),s.submit()},children:e})})},w=e=>{const{state:t}=g();return n(X,{...e,state:t})},P=e=>{const{data:t}=g();return e.children(t[e.name])},v=e=>{const{data:t}=g();return e.children(t)},se=e=>{const t=re(e.name);return n(S.Provider,{value:()=>t,children:e.children})},T=({children:e,...t})=>{const i=ce(t);return n(L.Provider,{value:()=>i,children:e})},_=d.createContext(()=>{throw new Error("context not provided")}),A=e=>{const t=E(),i=d.useRef(),a=d.useRef(),r=l=>o=>{if(!a.current)return;o.preventDefault();const f=t.data.findIndex(h=>h.id===a.current),D=t.data.findIndex(h=>h.id===l.id);if(f!==D){const h=[...t.data];h.splice(D,0,h.splice(f,1)[0]),t.setData(h)}},s=l=>{l.preventDefault(),i.current=!1},c=l=>o=>{if(!i.current){o.preventDefault();return}o.dataTransfer.effectAllowed="move",a.current=l.id};return n(F,{children:t.data.map(l=>n(_.Provider,{value:()=>i,children:n(S.Provider,{value:()=>t.makeRecordHelpers(l),children:n(F,{draggable:!0,onDrop:s,onDragOver:r(l),onDragStart:c(l),style:{userSelect:"text"},children:e.children})})},l.id))})},ie=e=>{const t=d.useContext(_)();return n("div",{tabIndex:-1,...e,onMouseDown:()=>t.current=!0,style:{cursor:"move",backgroundImage:"radial-gradient(circle at 1px 1px, #aaa 1px, transparent 0), radial-gradient(circle at 4px 4px, #aaa 1px, transparent 0)",backgroundSize:"5px 6px",height:"11px",width:"11px",...e.style}})},M=e=>{const t=g(),i=E();return n("button",{...e,onClick:a=>{var r;i.removeRecord(t.data.id),(r=e.onClick)==null||r.call(e,a)},type:"button"})},J=e=>{const t=E();return n("button",{...e,onClick:i=>{var a;t.addRecord(),(a=e.onClick)==null||a.call(e,i)},type:"button"})},ve=()=>{const e={name:"Test McTesterson"},t=y.fetchSuccess(e),[i,a]=d.useState({});return u(I,{state:t,onSubmit:r=>a(r),children:[n(b,{name:"name",label:"Name"}),n(w,{}),n("pre",{children:JSON.stringify(i,null,2)})]})},B=m(F)`
  display: flex;
  flex-direction: row;

  > *:not(:first-child) {
    margin-top: 0;
    margin-left: 5px;
  }
`,Se=()=>{const e={name:"Test McTesterson",interests:[{interest:"sleeping"}]},t=y.fetchSuccess(e),[i,a]=d.useState({}),[r,s]=d.useState(!1);return u(I,{state:t,onSubmit:c=>a(c),children:[n(b,{name:"name",label:"Name"}),n(z,{name:"sortable",label:"Sortable",onChangeValue:c=>s(!!c)}),u(T,{name:"interests",children:[n(A,{children:u(B,{children:[r?n(ie,{style:{height:"auto"}}):null,n(b,{name:"interest",label:"Interest"}),n(M,{children:"remove interest"})]})}),n(J,{children:"add interest"})]}),n(w,{}),n("pre",{children:JSON.stringify(i,null,2)})]})},Ie=()=>{const e={name:"Test McTesterson"},t=y.fetchSuccess(e);return u(I,{state:t,children:[n(b,{name:"name",label:"Name"}),n(w,{}),n(P,{name:"name",children:i=>n("pre",{children:JSON.stringify(i,null,2)})}),n(v,{children:i=>n("pre",{children:JSON.stringify(i,null,2)})})]})},we=()=>{const e={name:"Test McTesterson",interests:[{interest:"sleeping"}],address:{line1:"1 main st"}},t=y.fetchSuccess(e);return u(I,{state:t,children:[n(b,{name:"name",label:"Name"}),u("p",{children:["in a loop or namespace ",n("code",{children:"Forms.GetFormData"})," and ",n("code",{children:"Forms.GetFormValue"})," will return only values within the namespace"]}),n(v,{children:i=>u(x,{children:[u(se,{name:"address",children:[n(b,{name:"line1",label:"line1"}),n(v,{children:a=>n("pre",{children:JSON.stringify(a,null,2)})}),n("p",{children:"if you need the parent context data in a subcomponent, you can wrap the entire section"}),n("pre",{children:JSON.stringify(i,null,2)})]}),u(T,{name:"interests",children:[u(A,{children:[u(B,{children:[n(b,{name:"interest",label:"Interest"}),n(M,{children:"remove interest"})]}),n(v,{children:a=>n("pre",{children:JSON.stringify(a,null,2)})})]}),n(J,{children:"add interest"})]}),n(w,{}),n(P,{name:"name",children:a=>n("pre",{children:JSON.stringify(a,null,2)})})]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ve as BasicControlledForm,Ie as BasicDataReferences,we as DataReferencesInNamespaces,Se as FormRepeatableElements};
