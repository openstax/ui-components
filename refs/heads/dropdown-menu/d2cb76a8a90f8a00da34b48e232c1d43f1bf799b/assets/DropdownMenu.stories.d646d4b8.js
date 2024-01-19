import{s as x,R as d,j as p,a as n,F as k}from"./index.891dfee8.js";import{a as z}from"./buttons.b85d67a0.js";import{p as f}from"./palette.15e4d008.js";const G=x.div`
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
`,O=({disabled:e,id:t,isOpen:u,menuId:l,openMenu:s,text:c,toggleMenu:r,variant:g,width:i})=>{const b=d.useCallback(m=>{switch(m.key){case"ArrowDown":s("first"),m.preventDefault();break;case"ArrowUp":s("last"),m.preventDefault();break}},[s]);return n(I,{"aria-haspopup":"true","aria-controls":l,"aria-expanded":u,disabled:e,id:t,onClick:r,onKeyDown:b,type:"button",variant:g,width:i,children:c})},w=e=>{const{disabled:t}=e!=null?e:{disabled:!1},[u,l]=d.useState(),s=u!==void 0,c=d.useCallback(()=>l(void 0),[]),r=d.useCallback(i=>l(t?void 0:i),[t]),g=d.useCallback(()=>s?c():r("first"),[s]);return{disabled:t,closeMenu:c,isOpen:s,openFocus:u,openMenu:r,toggleMenu:g}},y=e=>{e instanceof HTMLElement&&e.focus()},R=({children:e,openFocus:t,...u})=>{const l=d.useRef(null);return d.useEffect(()=>{var s,c;y(t==="first"?(s=l.current)==null?void 0:s.firstElementChild:(c=l.current)==null?void 0:c.lastElementChild)},[t,l]),n(j,{...u,ref:l,role:"menu",children:e})},S=({id:e,state:t,text:u,variant:l,children:s,width:c})=>{const r=d.useRef(null),{closeMenu:g,disabled:i,isOpen:b,openFocus:m,openMenu:h,toggleMenu:$}=t;d.useEffect(()=>{const v=A=>{var D;(D=r.current)!=null&&D.contains(A.target)||g()};return window.addEventListener("click",v),()=>window.removeEventListener("click",v)},[r]);const M=`${e}-button`;return p(G,{ref:r,children:[n(O,{disabled:i,id:M,isOpen:b,menuId:e,openMenu:h,toggleMenu:$,text:u,variant:l,width:c}),b?n(R,{"aria-labelledby":M,id:e,openFocus:m,children:s}):null]})},L=e=>{var t;return(t=e.parentElement)==null?void 0:t.firstElementChild},C=e=>{var t;return(t=e.parentElement)==null?void 0:t.lastElementChild},E=e=>{var t;return(t=e.nextElementSibling)!=null?t:L(e)},T=e=>{var t;return(t=e.previousElementSibling)!=null?t:C(e)},a=({children:e,onClick:t,state:u,...l})=>{const{closeMenu:s}=u,c=d.useCallback(i=>{t&&t(i),s()},[s,t]),r=d.useRef(null),g=d.useCallback(i=>{var b,m;if(!!r.current)switch(i.key){case"Escape":s(),y((m=(b=r.current.parentElement)==null?void 0:b.parentElement)==null?void 0:m.firstElementChild);break;case"ArrowUp":y(T(r.current)),i.preventDefault();break;case"ArrowDown":y(E(r.current)),i.preventDefault();break;case"Home":y(L(r.current)),i.preventDefault();break;case"End":y(C(r.current)),i.preventDefault();break;default:if(/^[A-Za-z]$/.test(i.key)){for(let h=E(r.current);h!==r.current&&h instanceof HTMLElement;h=E(h))if(h.innerText.toLowerCase().startsWith(i.key.toLowerCase())){y(h);break}}}},[s]);return n(B,{...l,onClick:c,onKeyDown:g,ref:r,role:"menuitem",children:e})},o=e=>{console.log(`Activated "${e.currentTarget.innerText}"`)},K=()=>{const e=w(),t=w({disabled:!0});return p(k,{children:[p(S,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"primary",children:[n(a,{onClick:o,state:e,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:e,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:e,children:"Export grades to .csv"})]}),n("br",{}),p(S,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"primary",children:[n(a,{onClick:o,state:t,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:t,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:t,children:"Export grades to .csv"})]})]})},U=()=>{const e=w(),t=w({disabled:!0});return p(k,{children:[p(S,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"light",children:[n(a,{onClick:o,state:e,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:e,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:e,children:"Export grades to .csv"})]}),n("br",{}),p(S,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"light",children:[n(a,{onClick:o,state:t,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:t,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:t,children:"Export grades to .csv"})]})]})},P=()=>{const e=w(),t=w({disabled:!0});return p(k,{children:[p(S,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"secondary",children:[n(a,{onClick:o,state:e,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:e,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:e,children:"Export grades to .csv"})]}),n("br",{}),p(S,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"secondary",children:[n(a,{onClick:o,state:t,children:"Sync only completed grades to LMS"}),n(a,{onClick:o,state:t,children:"Sync all grades to LMS (including partial)"}),n(a,{onClick:o,state:t,children:"Export grades to .csv"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{U as Light,K as Primary,P as Secondary};
