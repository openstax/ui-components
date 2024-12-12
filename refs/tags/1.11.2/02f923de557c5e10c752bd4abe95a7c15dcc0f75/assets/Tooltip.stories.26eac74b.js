import{s as e,a as o,j as r}from"./index.86305c29.js";import{T as m}from"./Tooltip.61c5e9e2.js";import"./theme.d8137da6.js";import"./palette.15e4d008.js";import"./Button.module.db1b96f7.js";import"./context.module.5974ac9f.js";import"./useFocusRing.module.5b7967c7.js";import"./OverlayArrow.module.3253a0ca.js";import"./Info.118ecd81.js";const n=e.div`
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
