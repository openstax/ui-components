import{s as e,a as o,j as r}from"./index.2eec5f8b.js";import{T as m}from"./Tooltip.28b5d9ba.js";import"./theme.d4ba8bf4.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.a98b95f6.js";import"./context.module.a486572e.js";import"./useButton.module.0c441a90.js";import"./Info.a57a0db7.js";const n=e.div`
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
