import{s as e,a as o,j as r}from"./index.122b7736.js";import{T as m}from"./Tooltip.b4c5cc68.js";import"./theme.21ddec2f.js";import"./palette.15e4d008.js";import"./Button.module.f4860166.js";import"./useFocusRing.module.29723948.js";import"./context.module.1f1a841a.js";import"./useButton.module.641a53a9.js";import"./OverlayArrow.module.f88da5b6.js";import"./Info.fa68d689.js";const n=e.div`
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
