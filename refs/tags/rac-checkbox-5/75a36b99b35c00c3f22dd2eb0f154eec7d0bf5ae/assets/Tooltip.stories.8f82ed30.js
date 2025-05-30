import{s as e,a as o,j as r}from"./index.3da1bfd0.js";import{T as m}from"./Tooltip.c6621804.js";import"./theme.577cf909.js";import"./palette.15e4d008.js";import"./Button.module.4e803da2.js";import"./useFocusRing.module.09ea4fbb.js";import"./useButton.module.62e6bd00.js";import"./OverlayArrow.module.d44cf321.js";import"./Info.7c1cc899.js";const n=e.div`
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
