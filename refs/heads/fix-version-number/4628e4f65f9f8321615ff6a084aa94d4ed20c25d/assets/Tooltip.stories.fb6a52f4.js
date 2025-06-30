import{s as e,a as o,j as r}from"./index.bdcef5ee.js";import{T as m}from"./Tooltip.fde6fe84.js";import"./theme.90922121.js";import"./palette.15e4d008.js";import"./Button.module.c8124910.js";import"./useFocusRing.module.80c66c7d.js";import"./context.module.d4ec1028.js";import"./useButton.module.4d32e2c3.js";import"./OverlayArrow.module.6c710143.js";import"./Info.916d67e0.js";const n=e.div`
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
