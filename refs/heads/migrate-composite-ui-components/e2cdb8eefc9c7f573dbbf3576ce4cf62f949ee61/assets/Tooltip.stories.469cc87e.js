import{s as e,a as o,j as r}from"./index.9732b206.js";import{T as m}from"./Tooltip.19a267cc.js";import"./Button.module.a5d50629.js";import"./useFocusRing.module.367e66e4.js";import"./Hidden.module.4f736ce3.js";import"./useButton.module.6d5393cb.js";import"./OverlayArrow.module.d2eecfd8.js";import"./context.module.d2d414a6.js";import"./Info.709915df.js";import"./palette.5e342580.js";const n=e.div`
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
