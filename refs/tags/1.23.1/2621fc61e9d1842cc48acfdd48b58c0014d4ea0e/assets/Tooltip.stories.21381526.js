import{s as e,a as o,j as r}from"./index.6dab7242.js";import{T as m}from"./Tooltip.1896e60d.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.0cb337ed.js";import"./useFocusRing.module.3728917d.js";import"./context.module.8d33846f.js";import"./useButton.module.e85a5fca.js";import"./OverlayArrow.module.8270a1fb.js";import"./Info.d5c3af62.js";const n=e.div`
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
