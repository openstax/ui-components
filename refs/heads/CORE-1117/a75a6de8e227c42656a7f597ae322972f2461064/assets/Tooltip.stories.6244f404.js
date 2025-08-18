import{s as e,a as o,j as r}from"./index.35c432b3.js";import{T as m}from"./Tooltip.e7c685a8.js";import"./theme.b270f634.js";import"./palette.15e4d008.js";import"./Button.module.756ff495.js";import"./useFocusRing.module.b26c39cd.js";import"./context.module.908f988a.js";import"./useButton.module.6fbefddd.js";import"./OverlayArrow.module.4406d0c0.js";import"./Info.99f25f08.js";const n=e.div`
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
