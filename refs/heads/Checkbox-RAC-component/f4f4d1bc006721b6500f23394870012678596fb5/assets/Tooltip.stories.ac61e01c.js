import{s as e,a as o,j as r}from"./index.56241f9c.js";import{T as m}from"./Tooltip.149f3797.js";import"./theme.214696be.js";import"./palette.15e4d008.js";import"./Button.module.5cbd66b5.js";import"./useFocusRing.module.45dfdaf4.js";import"./context.module.4f9d8356.js";import"./useButton.module.85223889.js";import"./OverlayArrow.module.d089b349.js";import"./Info.799d1558.js";const n=e.div`
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
