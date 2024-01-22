import{s as f,R as s,a as t,j as p,F as M}from"./index.2e4fed40.js";import{a as C}from"./buttons.ab7f4eb1.js";import{p as b}from"./palette.15e4d008.js";const D=f.div`
  position: relative;
`,L=f.button`
  ${e=>C(e.variant)}

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
    background: ${e=>e.variant==="light"?b.black:b.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    height: 0.5rem;
    margin: -0.25rem 0 0 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`,$=f.div`
  background-color: ${b.white};
  border: 1px solid ${b.pale};
  padding: 0.3rem 0;
  position: absolute;
  z-index: 10;
`,T=f.button`
  align-items: center;
  background-color: ${b.white};
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
    background-color: ${b.pale};
  }
`,A=({disabled:e})=>{const[n,c]=s.useState(),l=n!==void 0,u=s.useCallback(()=>c(void 0),[]),r=s.useCallback(o=>c(e?void 0:o),[e]),h=s.useCallback(()=>l?u():r("first"),[l]);return{disabled:e,closeMenu:u,isOpen:l,openFocus:n,openMenu:r,toggleMenu:h}},x=s.createContext({closeMenu:()=>{throw new Error("Tried to call closeMenu() without a DropdownMenuContext")},disabled:!0,isOpen:!1,openFocus:void 0,openMenu:()=>{throw new Error("Tried to call openMenu() without a DropdownMenuContext")},toggleMenu:()=>{throw new Error("Tried to call toggleMenu() without a DropdownMenuContext")}}),O=({id:e,menuId:n,text:c,variant:l,width:u})=>{const{disabled:r,isOpen:h,openMenu:o,toggleMenu:g}=s.useContext(x),m=s.useCallback(d=>{switch(d.key){case"ArrowDown":o("first"),d.preventDefault();break;case"ArrowUp":o("last"),d.preventDefault();break}},[o]);return t(L,{"aria-haspopup":"true","aria-controls":n,"aria-expanded":h,disabled:r,id:e,onClick:g,onKeyDown:m,type:"button",variant:l,width:u,children:c})},w=e=>{e instanceof HTMLElement&&e.focus()},z=({children:e,...n})=>{const{openFocus:c}=s.useContext(x),l=s.useRef(null);return s.useEffect(()=>{var u,r;w(c==="first"?(u=l.current)==null?void 0:u.firstElementChild:(r=l.current)==null?void 0:r.lastElementChild)},[c,l]),t($,{...n,ref:l,role:"menu",children:e})},y=({children:e,disabled:n,id:c,text:l,variant:u,width:r})=>{const h=s.useRef(null),o=A({disabled:n});s.useEffect(()=>{const m=d=>{var E;(E=h.current)!=null&&E.contains(d.target)||o.closeMenu()};return window.addEventListener("click",m),()=>window.removeEventListener("click",m)},[h]);const g=`${c}-button`;return t(D,{ref:h,children:p(x.Provider,{value:o,children:[t(O,{id:g,menuId:c,text:l,variant:u,width:r}),o.isOpen?t(z,{"aria-labelledby":g,id:c,children:e}):null]})})},k=e=>{var n;return(n=e.parentElement)==null?void 0:n.firstElementChild},v=e=>{var n;return(n=e.parentElement)==null?void 0:n.lastElementChild},S=e=>{var n;return(n=e.nextElementSibling)!=null?n:k(e)},F=e=>{var n;return(n=e.previousElementSibling)!=null?n:v(e)},a=({children:e,onClick:n,...c})=>{const{closeMenu:l}=s.useContext(x),u=s.useCallback(o=>{n&&n(o),l()},[l,n]),r=s.useRef(null),h=s.useCallback(o=>{var g,m;if(!!r.current)switch(o.key){case"Escape":l(),w((m=(g=r.current.parentElement)==null?void 0:g.parentElement)==null?void 0:m.firstElementChild);break;case"ArrowUp":w(F(r.current)),o.preventDefault();break;case"ArrowDown":w(S(r.current)),o.preventDefault();break;case"Home":w(k(r.current)),o.preventDefault();break;case"End":w(v(r.current)),o.preventDefault();break;default:if(/^[A-Za-z]$/.test(o.key)){for(let d=S(r.current);d!==r.current&&d instanceof HTMLElement;d=S(d))if(d.innerText.toLowerCase().startsWith(o.key.toLowerCase())){w(d);break}}}},[l]);return t(T,{...c,onClick:u,onKeyDown:h,ref:r,role:"menuitem",children:e})},i=e=>{console.log(`Activated "${e.currentTarget.innerText}"`)},B=()=>p(M,{children:[p(y,{id:"enabled-grades-menu",text:"Sync/Export Grades",variant:"primary",children:[t(a,{onClick:i,children:"Sync only completed grades to LMS"}),t(a,{onClick:i,children:"Sync all grades to LMS (including partial)"}),t(a,{onClick:i,children:"Export grades to .csv"})]}),t("br",{}),p(y,{disabled:!0,id:"disabled-grades-menu",text:"Sync/Export Grades",variant:"primary",children:[t(a,{onClick:i,children:"Sync only completed grades to LMS"}),t(a,{onClick:i,children:"Sync all grades to LMS (including partial)"}),t(a,{onClick:i,children:"Export grades to .csv"})]})]}),R=()=>p(M,{children:[p(y,{id:"enabled-grades-menu",text:"Sync/Export Grades",variant:"light",children:[t(a,{onClick:i,children:"Sync only completed grades to LMS"}),t(a,{onClick:i,children:"Sync all grades to LMS (including partial)"}),t(a,{onClick:i,children:"Export grades to .csv"})]}),t("br",{}),p(y,{disabled:!0,id:"disabled-grades-menu",text:"Sync/Export Grades",variant:"light",children:[t(a,{onClick:i,children:"Sync only completed grades to LMS"}),t(a,{onClick:i,children:"Sync all grades to LMS (including partial)"}),t(a,{onClick:i,children:"Export grades to .csv"})]})]}),W=()=>p(M,{children:[p(y,{id:"enabled-grades-menu",text:"Sync/Export Grades",variant:"secondary",children:[t(a,{onClick:i,children:"Sync only completed grades to LMS"}),t(a,{onClick:i,children:"Sync all grades to LMS (including partial)"}),t(a,{onClick:i,children:"Export grades to .csv"})]}),t("br",{}),p(y,{disabled:!0,id:"disabled-grades-menu",text:"Sync/Export Grades",variant:"secondary",children:[t(a,{onClick:i,children:"Sync only completed grades to LMS"}),t(a,{onClick:i,children:"Sync all grades to LMS (including partial)"}),t(a,{onClick:i,children:"Export grades to .csv"})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Light,B as Primary,W as Secondary};
