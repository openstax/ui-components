import{s as e,a as o,j as r}from"./index.66ccc16b.js";import{T as m}from"./Tooltip.c1fa650c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.2a86ed5b.js";import"./useFocusRing.module.b925221d.js";import"./context.module.6b3312c2.js";import"./useButton.module.5b96224e.js";import"./OverlayArrow.module.ba08d96b.js";import"./Info.abcd2087.js";const n=e.div`
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
