import{s as e,a as o,j as r}from"./index.bf911a0e.js";import{T as m}from"./Tooltip.c31366aa.js";import"./theme.612ebb1c.js";import"./palette.15e4d008.js";import"./Button.module.65c1dfa7.js";import"./useFocusRing.module.67a70e0b.js";import"./context.module.430f6f83.js";import"./useButton.module.c5cb3fe6.js";import"./OverlayArrow.module.39160cf6.js";import"./Info.0e487e10.js";const n=e.div`
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
