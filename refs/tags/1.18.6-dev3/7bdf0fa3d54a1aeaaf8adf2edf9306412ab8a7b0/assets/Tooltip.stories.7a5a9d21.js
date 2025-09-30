import{s as e,a as o,j as r}from"./index.924fd51e.js";import{T as m}from"./Tooltip.257d0d7a.js";import"./theme.848ff9a2.js";import"./palette.15e4d008.js";import"./Button.module.06a19140.js";import"./useFocusRing.module.15917e67.js";import"./context.module.ae7b0bdf.js";import"./useButton.module.4cf00a89.js";import"./OverlayArrow.module.be0acdb4.js";import"./Info.38c3668f.js";const n=e.div`
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
