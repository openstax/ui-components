import{s as S,R as g,j as o,a as n,F as x}from"./index.7266e4dc.js";import{a as k}from"./buttons.21f2d04e.js";import{p}from"./palette.15e4d008.js";const L=S.div`
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
    background: ${e=>e.variant==="light"?p.black:p.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    height: 0.5rem;
    margin: -0.25rem 0 0 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`,$=S.div`
  background-color: ${p.white};
  border: 1px solid ${p.pale};
  padding: 0.3rem 0;
  position: absolute;
  z-index: 10;
`,D=S.button`
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
`,G=({disabled:e,id:t,isOpen:d,menuId:i,text:s,toggleMenu:l,variant:c,width:w})=>n(C,{"aria-haspopup":"true","aria-controls":i,"aria-expanded":d,disabled:e,id:t,onClick:l,type:"button",variant:c,width:w,children:s}),h=e=>{const{disabled:t}=e!=null?e:{disabled:!1},[d,i]=g.useState(!1),s=g.useCallback(()=>i(!1),[]),l=g.useCallback(()=>{i(!t&&!d)},[t,d]);return{disabled:t,closeMenu:s,isOpen:d,toggleMenu:l}},m=({id:e,state:t,text:d,variant:i,children:s,width:l})=>{const c=`${e}-button`,{disabled:w,closeMenu:v,isOpen:b,toggleMenu:E}=t,u=g.useRef(null);return g.useEffect(()=>{if(b&&u.current){const y=u.current.firstElementChild;y instanceof HTMLElement&&y.focus()}const f=y=>{var M;b&&!((M=u.current)!=null&&M.contains(y.target))&&v()};return window.addEventListener("click",f),()=>window.removeEventListener("click",f)},[b,u]),o(L,{ref:u,children:[n(G,{disabled:w,id:c,isOpen:b,menuId:e,parentRef:u,toggleMenu:E,text:d,variant:i,width:l}),b?n($,{id:e,role:"menu","aria-labelledby":c,children:s}):null]})},r=({children:e,onClick:t,state:d,...i})=>{const{closeMenu:s}=d,l=g.useCallback(c=>{t&&t(c),s()},[s,t]);return n(D,{role:"menuitem",onClick:l,...i,children:e})},a=e=>{console.log(`Clicked on "${e.currentTarget.innerText}"`)},O=()=>{const e=h(),t=h({disabled:!0});return o(x,{children:[o(m,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"primary",children:[n(r,{onClick:a,state:e,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:e,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:e,children:"Export grades to .csv"})]}),n("br",{}),o(m,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"primary",children:[n(r,{onClick:a,state:t,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:t,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:t,children:"Export grades to .csv"})]})]})},R=()=>{const e=h(),t=h({disabled:!0});return o(x,{children:[o(m,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"light",children:[n(r,{onClick:a,state:e,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:e,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:e,children:"Export grades to .csv"})]}),n("br",{}),o(m,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"light",children:[n(r,{onClick:a,state:t,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:t,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:t,children:"Export grades to .csv"})]})]})},B=()=>{const e=h(),t=h({disabled:!0});return o(x,{children:[o(m,{id:"enabled-grades-menu",state:e,text:"Sync/Export Grades",variant:"secondary",children:[n(r,{onClick:a,state:e,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:e,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:e,children:"Export grades to .csv"})]}),n("br",{}),o(m,{id:"disabled-grades-menu",state:t,text:"Sync/Export Grades",variant:"secondary",children:[n(r,{onClick:a,state:t,children:"Sync only completed grades to LMS"}),n(r,{onClick:a,state:t,children:"Sync all grades to LMS (including partial)"}),n(r,{onClick:a,state:t,children:"Export grades to .csv"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Light,O as Primary,B as Secondary};
