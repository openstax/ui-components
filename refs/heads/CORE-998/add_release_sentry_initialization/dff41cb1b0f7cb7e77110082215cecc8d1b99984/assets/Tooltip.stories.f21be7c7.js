import{s as e,a as o,j as r}from"./index.90f9d8bf.js";import{T as m}from"./Tooltip.6e1bb1fb.js";import"./theme.f8c52f16.js";import"./palette.15e4d008.js";import"./Button.module.7f0229a9.js";import"./useFocusRing.module.920c953f.js";import"./context.module.ac2691c3.js";import"./useButton.module.d342bb85.js";import"./OverlayArrow.module.8a40d5a3.js";import"./Info.406b2012.js";const n=e.div`
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
