import{s as e,a as o,j as r}from"./index.387e538a.js";import{T as m}from"./Tooltip.06934f18.js";import"./theme.ff878c73.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.f3d1bb0e.js";import"./context.module.f875315d.js";import"./useButton.module.43466108.js";import"./Info.65bc2862.js";const n=e.div`
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
