import{s as e,a as o,j as r}from"./index.7e4b207f.js";import{T as m}from"./Tooltip.e7626521.js";import"./theme.a48a4dd0.js";import"./palette.15e4d008.js";import"./Button.module.d3ce6886.js";import"./useFocusRing.module.d6811e15.js";import"./context.module.5b8a8f3c.js";import"./useButton.module.844cbaae.js";import"./OverlayArrow.module.8b1f763e.js";import"./Info.ffb01e0c.js";const n=e.div`
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
