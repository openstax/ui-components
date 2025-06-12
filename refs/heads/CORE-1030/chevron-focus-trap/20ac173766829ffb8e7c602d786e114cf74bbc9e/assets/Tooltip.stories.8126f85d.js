import{s as e,a as o,j as r}from"./index.0868e1f8.js";import{T as m}from"./Tooltip.188c595d.js";import"./theme.e53cbf2f.js";import"./palette.15e4d008.js";import"./Button.module.194ef162.js";import"./useFocusRing.module.b3ec30c8.js";import"./context.module.8d47dd9d.js";import"./useButton.module.dc3d1d5f.js";import"./OverlayArrow.module.a8a3d0d7.js";import"./Info.115acd95.js";const n=e.div`
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
