import{s as e,a as o,j as i}from"./index.5748ac5d.js";import{T as r}from"./Tooltip.78b0155e.js";import"./theme.4dd66404.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.ca950bdd.js";import"./focusSafely.module.265c7811.js";import"./context.module.3d32e3de.js";import"./Info.8a6bafd9.js";const m=e.div`
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