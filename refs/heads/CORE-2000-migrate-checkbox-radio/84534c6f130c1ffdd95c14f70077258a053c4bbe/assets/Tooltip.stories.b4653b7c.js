import{s as e,a as o,j as r}from"./index.a9f7df40.js";import{T as m}from"./Tooltip.9058ea7e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.b9e3e0a1.js";import"./useFocusRing.module.0a1ede2c.js";import"./context.module.11beba6b.js";import"./useButton.module.e8dd4e65.js";import"./OverlayArrow.module.513139ba.js";import"./Info.18427f7c.js";const n=e.div`
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
