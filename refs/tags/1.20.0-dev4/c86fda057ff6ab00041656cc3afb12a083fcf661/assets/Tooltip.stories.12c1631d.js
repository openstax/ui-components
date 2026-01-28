import{s as e,a as o,j as r}from"./index.44e7dce0.js";import{T as m}from"./Tooltip.c4227c6d.js";import"./theme.3505e05e.js";import"./palette.5e342580.js";import"./Button.module.ec48a869.js";import"./useFocusRing.module.933bdf96.js";import"./context.module.9404bc0d.js";import"./useButton.module.3d03dc55.js";import"./OverlayArrow.module.925b3370.js";import"./Info.c84e5f80.js";const n=e.div`
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
