import{s as e,a as o,j as r}from"./index.fa43fba7.js";import{T as m}from"./Tooltip.37af1728.js";import"./theme.ab406f57.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.f1af7b3a.js";import"./context.module.742a2143.js";import"./Hidden.module.6bee436d.js";import"./useButton.module.b601f8f1.js";import"./Info.ae6c3103.js";const n=e.div`
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
