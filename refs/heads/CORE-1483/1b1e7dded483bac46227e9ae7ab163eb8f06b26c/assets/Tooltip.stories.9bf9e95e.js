import{s as e,a as o,j as r}from"./index.aaee157d.js";import{T as m}from"./Tooltip.e97e97fb.js";import"./theme.63888eb2.js";import"./palette.5e342580.js";import"./Button.module.328f2f63.js";import"./useFocusRing.module.6dbbc871.js";import"./context.module.c9f8d907.js";import"./useButton.module.86742081.js";import"./OverlayArrow.module.5928fc6c.js";import"./Info.bdc3099f.js";const n=e.div`
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
