import{s as e,a as o,j as r}from"./index.8c45433e.js";import{T as m}from"./Tooltip.16a9dbe2.js";import"./theme.cc1478df.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.c54b575b.js";import"./context.module.cbd0577b.js";import"./useButton.module.83703885.js";import"./Info.31a7ba92.js";const n=e.div`
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
