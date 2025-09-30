import{s as e,a as o,j as r}from"./index.86b5046c.js";import{T as m}from"./Tooltip.7048cab6.js";import"./theme.1c05b18b.js";import"./palette.15e4d008.js";import"./Button.module.b1ab226b.js";import"./useFocusRing.module.461411b9.js";import"./context.module.08071df4.js";import"./useButton.module.85de3ebf.js";import"./OverlayArrow.module.9483e51a.js";import"./Info.85da32b0.js";const n=e.div`
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
