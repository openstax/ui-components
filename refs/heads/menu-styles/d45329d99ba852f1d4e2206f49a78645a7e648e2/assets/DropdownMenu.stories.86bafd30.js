import{s as m,j as n,a as e,R as p,F as b}from"./index.c7c660c5.js";import{$ as g}from"./Button.module.2786e428.js";import{$ as u,a as x,b as f,c as o}from"./Dialog.module.2eef5bed.js";import{a as y}from"./buttons.a9eb07d5.js";import{p as i}from"./palette.5e342580.js";import"./useFocusRing.module.3721d014.js";import"./context.module.10a21c16.js";import"./useButton.module.7669760d.js";import"./VisuallyHidden.module.2ba62aef.js";import"./OverlayArrow.module.0b3423fe.js";import"./Collection.module.2db8e398.js";import"./useTreeState.module.4455f539.js";const $=m(g)`
  ${t=>y(t.variant)}

  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  display: inline-flex;
  flex-direction: row;
  font-size: 1.6rem;
  position: relative;
  justify-content: space-between;
  line-height: 2rem;
  min-height: 2.5rem;
  padding: 1rem 2.5rem 1rem 1rem;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  user-select: none;
  ${t=>t.width?`width: ${t.width};`:null}
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  &:disabled {
    opacity: 0.4;
  }

  &:not([disabled]) {
    cursor: pointer;
  }

  :after {
    background: ${t=>t.variant==="light"?i.black:i.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    position: absolute;
    height: 0.6rem;
    margin-top: -0.25rem;
    right: 1rem;
    transform: rotate(135deg);
    width: 0.6rem;
  }
`,w=m(u)`
  margin-top: -0.6rem;
  background-color: ${i.white};
  border: 0.1rem solid ${i.pale};
  padding: 0;
  cursor: pointer;
  color: ${i.black};

  [role="menuitem"] {
    display: block;
    color: inherit;
    text-decoration: none;
    font-size: 1.6rem;
    min-height: 2.5rem;
    line-height: 2rem;
    padding: 1rem 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &:hover {
      background-color: ${i.neutralLighter};
    }
  }
`,s=({text:t,children:c,variant:a,width:r,disabled:h,...l})=>n(x,{...l,children:[e($,{variant:a,width:r,isDisabled:h,children:t}),e(f,{children:e(w,{...l,children:c})})]}),d=t=>{const[c,a]=p.useState(!1),r=()=>{a(!0),setTimeout(()=>{a(!1)},1e3)};return n(b,{children:[n(s,{disabled:c,id:"enabled-grades-menu",text:"Sync/Export Grades",variant:t,children:[e(o,{onAction:r,children:"Sync only completed grades to LMS"}),e(o,{onAction:r,children:"Sync all grades to LMS (including partial)"}),e(o,{onAction:r,children:"Export grades to .csv"})]}),e("br",{}),n(s,{disabled:!0,id:"disabled-grades-menu",text:"Sync/Export Grades",variant:t,children:[e(o,{onAction:r,children:"Sync only completed grades to LMS"}),e(o,{onAction:r,children:"Sync all grades to LMS (including partial)"}),e(o,{onAction:r,children:"Export grades to .csv"})]}),e("br",{}),n(s,{id:"links-menu",text:"Resources",variant:t,children:[e(o,{href:"https://openstax.org",target:"_blank",children:"Browse subjects"}),e(o,{href:"https://openstax.org/subjects",target:"_blank",children:"View all textbooks"}),e(o,{href:"https://openstax.org/about",target:"_blank",children:"About OpenStax"})]}),e("br",{}),e("div",{style:{width:"50rem",maxWidth:"100%"},children:n(s,{id:"links-menu",text:"Wide Menu",width:"100%",variant:t,children:[e(o,{href:"https://openstax.org",target:"_blank",children:"Browse subjects"}),e(o,{href:"https://openstax.org/subjects",target:"_blank",children:"View all textbooks"}),e(o,{href:"https://openstax.org/about",target:"_blank",children:"About OpenStax"})]})})]})},R=()=>d("light"),V=()=>d("primary"),F=()=>d("secondary");typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Light,V as Primary,F as Secondary};
