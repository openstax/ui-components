import{s as e,a as o,j as r}from"./index.f55c9ae4.js";import{T as m}from"./Tooltip.9394416e.js";import"./theme.c6d3608f.js";import"./palette.5e342580.js";import"./Button.module.5549e091.js";import"./useFocusRing.module.e81d4b91.js";import"./context.module.30e6797f.js";import"./useButton.module.4a928136.js";import"./OverlayArrow.module.f6b45ed4.js";import"./Info.ea2cf84d.js";const n=e.div`
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
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
