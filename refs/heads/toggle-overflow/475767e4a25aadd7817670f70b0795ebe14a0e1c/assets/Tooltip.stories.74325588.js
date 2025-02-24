import{s as e,a as o,j as r}from"./index.c3ec57d8.js";import{T as m}from"./Tooltip.6fb56cba.js";import"./theme.6ed67848.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.4f5d57e7.js";import"./context.module.6f3ae749.js";import"./useButton.module.22ef923b.js";import"./Info.608e2c85.js";const n=e.div`
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
`,g=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
