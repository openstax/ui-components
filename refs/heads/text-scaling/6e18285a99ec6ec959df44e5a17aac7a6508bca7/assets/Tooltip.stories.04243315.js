import{s as e,a as o,j as r}from"./index.c8dc9ec8.js";import{T as m}from"./Tooltip.6d927cd8.js";import"./theme.257d9bc4.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.baafd6f9.js";import"./context.module.5112510d.js";import"./Hidden.module.49e48360.js";import"./useButton.module.8c51044f.js";import"./Info.6cfc9204.js";const n=e.div`
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
