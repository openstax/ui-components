import{s as e,a as o,j as r}from"./index.5eeca385.js";import{T as m}from"./Tooltip.16d7905b.js";import"./theme.0dad3fd4.js";import"./palette.15e4d008.js";import"./Button.module.e8cabd4e.js";import"./context.module.6355ca2c.js";import"./useFocusRing.module.6f98d58c.js";import"./OverlayArrow.module.aeb45026.js";import"./Info.e89a4858.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
