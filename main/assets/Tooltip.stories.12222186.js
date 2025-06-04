import{s as e,a as o,j as r}from"./index.d5921d2c.js";import{T as m}from"./Tooltip.23bd19c2.js";import"./theme.60864601.js";import"./palette.15e4d008.js";import"./Button.module.cf48aee7.js";import"./useFocusRing.module.98552aef.js";import"./context.module.c6c63af9.js";import"./useButton.module.258e7cd2.js";import"./OverlayArrow.module.bf65853c.js";import"./Info.dd8d7f06.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
