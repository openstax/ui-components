import{s as e,a as o,j as r}from"./index.6a46d10b.js";import{T as m}from"./Tooltip.48905333.js";import"./theme.6118982a.js";import"./palette.15e4d008.js";import"./Button.module.f46ebf71.js";import"./useFocusRing.module.ec264aa1.js";import"./context.module.49c9b943.js";import"./useButton.module.260ea417.js";import"./OverlayArrow.module.c885ac68.js";import"./Info.a732f430.js";const n=e.div`
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
