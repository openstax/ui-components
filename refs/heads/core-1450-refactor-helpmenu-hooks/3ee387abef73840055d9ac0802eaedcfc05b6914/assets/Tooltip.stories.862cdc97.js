import{s as e,a as o,j as r}from"./index.47d9f853.js";import{T as m}from"./Tooltip.b8fcbe7d.js";import"./theme.68c19183.js";import"./palette.15e4d008.js";import"./Button.module.35fb2a08.js";import"./useFocusRing.module.d3eaf4b2.js";import"./context.module.138f7add.js";import"./useButton.module.9b581198.js";import"./OverlayArrow.module.250a0482.js";import"./Info.5cf0f61c.js";const n=e.div`
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
