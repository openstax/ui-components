import{s as S,R as p,j as o,a as n,F as w}from"./index.e439515c.js";import{a as k}from"./buttons.964b8cb7.js";import{p as g}from"./palette.15e4d008.js";const L=S.div`
  position: relative;
`,C=S.button`
  ${e=>k(e.variant)}

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
    background: ${e=>e.variant==="light"?g.black:g.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    height: 0.5rem;
    margin: -0.25rem 0 0 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`,$=S.div`
  background-color: ${g.white};
  border: 1px solid ${g.pale};
  padding: 0.3rem 0;
  position: absolute;
  z-index: 10;
`,D=S.button`
  align-items: center;
  background-color: ${g.white};
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
    background-color: ${g.pale};
  }
`,G=({disabled:e,id:t,isOpen:d,menuId:i,text:s,toggleMenu:l,variant:c,width:f})=>n(C,{"aria-haspopup":"true","aria-controls":i,"aria-expanded":d,disabled:e,id:t,onClick:l,type:"button",variant:c,width:f,children:s}),m=e=>{const{disabled:t}=e!=null?e:{disabled:!1},[d,i]=p.useState(!1),s=p.useCallback(()=>i(!1),[]),l=p.useCallback(()=>{i(!t&&!d)},[t,d]);return{disabled:t,closeMenu:s,isOpen:d,toggleMenu:l}},h=({id:e,state:t,text:d,variant:i,children:s,width:l})=>{const c=`${e}-button`,{disabled:f,closeMenu:v,isOpen:b,toggleMenu:E}=t,u=p.useRef(null);return p.useEffect(()=>{if(b&&u.current){const y=u.current.firstElementChild;y instanceof HTMLElement&&y.focus()}const x=y=>{var M;b&&!((M=u.current)!=null&&M.contains(y.target))&&v()};return window.addEventListener("click",x),()=>window.removeEventListener("click",x)},[b,u]),o(L,{ref:u,children:[n(G,{disabled:f,id:c,isOpen:b,menuId:e,parentRef:u,toggleMenu:E,text:d,variant:i,width:l}),b?n($,{id:e,role:"menu","aria-labelledby":c,children:s}):null]})},r=({children:e,onClick:t,state:d,...i})=>{const{closeMenu:s}=d,l=p.useCallback(c=>{t&&t(c),s()},[s,t]);return n(D,{role:"menuitem",onClick:l,...i,children:e})},a=e=>alert(`Clicked on menu item for "${e.currentTarget.innerText}"`),O=()=>{const e=m(),t=m({disabled:!0});return o(w,{children:[o(h,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"primary",children:[n(r,{onClick:a,state:e,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:e,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:e,children:"Export grades to .csv"})]}),n("br",{}),o(h,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"primary",children:[n(r,{onClick:a,state:t,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:t,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:t,children:"Export grades to .csv"})]})]})},R=()=>{const e=m(),t=m({disabled:!0});return o(w,{children:[o(h,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"light",children:[n(r,{onClick:a,state:e,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:e,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:e,children:"Export grades to .csv"})]}),n("br",{}),o(h,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"light",children:[n(r,{onClick:a,state:t,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:t,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:t,children:"Export grades to .csv"})]})]})},B=()=>{const e=m(),t=m({disabled:!0});return o(w,{children:[o(h,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"secondary",children:[n(r,{onClick:a,state:e,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:e,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:e,children:"Export grades to .csv"})]}),n("br",{}),o(h,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"secondary",children:[n(r,{onClick:a,state:t,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:t,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:t,children:"Export grades to .csv"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Light,O as Primary,B as Secondary};
