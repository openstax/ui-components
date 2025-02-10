import{s as m,j as a,a as t,R as b,F as h}from"./index.c8dc9ec8.js";import{$ as g}from"./OverlayArrow.module.baafd6f9.js";import{$ as u,a as f,b as y,c as n}from"./Dialog.module.a15a237e.js";import{a as $}from"./buttons.5f27597a.js";import{p as r}from"./palette.15e4d008.js";import"./context.module.5112510d.js";import"./Hidden.module.49e48360.js";import"./useButton.module.8c51044f.js";import"./Collection.module.be524f28.js";import"./FocusScope.module.69ad759a.js";const x=m(g)`
  ${e=>$(e.variant)}

  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  display: inline-flex;
  flex-direction: row;
  font-size: 1.6rem;
  position: relative;
  justify-content: center;
  line-height: 2rem;
  min-height: 2.5rem;
  padding: 0 1.5rem 0 0.5rem;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  user-select: none;
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
    position: absolute;
    height: 0.5rem;
    margin-top: -0.25rem;
    right: 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`,w=m(u)`
  margin-top: -0.6rem;
  background-color: ${r.white};
  border: 0.1rem solid ${r.pale};
  padding: 0.3rem 0;
  cursor: pointer;
  color: ${r.black};

  [role="menuitem"] {
    font-size: 1.6rem;
    min-height: 2.5rem;
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
`,l=({text:e,children:c,variant:i,width:o,disabled:p,...s})=>a(f,{...s,children:[t(x,{variant:i,width:o,isDisabled:p,children:e}),t(y,{children:t(w,{...s,children:c})})]}),d=e=>{const[c,i]=b.useState(!1),o=()=>{i(!0),setTimeout(()=>{i(!1)},1e3)};return a(h,{children:[a(l,{disabled:c,id:"enabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[t(n,{onAction:o,children:"Sync only completed grades to LMS"}),t(n,{onAction:o,children:"Sync all grades to LMS (including partial)"}),t(n,{onAction:o,children:"Export grades to .csv"})]}),t("br",{}),a(l,{disabled:!0,id:"disabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[t(n,{onAction:o,children:"Sync only completed grades to LMS"}),t(n,{onAction:o,children:"Sync all grades to LMS (including partial)"}),t(n,{onAction:o,children:"Export grades to .csv"})]})]})},B=()=>d("light"),F=()=>d("primary"),G=()=>d("secondary");typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{B as Light,F as Primary,G as Secondary};
