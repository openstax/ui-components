import{s as e,a as o,j as r}from"./index.b72de98d.js";import{T as m}from"./Tooltip.96777681.js";import"./theme.0c933903.js";import"./palette.15e4d008.js";import"./Button.module.8f09dfc6.js";import"./useFocusRing.module.d931eb60.js";import"./context.module.586f6da9.js";import"./useButton.module.f0ff1b27.js";import"./OverlayArrow.module.39f052a4.js";import"./Info.9a0396d3.js";const n=e.div`
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
