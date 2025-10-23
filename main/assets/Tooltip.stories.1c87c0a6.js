import{s as e,a as o,j as r}from"./index.bd5cf011.js";import{T as m}from"./Tooltip.a8c5ac28.js";import"./theme.d3a0bfc0.js";import"./palette.15e4d008.js";import"./Button.module.c16bdbe8.js";import"./useFocusRing.module.55efec08.js";import"./context.module.e1785199.js";import"./useButton.module.a985a503.js";import"./OverlayArrow.module.e6febd0a.js";import"./Info.870d942c.js";const n=e.div`
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
