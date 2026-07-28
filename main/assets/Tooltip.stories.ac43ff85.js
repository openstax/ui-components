import{s as e,a as o,j as r}from"./index.da0843ca.js";import{T as m}from"./Tooltip.6878ade6.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.e77a2f02.js";import"./useFocusRing.module.41091c45.js";import"./context.module.3ba257d6.js";import"./useButton.module.173eeb57.js";import"./OverlayArrow.module.f98e30ff.js";import"./Info.5b6b7b7e.js";const n=e.div`
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
