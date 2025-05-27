import{s as e,a as o,j as r}from"./index.f54093e7.js";import{T as m}from"./Tooltip.4d97491c.js";import"./theme.d2122246.js";import"./palette.15e4d008.js";import"./Button.module.9a5ea9a6.js";import"./useFocusRing.module.dadb4a17.js";import"./useButton.module.fe26e510.js";import"./OverlayArrow.module.7de0bc43.js";import"./Info.1c073d75.js";const n=e.div`
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
