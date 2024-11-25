import{s as e,a as o,j as i}from"./index.e1abfbb6.js";import{T as r}from"./Tooltip.9f3089e0.js";import"./theme.82f10698.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.9402ef4a.js";import"./focusSafely.module.15f4867f.js";import"./context.module.b70318d7.js";import"./Info.4e13549c.js";const m=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,n=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,f=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default};
