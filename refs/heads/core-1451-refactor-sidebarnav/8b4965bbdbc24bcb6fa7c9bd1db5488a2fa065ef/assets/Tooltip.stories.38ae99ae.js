import{s as e,a as o,j as r}from"./index.85ae25d8.js";import{T as m}from"./Tooltip.829d0fac.js";import"./theme.1c2c1863.js";import"./palette.15e4d008.js";import"./Button.module.bc67202a.js";import"./useFocusRing.module.249111bf.js";import"./context.module.7a701e50.js";import"./useButton.module.45768283.js";import"./OverlayArrow.module.4e7efcf6.js";import"./Info.896f1be0.js";const n=e.div`
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
