import{s as e,a as o,j as r}from"./index.8b9683f6.js";import{T as m}from"./Tooltip.55c9962a.js";import"./theme.e2d3c68c.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.7c2c35c9.js";import"./context.module.e19714eb.js";import"./Hidden.module.0e02f2b4.js";import"./useButton.module.196cbd5b.js";import"./Info.0324b253.js";const n=e.div`
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
