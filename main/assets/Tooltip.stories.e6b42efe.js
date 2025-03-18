import{s as e,a as o,j as r}from"./index.a687c703.js";import{T as m}from"./Tooltip.1e238853.js";import"./theme.3c54ad33.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.d6bedcd3.js";import"./context.module.56018962.js";import"./useButton.module.4a144fbd.js";import"./Info.d75308d8.js";const n=e.div`
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
