import{s as b,R as c,a as u,j as g,F as T}from"./index.77351912.js";import{a as N}from"./buttons.9c1934c3.js";import{p as w}from"./palette.15e4d008.js";var M={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.assertErrorInstanceOf=e.assertInstanceOf=e.notNaN=e.assertNotNaN=e.assertString=e.assertDefined=e.assertFalse=e.assertTrue=void 0;const n=t=>{if(typeof t=="string")throw new Error(t);if(t instanceof Error)throw t;if(!t)throw new Error;return t()},a=(t,s)=>typeof t!="boolean"||t!==!0?n(s):t;e.assertTrue=a;const r=(t,s)=>typeof t!="boolean"||t!==!1?n(s):t;e.assertFalse=r;const l=(t,s)=>t===void 0?n(s):t;e.assertDefined=l;const d=(t,s)=>typeof t!="string"?n(s):t;e.assertString=d;const o=(t,s)=>typeof t=="number"&&isNaN(t)?n(s):t;e.assertNotNaN=o,e.notNaN=e.assertNotNaN;const i=(t,s,I)=>t instanceof s?t:n(I);e.assertInstanceOf=i;const m=(t,s)=>{if(t instanceof Error)return(0,e.assertInstanceOf)(t,s,t);throw new Error(`assertErrorInstanceOf received non-Error argument of type "${typeof t}" and string representation "${t}"`)};e.assertErrorInstanceOf=m})(M);const O=b.div`
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
    background: ${e=>e.variant==="light"?w.black:w.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    height: 0.5rem;
    margin: -0.25rem 0 0 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`,x=b.div`
  background-color: ${w.white};
  border: 1px solid ${w.pale};
  padding: 0.3rem 0;
  position: absolute;
  z-index: 10;
`,$=b.button`
  align-items: center;
  background-color: ${w.white};
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
    background-color: ${w.pale};
  }
`,L=({disabled:e})=>{const[n,a]=c.useState(),r=n!==void 0,l=c.useCallback(()=>a(void 0),[]),d=c.useCallback(i=>a(e?void 0:i),[e]),o=c.useCallback(()=>r?l():d("first"),[l,r,d]);return{disabled:e,closeMenu:l,isOpen:r,openFocus:n,openMenu:d,toggleMenu:o}},y=c.createContext({closeMenu:()=>{throw new Error("Tried to call closeMenu() without a DropdownMenuContext")},disabled:!0,isOpen:!1,openFocus:void 0,openMenu:()=>{throw new Error("Tried to call openMenu() without a DropdownMenuContext")},toggleMenu:()=>{throw new Error("Tried to call toggleMenu() without a DropdownMenuContext")}}),F=({id:e,menuId:n,text:a,variant:r,width:l})=>{const{disabled:d,isOpen:o,openMenu:i,toggleMenu:m}=c.useContext(y),t=c.useCallback(s=>{switch(s.key){case"ArrowDown":i("first"),s.preventDefault();break;case"ArrowUp":i("last"),s.preventDefault();break}},[i]);return u(v,{"aria-haspopup":"true","aria-controls":n,"aria-expanded":o,disabled:d,id:e,onClick:m,onKeyDown:t,type:"button",variant:r,width:l,children:a})},f=e=>{e instanceof HTMLElement&&e.focus()},A=({children:e,...n})=>{const{openFocus:a}=c.useContext(y),r=c.useRef(null);return c.useEffect(()=>{r.current&&f(a==="first"?r.current.firstElementChild:r.current.lastElementChild)},[a,r]),u(x,{...n,ref:r,role:"menu",children:e})},k=({children:e,disabled:n,id:a,text:r,variant:l,width:d})=>{const o=c.useRef(null),i=L({disabled:n});c.useEffect(()=>{const t=s=>{o.current&&o.current.contains(s.target)||i.closeMenu()};return window.addEventListener("click",t),()=>window.removeEventListener("click",t)},[o]);const m=`${a}-button`;return u(O,{ref:o,children:g(y.Provider,{value:i,children:[u(F,{id:m,menuId:a,text:r,variant:l,width:d}),i.isOpen?u(A,{"aria-labelledby":m,id:a,children:e}):null]})})},h=(e,n)=>M.assertInstanceOf(e,Element,n),D=e=>h(h(e.parentElement,"menuItem has no parent").firstElementChild,"menuItemContainer is empty"),S=e=>h(h(e.parentElement,"menuItem has no parent").lastElementChild,"menuItemContainer is empty"),E=e=>{var n;return(n=e.nextElementSibling)!=null?n:D(e)},j=e=>{var n;return(n=e.previousElementSibling)!=null?n:S(e)},p=({children:e,onClick:n,...a})=>{const{closeMenu:r}=c.useContext(y),l=c.useCallback(o=>{n&&n(o),r()},[r,n]),d=c.useCallback(o=>{switch(o.key){case"Escape":r(),f(h(h(o.currentTarget.parentElement,"menuItem has no parent").parentElement,"menuItemContainer has no parent").firstElementChild);break;case"ArrowUp":f(j(o.currentTarget)),o.preventDefault();break;case"ArrowDown":f(E(o.currentTarget)),o.preventDefault();break;case"Home":f(D(o.currentTarget)),o.preventDefault();break;case"End":f(S(o.currentTarget)),o.preventDefault();break;default:if(/^[A-Za-z]$/.test(o.key)){for(let i=E(o.currentTarget);i!==o.currentTarget&&i instanceof HTMLElement;i=E(i))if(M.assertString(i.textContent,"menuItem has no textContent").toLowerCase().startsWith(o.key.toLowerCase())){f(i);break}}}},[r]);return u($,{...a,onClick:l,onKeyDown:d,role:"menuitem",children:e})},C=e=>{const[n,a]=c.useState(!1),r=l=>{a(!0),console.log(`Activated "${l.currentTarget.innerText}"`),setTimeout(()=>{a(!1)},1e3)};return g(T,{children:[g(k,{disabled:n,id:"enabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[u(p,{onClick:r,children:"Sync only completed grades to LMS"}),u(p,{onClick:r,children:"Sync all grades to LMS (including partial)"}),u(p,{onClick:r,children:"Export grades to .csv"})]}),u("br",{}),g(k,{disabled:!0,id:"disabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[u(p,{onClick:r,children:"Sync only completed grades to LMS"}),u(p,{onClick:r,children:"Sync all grades to LMS (including partial)"}),u(p,{onClick:r,children:"Export grades to .csv"})]})]})},R=()=>C("light"),H=()=>C("primary"),P=()=>C("secondary");typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Light,H as Primary,P as Secondary};
