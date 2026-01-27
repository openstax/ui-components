import{s as m,j as a,a as t,R as b,F as h}from"./index.81dfb6b1.js";import{$ as g}from"./Button.module.e88ccaec.js";import{$ as u,a as f,b as y,c as r}from"./Dialog.module.1631e792.js";import{a as $}from"./buttons.df4fdc63.js";import{p as n}from"./palette.5e342580.js";import"./useFocusRing.module.3c6a9e23.js";import"./context.module.c115203f.js";import"./useButton.module.14846d47.js";import"./VisuallyHidden.module.40cf73e5.js";import"./OverlayArrow.module.02565d75.js";import"./Collection.module.85d8cba8.js";import"./useTreeState.module.210be2da.js";const x=m(g)`
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
    background: ${e=>e.variant==="light"?n.black:n.white};
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
  background-color: ${n.white};
  border: 0.1rem solid ${n.pale};
  padding: 0.3rem 0;
  cursor: pointer;
  color: ${n.black};

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
      background-color: ${n.pale};
    }
  }
`,l=({text:e,children:c,variant:i,width:o,disabled:p,...s})=>a(f,{...s,children:[t(x,{variant:i,width:o,isDisabled:p,children:e}),t(y,{children:t(w,{...s,children:c})})]}),d=e=>{const[c,i]=b.useState(!1),o=()=>{i(!0),setTimeout(()=>{i(!1)},1e3)};return a(h,{children:[a(l,{disabled:c,id:"enabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[t(r,{onAction:o,children:"Sync only completed grades to LMS"}),t(r,{onAction:o,children:"Sync all grades to LMS (including partial)"}),t(r,{onAction:o,children:"Export grades to .csv"})]}),t("br",{}),a(l,{disabled:!0,id:"disabled-grades-menu",text:"Sync/Export Grades",variant:e,children:[t(r,{onAction:o,children:"Sync only completed grades to LMS"}),t(r,{onAction:o,children:"Sync all grades to LMS (including partial)"}),t(r,{onAction:o,children:"Export grades to .csv"})]})]})},G=()=>d("light"),R=()=>d("primary"),P=()=>d("secondary");typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{G as Light,R as Primary,P as Secondary};
