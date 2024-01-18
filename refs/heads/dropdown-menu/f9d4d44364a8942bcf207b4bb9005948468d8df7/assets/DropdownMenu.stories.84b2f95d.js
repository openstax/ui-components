import{s as x,R as l,j as p,a as n,F as k}from"./index.a60fc8e9.js";import{a as z}from"./buttons.e367a9d2.js";import{p as f}from"./palette.15e4d008.js";const G=x.div`
  position: relative;
`,I=x.button`
  ${e=>z(e.variant)}

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
    background: ${e=>e.variant==="light"?f.black:f.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    height: 0.5rem;
    margin: -0.25rem 0 0 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`,j=x.div`
  background-color: ${f.white};
  border: 1px solid ${f.pale};
  padding: 0.3rem 0;
  position: absolute;
  z-index: 10;
`,B=x.button`
  align-items: center;
  background-color: ${f.white};
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
    background-color: ${f.pale};
  }
`,O=({disabled:e,id:t,isOpen:u,menuId:i,openMenu:s,text:d,toggleMenu:r,variant:h,width:c})=>{const g=l.useCallback(y=>{switch(y.key){case"ArrowDown":s("first");break;case"ArrowUp":s("last");break}},[s]);return n(I,{"aria-haspopup":"true","aria-controls":i,"aria-expanded":u,disabled:e,id:t,onClick:r,onKeyDown:g,type:"button",variant:h,width:c,children:d})},w=e=>{const{disabled:t}=e!=null?e:{disabled:!1},[u,i]=l.useState(),s=u!==void 0,d=l.useCallback(()=>i(void 0),[]),r=l.useCallback(c=>i(t?void 0:c),[t]),h=l.useCallback(()=>s?d():r("first"),[s]);return{disabled:t,closeMenu:d,isOpen:s,openFocus:u,openMenu:r,toggleMenu:h}},b=e=>{e instanceof HTMLElement&&e.focus()},R=({children:e,openFocus:t,...u})=>{const i=l.useRef(null);return l.useEffect(()=>{var s,d;b(t==="first"?(s=i.current)==null?void 0:s.firstElementChild:(d=i.current)==null?void 0:d.lastElementChild)},[t,i]),n(j,{...u,ref:i,role:"menu",children:e})},S=({id:e,state:t,text:u,variant:i,children:s,width:d})=>{const r=l.useRef(null),{closeMenu:h,disabled:c,isOpen:g,openFocus:y,openMenu:m,toggleMenu:$}=t;l.useEffect(()=>{const v=A=>{var L;(L=r.current)!=null&&L.contains(A.target)||h()};return window.addEventListener("click",v),()=>window.removeEventListener("click",v)},[r]);const M=`${e}-button`;return p(G,{ref:r,children:[n(O,{disabled:c,id:M,isOpen:g,menuId:e,openMenu:m,toggleMenu:$,text:u,variant:i,width:d}),g?n(R,{"aria-labelledby":M,id:e,openFocus:y,children:s}):null]})},C=e=>{var t;return(t=e.parentElement)==null?void 0:t.firstElementChild},D=e=>{var t;return(t=e.parentElement)==null?void 0:t.lastElementChild},E=e=>{var t;return(t=e.nextElementSibling)!=null?t:C(e)},T=e=>{var t;return(t=e.previousElementSibling)!=null?t:D(e)},a=({children:e,onClick:t,state:u,...i})=>{const{closeMenu:s}=u,d=l.useCallback(c=>{t&&t(c),s()},[s,t]),r=l.useRef(null),h=l.useCallback(c=>{var g,y;if(!!r.current)switch(c.key){case"Escape":s(),b((y=(g=r.current.parentElement)==null?void 0:g.parentElement)==null?void 0:y.firstElementChild);break;case"ArrowUp":b(T(r.current));break;case"ArrowDown":b(E(r.current));break;case"Home":b(C(r.current));break;case"End":b(D(r.current));break;default:if(/^[A-Za-z]$/.test(c.key)){for(let m=E(r.current);m!==r.current&&m instanceof HTMLElement;m=E(m))if(m.innerText.toLowerCase().startsWith(c.key.toLowerCase())){b(m);break}}}},[s]);return n(B,{...i,onClick:d,onKeyDown:h,ref:r,role:"menuitem",children:e})},o=e=>{console.log(`Activated "${e.currentTarget.innerText}"`)},K=()=>{const e=w(),t=w({disabled:!0});return p(k,{children:[p(S,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"primary",children:[n(a,{onClick:o,state:e,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:e,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:e,children:"Export grades to .csv"})]}),n("br",{}),p(S,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"primary",children:[n(a,{onClick:o,state:t,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:t,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:t,children:"Export grades to .csv"})]})]})},U=()=>{const e=w(),t=w({disabled:!0});return p(k,{children:[p(S,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"light",children:[n(a,{onClick:o,state:e,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:e,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:e,children:"Export grades to .csv"})]}),n("br",{}),p(S,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"light",children:[n(a,{onClick:o,state:t,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:t,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:t,children:"Export grades to .csv"})]})]})},P=()=>{const e=w(),t=w({disabled:!0});return p(k,{children:[p(S,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"secondary",children:[n(a,{onClick:o,state:e,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:e,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:e,children:"Export grades to .csv"})]}),n("br",{}),p(S,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"secondary",children:[n(a,{onClick:o,state:t,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:t,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:t,children:"Export grades to .csv"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{U as Light,K as Primary,P as Secondary};
