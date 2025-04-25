import{s as e,a as o,j as r}from"./index.eb704414.js";import{T as m}from"./Tooltip.d8a8a8a8.js";import"./theme.2bad9ef5.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c212e9a1.js";import"./context.module.60f3bda3.js";import"./useButton.module.24992bc4.js";import"./Info.954f5677.js";const n=e.div`
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
`,g=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
