import{s as e,a as o,j as r}from"./index.d84dcec4.js";import{T as m}from"./Tooltip.15c5291a.js";import"./theme.b4e37fba.js";import"./palette.5e342580.js";import"./Button.module.7bff40bd.js";import"./useFocusRing.module.3b645c77.js";import"./context.module.1dd84072.js";import"./useButton.module.f3046c9c.js";import"./OverlayArrow.module.e0c66066.js";import"./Info.97da1966.js";const n=e.div`
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
