import{s as e,a as o,j as r}from"./index.d08558f3.js";import{T as m}from"./Tooltip.f8fefa6c.js";import"./theme.76bc4b2b.js";import"./palette.15e4d008.js";import"./Button.module.2bf3edb8.js";import"./useFocusRing.module.ae530b9b.js";import"./context.module.c19404e4.js";import"./useButton.module.567a6684.js";import"./OverlayArrow.module.9be9c057.js";import"./Info.d61ca995.js";const n=e.div`
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
