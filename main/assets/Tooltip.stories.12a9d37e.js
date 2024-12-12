import{s as e,a as o,j as r}from"./index.b00fac09.js";import{T as m}from"./Tooltip.6f33966d.js";import"./theme.165950be.js";import"./palette.15e4d008.js";import"./Button.module.fc55542b.js";import"./context.module.40f7a861.js";import"./useFocusRing.module.6b354afb.js";import"./OverlayArrow.module.e28af6fa.js";import"./Info.80e37d7e.js";const n=e.div`
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
