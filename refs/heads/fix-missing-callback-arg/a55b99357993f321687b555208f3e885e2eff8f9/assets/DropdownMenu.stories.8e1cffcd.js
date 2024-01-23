import{s as b,R as a,a as i,j as f,F as D}from"./index.38e99e36.js";import{a as S}from"./buttons.4f6b79aa.js";import{p as h}from"./palette.15e4d008.js";const T=b.div`
  position: relative;
`,L=b.button`
  ${e=>S(e.variant)}

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
    background: ${e=>e.variant==="light"?h.black:h.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    height: 0.5rem;
    margin: -0.25rem 0 0 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`,$=b.div`
  background-color: ${h.white};
  border: 1px solid ${h.pale};
  padding: 0.3rem 0;
  position: absolute;
  z-index: 10;
`,v=b.button`
  align-items: center;
  background-color: ${h.white};
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
    background-color: ${h.pale};
  }
`,A=({disabled:e})=>{const[t,r]=a.useState(),n=t!==void 0,s=a.useCallback(()=>r(void 0),[]),l=a.useCallback(c=>r(e?void 0:c),[e]),o=a.useCallback(()=>n?s():l("first"),[s,n,l]);return{disabled:e,closeMenu:s,isOpen:n,openFocus:t,openMenu:l,toggleMenu:o}},y=a.createContext({closeMenu:()=>{throw new Error("Tried to call closeMenu() without a DropdownMenuContext")},disabled:!0,isOpen:!1,openFocus:void 0,openMenu:()=>{throw new Error("Tried to call openMenu() without a DropdownMenuContext")},toggleMenu:()=>{throw new Error("Tried to call toggleMenu() without a DropdownMenuContext")}}),O=({id:e,menuId:t,text:r,variant:n,width:s})=>{const{disabled:l,isOpen:o,openMenu:c,toggleMenu:p}=a.useContext(y),m=a.useCallback(u=>{switch(u.key){case"ArrowDown":c("first"),u.preventDefault();break;case"ArrowUp":c("last"),u.preventDefault();break}},[c]);return i(L,{"aria-haspopup":"true","aria-controls":t,"aria-expanded":o,disabled:l,id:e,onClick:p,onKeyDown:m,type:"button",variant:n,width:s,children:r})},g=e=>{e instanceof HTMLElement&&e.focus()},z=({children:e,...t})=>{const{openFocus:r}=a.useContext(y),n=a.useRef(null);return a.useEffect(()=>{var s,l;g(r==="first"?(s=n.current)==null?void 0:s.firstElementChild:(l=n.current)==null?void 0:l.lastElementChild)},[r,n]),i($,{...t,ref:n,role:"menu",children:e})},k=({children:e,disabled:t,id:r,text:n,variant:s,width:l})=>{const o=a.useRef(null),c=A({disabled:t});a.useEffect(()=>{const m=u=>{var d;(d=o.current)!=null&&d.contains(u.target)||c.closeMenu()};return window.addEventListener("click",m),()=>window.removeEventListener("click",m)},[o]);const p=`${r}-button`;return i(T,{ref:o,children:f(y.Provider,{value:c,children:[i(O,{id:p,menuId:r,text:n,variant:s,width:l}),c.isOpen?i(z,{"aria-labelledby":p,id:r,children:e}):null]})})},E=e=>{var t;return(t=e.parentElement)==null?void 0:t.firstElementChild},C=e=>{var t;return(t=e.parentElement)==null?void 0:t.lastElementChild},x=e=>{var t;return(t=e.nextElementSibling)!=null?t:E(e)},F=e=>{var t;return(t=e.previousElementSibling)!=null?t:C(e)},w=({children:e,onClick:t,...r})=>{const{closeMenu:n}=a.useContext(y),s=a.useCallback(o=>{t&&t(o),n()},[n,t]),l=a.useCallback(o=>{var c,p,m,u;switch(o.key){case"Escape":n(),g((p=(c=o.currentTarget.parentElement)==null?void 0:c.parentElement)==null?void 0:p.firstElementChild);break;case"ArrowUp":g(F(o.currentTarget)),o.preventDefault();break;case"ArrowDown":g(x(o.currentTarget)),o.preventDefault();break;case"Home":g(E(o.currentTarget)),o.preventDefault();break;case"End":g(C(o.currentTarget)),o.preventDefault();break;default:if(/^[A-Za-z]$/.test(o.key)){for(let d=x(o.currentTarget);d!==o.currentTarget&&d instanceof HTMLElement;d=x(d))if((u=(m=d.textContent)==null?void 0:m.toLowerCase())!=null&&u.startsWith(o.key.toLowerCase())){g(d);break}}}},[n]);return i(v,{...r,onClick:s,onKeyDown:l,role:"menuitem",children:e})},M=e=>{const[t,r]=a.useState(!1),n=s=>{r(!0),console.log(`Activated "${s.currentTarget.innerText}"`),setTimeout(()=>{r(!1)},1e3)};return f(D,{children:[f(k,{disabled:t,id:"enabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[i(w,{onClick:n,children:"Sync only completed grades to LMS"}),i(w,{onClick:n,children:"Sync all grades to LMS (including partial)"}),i(w,{onClick:n,children:"Export grades to .csv"})]}),i("br",{}),f(k,{disabled:!0,id:"disabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[i(w,{onClick:n,children:"Sync only completed grades to LMS"}),i(w,{onClick:n,children:"Sync all grades to LMS (including partial)"}),i(w,{onClick:n,children:"Export grades to .csv"})]})]})},W=()=>M("light"),R=()=>M("primary"),H=()=>M("secondary");typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{W as Light,R as Primary,H as Secondary};
