import{s as e,a as o,j as r}from"./index.cc4cf4d6.js";import{T as m}from"./Tooltip.4cdb45e6.js";import"./theme.df157495.js";import"./palette.15e4d008.js";import"./Button.module.c427d024.js";import"./useFocusRing.module.ad304b6e.js";import"./useButton.module.4575b742.js";import"./OverlayArrow.module.fc2b7af1.js";import"./Info.7d9c1d7f.js";const n=e.div`
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
