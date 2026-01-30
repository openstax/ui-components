import{s as e,a as o,j as r}from"./index.215f4b9b.js";import{T as m}from"./Tooltip.3c2410cd.js";import"./theme.e0760cd3.js";import"./palette.5e342580.js";import"./Button.module.794d297c.js";import"./useFocusRing.module.eed8ff9e.js";import"./context.module.3310220a.js";import"./useButton.module.257c7807.js";import"./OverlayArrow.module.669c62f1.js";import"./Info.7a9093ff.js";const n=e.div`
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
