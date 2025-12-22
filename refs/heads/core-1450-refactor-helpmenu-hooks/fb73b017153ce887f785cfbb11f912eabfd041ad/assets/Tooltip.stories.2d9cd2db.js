import{s as e,a as o,j as r}from"./index.07c1b2d6.js";import{T as m}from"./Tooltip.87cb2438.js";import"./theme.8995dcdf.js";import"./palette.15e4d008.js";import"./Button.module.e419248b.js";import"./useFocusRing.module.9b8da44b.js";import"./context.module.ccb9c1c7.js";import"./useButton.module.325ded3d.js";import"./OverlayArrow.module.854f284e.js";import"./Info.003b2211.js";const n=e.div`
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
