import{s as e,a as o,j as r}from"./index.c68b4d2f.js";import{T as m}from"./Tooltip.5b0dac27.js";import"./theme.b2bae99d.js";import"./palette.15e4d008.js";import"./Button.module.6d0c5574.js";import"./useFocusRing.module.148955a4.js";import"./useButton.module.7040ca1b.js";import"./OverlayArrow.module.51144fca.js";import"./Info.04e10bc0.js";const n=e.div`
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
