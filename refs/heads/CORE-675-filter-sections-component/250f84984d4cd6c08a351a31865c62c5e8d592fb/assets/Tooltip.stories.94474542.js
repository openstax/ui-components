import{s as e,a as o,j as r}from"./index.2bb00806.js";import{T as m}from"./Tooltip.693247be.js";import"./theme.c213f6fd.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.316baabc.js";import"./context.module.ededdc29.js";import"./Hidden.module.ec00dca6.js";import"./useButton.module.dbd6cbdd.js";import"./Info.709a9d10.js";const n=e.div`
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
