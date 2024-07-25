import{s as b,j as a,a as t,R as g,F as h}from"./index.ca05a9ee.js";import{a as p,b as u,c as y,d as f,e as n}from"./module.7c841851.js";import{a as $}from"./buttons.4c6f1081.js";import{p as r}from"./palette.15e4d008.js";const x=b(p)`
  ${e=>$(e.variant)}

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
    background: ${e=>e.variant==="light"?r.black:r.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    height: 0.5rem;
    margin: -0.25rem 0 0 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`,w=b(u)`
  margin-top: -0.6rem;
  background-color: ${r.white};
  border: 0.1rem solid ${r.pale};
  padding: 0.3rem 0;
  cursor: pointer;
  color: ${r.black};

  [role="menuitem"] {
    font-size: 1.6rem;
    height: 2.5rem;
    line-height: 2rem;
    padding: 0 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &:hover {
      background-color: ${r.pale};
    }
  }
`,m=({text:e,children:c,variant:i,width:o,disabled:d,...l})=>a(y,{...l,children:[t(x,{variant:i,width:o,isDisabled:d,children:e}),t(f,{children:t(w,{...l,children:c})})]}),s=e=>{const[c,i]=g.useState(!1),o=d=>{i(!0),console.log(`Activated "${d.currentTarget.innerText}"`),setTimeout(()=>{i(!1)},1e3)};return a(h,{children:[a(m,{disabled:c,id:"enabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[t(n,{onAction:o,children:"Sync only completed grades to LMS"}),t(n,{onAction:o,children:"Sync all grades to LMS (including partial)"}),t(n,{onAction:o,children:"Export grades to .csv"})]}),t("br",{}),a(m,{disabled:!0,id:"disabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[t(n,{onAction:o,children:"Sync only completed grades to LMS"}),t(n,{onAction:o,children:"Sync all grades to LMS (including partial)"}),t(n,{onAction:o,children:"Export grades to .csv"})]})]})},E=()=>s("light"),v=()=>s("primary"),L=()=>s("secondary");typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Light,v as Primary,L as Secondary};
