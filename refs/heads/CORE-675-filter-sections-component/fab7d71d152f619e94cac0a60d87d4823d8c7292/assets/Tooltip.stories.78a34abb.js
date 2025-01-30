import{s as e,a as o,j as r}from"./index.71d8124c.js";import{T as m}from"./Tooltip.854e844f.js";import"./theme.ce452560.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.2e474dec.js";import"./context.module.7af12a6a.js";import"./Hidden.module.91a19e06.js";import"./useButton.module.373eac7c.js";import"./Info.035f6266.js";const n=e.div`
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
