import{s as b,R as s,a as i,j as f,F as S}from"./index.027d2ba3.js";import{a as T}from"./buttons.928264af.js";import{p as m}from"./palette.15e4d008.js";import{a as d,f as u}from"./utils.1b163e53.js";const I=b.div`
  position: relative;
`,$=b.button`
  ${e=>T(e.variant)}

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
    background: ${e=>e.variant==="light"?m.black:m.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    height: 0.5rem;
    margin: -0.25rem 0 0 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`,v=b.div`
  background-color: ${m.white};
  border: 1px solid ${m.pale};
  padding: 0.3rem 0;
  position: absolute;
  z-index: 10;
`,L=b.button`
  align-items: center;
  background-color: ${m.white};
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
    background-color: ${m.pale};
  }
`,A=({disabled:e})=>{const[o,r]=s.useState(),t=o!==void 0,l=s.useCallback(()=>r(void 0),[]),c=s.useCallback(a=>r(e?void 0:a),[e]),n=s.useCallback(()=>t?l():c("first"),[l,t,c]);return{disabled:e,closeMenu:l,isOpen:t,openFocus:o,openMenu:c,toggleMenu:n}},y=s.createContext({closeMenu:()=>{throw new Error("Tried to call closeMenu() without a DropdownMenuContext")},disabled:!0,isOpen:!1,openFocus:void 0,openMenu:()=>{throw new Error("Tried to call openMenu() without a DropdownMenuContext")},toggleMenu:()=>{throw new Error("Tried to call toggleMenu() without a DropdownMenuContext")}}),O=({id:e,menuId:o,text:r,variant:t,width:l})=>{const{disabled:c,isOpen:n,openMenu:a,toggleMenu:h}=s.useContext(y),w=s.useCallback(g=>{switch(g.key){case"ArrowDown":a("first"),g.preventDefault();break;case"ArrowUp":a("last"),g.preventDefault();break}},[a]);return i($,{"aria-haspopup":"true","aria-controls":o,"aria-expanded":n,disabled:c,id:e,onClick:h,onKeyDown:w,type:"button",variant:t,width:l,children:r})},z=({children:e,...o})=>{const{openFocus:r}=s.useContext(y),t=s.useRef(null);return s.useEffect(()=>{t.current&&u(r==="first"?t.current.firstElementChild:t.current.lastElementChild)},[r,t]),i(v,{...o,ref:t,role:"menu",children:e})},M=({children:e,disabled:o,id:r,text:t,variant:l,width:c})=>{const n=s.useRef(null),a=A({disabled:o});s.useEffect(()=>{const w=g=>{var k;(k=n.current)!=null&&k.contains(g.target)||a.closeMenu()};return window.addEventListener("click",w),()=>window.removeEventListener("click",w)},[n]);const h=`${r}-button`;return i(I,{ref:n,children:f(y.Provider,{value:a,children:[i(O,{id:h,menuId:r,text:t,variant:l,width:c}),a.isOpen?i(z,{"aria-labelledby":h,id:r,children:e}):null]})})},E=e=>d(d(e.parentElement,"menuItem has no parent").firstElementChild,"menuItemContainer is empty"),D=e=>d(d(e.parentElement,"menuItem has no parent").lastElementChild,"menuItemContainer is empty"),x=e=>{var o;return(o=e.nextElementSibling)!=null?o:E(e)},F=e=>{var o;return(o=e.previousElementSibling)!=null?o:D(e)},p=({children:e,onClick:o,...r})=>{const{closeMenu:t}=s.useContext(y),l=s.useCallback(n=>{o&&o(n),t()},[t,o]),c=s.useCallback(n=>{switch(n.key){case"Escape":t(),u(d(d(n.currentTarget.parentElement,"menuItem has no parent").parentElement,"menuItemContainer has no parent").firstElementChild);break;case"ArrowUp":u(F(n.currentTarget)),n.preventDefault();break;case"ArrowDown":u(x(n.currentTarget)),n.preventDefault();break;case"Home":u(E(n.currentTarget)),n.preventDefault();break;case"End":u(D(n.currentTarget)),n.preventDefault();break;default:if(/^[A-Za-z]$/.test(n.key)){for(let a=x(n.currentTarget);a!==n.currentTarget&&a instanceof HTMLElement;a=x(a))if(d(a.textContent,"menuItem has no textContent").toLowerCase().startsWith(n.key.toLowerCase())){u(a);break}}}},[t]);return i(L,{...r,onClick:l,onKeyDown:c,role:"menuitem",children:e})},C=e=>{const[o,r]=s.useState(!1),t=l=>{r(!0),console.log(`Activated "${l.currentTarget.innerText}"`),setTimeout(()=>{r(!1)},1e3)};return f(S,{children:[f(M,{disabled:o,id:"enabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[i(p,{onClick:t,children:"Sync only completed grades to LMS"}),i(p,{onClick:t,children:"Sync all grades to LMS (including partial)"}),i(p,{onClick:t,children:"Export grades to .csv"})]}),i("br",{}),f(M,{disabled:!0,id:"disabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[i(p,{onClick:t,children:"Sync only completed grades to LMS"}),i(p,{onClick:t,children:"Sync all grades to LMS (including partial)"}),i(p,{onClick:t,children:"Export grades to .csv"})]})]})},G=()=>C("light"),H=()=>C("primary"),K=()=>C("secondary");typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{G as Light,H as Primary,K as Secondary};
