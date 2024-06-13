import{s as b,R as c,a as u,j as g,F as I}from"./index.b5a386a9.js";import{a as N}from"./buttons.e3bb0130.js";import{p}from"./palette.15e4d008.js";var M={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.assertErrorInstanceOf=e.assertInstanceOf=e.notNaN=e.assertNotNaN=e.assertString=e.assertDefined=e.assertFalse=e.assertTrue=e.doThrow=void 0;const o=t=>{if(typeof t=="string")throw new Error(t);if(t instanceof Error)throw t;if(!t)throw new Error;return t()};e.doThrow=o;const a=(t,s)=>typeof t!="boolean"||t!==!0?(0,e.doThrow)(s):t;e.assertTrue=a;const n=(t,s)=>typeof t!="boolean"||t!==!1?(0,e.doThrow)(s):t;e.assertFalse=n;const l=(t,s)=>t===void 0?(0,e.doThrow)(s):t;e.assertDefined=l;const d=(t,s)=>typeof t!="string"?(0,e.doThrow)(s):t;e.assertString=d;const r=(t,s)=>typeof t=="number"&&isNaN(t)?(0,e.doThrow)(s):t;e.assertNotNaN=r,e.notNaN=e.assertNotNaN;const i=(t,s,S)=>t instanceof s?t:(0,e.doThrow)(S);e.assertInstanceOf=i;const m=(t,s)=>{if(t instanceof Error)return(0,e.assertInstanceOf)(t,s,t);throw new Error(`assertErrorInstanceOf received non-Error argument of type "${typeof t}" and string representation "${t}"`)};e.assertErrorInstanceOf=m})(M);const O=b.div`
  position: relative;
`,v=b.button`
  ${e=>N(e.variant)}

  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  display: inline-flex;
  flex-direction: row;
  font-size: 1.6rem;
  height: 2.5rem;
  justify-content: center;
  line-height: 2rem;
  padding: 0 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  user-select: none;
  white-space: nowrap;
  ${e=>e.width?`width: ${e.width}`:null}
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  &:disabled {
    opacity: 0.4;
  }

  &:not([disabled]) {
    cursor: pointer;
  }

  :after {
    background: ${e=>e.variant==="light"?p.black:p.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    height: 0.5rem;
    margin: -0.25rem 0 0 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`,$=b.div`
  background-color: ${p.white};
  border: 1px solid ${p.pale};
  padding: 0.3rem 0;
  position: absolute;
  z-index: 10;
`,L=b.button`
  align-items: center;
  background-color: ${p.white};
  border: 0;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;
  display: block;
  flex-direction: row;
  font-size: 1.6rem;
  height: 2.5rem;
  justify-content: center;
  line-height: 2rem;
  margin: 0;
  padding: 0 0.5rem;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  &:hover {
    background-color: ${p.pale};
  }
`,F=({disabled:e})=>{const[o,a]=c.useState(),n=o!==void 0,l=c.useCallback(()=>a(void 0),[]),d=c.useCallback(i=>a(e?void 0:i),[e]),r=c.useCallback(()=>n?l():d("first"),[l,n,d]);return{disabled:e,closeMenu:l,isOpen:n,openFocus:o,openMenu:d,toggleMenu:r}},y=c.createContext({closeMenu:()=>{throw new Error("Tried to call closeMenu() without a DropdownMenuContext")},disabled:!0,isOpen:!1,openFocus:void 0,openMenu:()=>{throw new Error("Tried to call openMenu() without a DropdownMenuContext")},toggleMenu:()=>{throw new Error("Tried to call toggleMenu() without a DropdownMenuContext")}}),A=({id:e,menuId:o,text:a,variant:n,width:l})=>{const{disabled:d,isOpen:r,openMenu:i,toggleMenu:m}=c.useContext(y),t=c.useCallback(s=>{switch(s.key){case"ArrowDown":i("first"),s.preventDefault();break;case"ArrowUp":i("last"),s.preventDefault();break}},[i]);return u(v,{"aria-haspopup":"true","aria-controls":o,"aria-expanded":r,disabled:d,id:e,onClick:m,onKeyDown:t,type:"button",variant:n,width:l,children:a})},f=e=>{e instanceof HTMLElement&&e.focus()},j=({children:e,...o})=>{const{openFocus:a}=c.useContext(y),n=c.useRef(null);return c.useEffect(()=>{n.current&&f(a==="first"?n.current.firstElementChild:n.current.lastElementChild)},[a,n]),u($,{...o,ref:n,role:"menu",children:e})},k=({children:e,disabled:o,id:a,text:n,variant:l,width:d})=>{const r=c.useRef(null),i=F({disabled:o});c.useEffect(()=>{const t=s=>{r.current&&r.current.contains(s.target)||i.closeMenu()};return window.addEventListener("click",t),()=>window.removeEventListener("click",t)},[r]);const m=`${a}-button`;return u(O,{ref:r,children:g(y.Provider,{value:i,children:[u(A,{id:m,menuId:a,text:n,variant:l,width:d}),i.isOpen?u(j,{"aria-labelledby":m,id:a,children:e}):null]})})},h=(e,o)=>M.assertInstanceOf(e,Element,o),D=e=>h(h(e.parentElement,"menuItem has no parent").firstElementChild,"menuItemContainer is empty"),T=e=>h(h(e.parentElement,"menuItem has no parent").lastElementChild,"menuItemContainer is empty"),E=e=>{var o;return(o=e.nextElementSibling)!=null?o:D(e)},x=e=>{var o;return(o=e.previousElementSibling)!=null?o:T(e)},w=({children:e,onClick:o,...a})=>{const{closeMenu:n}=c.useContext(y),l=c.useCallback(r=>{o&&o(r),n()},[n,o]),d=c.useCallback(r=>{switch(r.key){case"Escape":n(),f(h(h(r.currentTarget.parentElement,"menuItem has no parent").parentElement,"menuItemContainer has no parent").firstElementChild);break;case"ArrowUp":f(x(r.currentTarget)),r.preventDefault();break;case"ArrowDown":f(E(r.currentTarget)),r.preventDefault();break;case"Home":f(D(r.currentTarget)),r.preventDefault();break;case"End":f(T(r.currentTarget)),r.preventDefault();break;default:if(/^[A-Za-z]$/.test(r.key)){for(let i=E(r.currentTarget);i!==r.currentTarget&&i instanceof HTMLElement;i=E(i))if(M.assertString(i.textContent,"menuItem has no textContent").toLowerCase().startsWith(r.key.toLowerCase())){f(i);break}}}},[n]);return u(L,{...a,onClick:l,onKeyDown:d,role:"menuitem",children:e})},C=e=>{const[o,a]=c.useState(!1),n=l=>{a(!0),console.log(`Activated "${l.currentTarget.innerText}"`),setTimeout(()=>{a(!1)},1e3)};return g(I,{children:[g(k,{disabled:o,id:"enabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[u(w,{onClick:n,children:"Sync only completed grades to LMS"}),u(w,{onClick:n,children:"Sync all grades to LMS (including partial)"}),u(w,{onClick:n,children:"Export grades to .csv"})]}),u("br",{}),g(k,{disabled:!0,id:"disabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[u(w,{onClick:n,children:"Sync only completed grades to LMS"}),u(w,{onClick:n,children:"Sync all grades to LMS (including partial)"}),u(w,{onClick:n,children:"Export grades to .csv"})]})]})},R=()=>C("light"),H=()=>C("primary"),P=()=>C("secondary");typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Light,H as Primary,P as Secondary};
