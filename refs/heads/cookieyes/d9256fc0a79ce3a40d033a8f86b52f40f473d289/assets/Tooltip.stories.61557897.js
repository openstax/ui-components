import{s as e,a as o,j as r}from"./index.88aa9f22.js";import{T as m}from"./Tooltip.583e9240.js";import"./theme.9bd14cce.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.b58ced2e.js";import"./context.module.6eb2c600.js";import"./Hidden.module.fa9cb266.js";import"./useButton.module.fdfb5ada.js";import"./Info.0d0572c2.js";const n=e.div`
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
