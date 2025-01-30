import{s as e,a as o,j as r}from"./index.b7b59507.js";import{T as m}from"./Tooltip.e6325866.js";import"./theme.3033274c.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.13bdc476.js";import"./context.module.cf3b66aa.js";import"./Hidden.module.bb5923bb.js";import"./useButton.module.03fa51ca.js";import"./Info.25f3ece1.js";const n=e.div`
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
