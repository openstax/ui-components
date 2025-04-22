import{s as e,a as o,j as r}from"./index.df7d58c7.js";import{T as m}from"./Tooltip.96bfc21c.js";import"./theme.31cfe468.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.e1766d59.js";import"./context.module.f57597da.js";import"./useButton.module.7d280916.js";import"./Info.9b6936f8.js";const n=e.div`
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
