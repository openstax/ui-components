import{s as e,a as o,j as r}from"./index.fb5a3664.js";import{T as m}from"./Tooltip.ee5691cc.js";import"./theme.ec49cf02.js";import"./palette.5e342580.js";import"./Button.module.495b8627.js";import"./useFocusRing.module.220ce024.js";import"./context.module.3e6f6c3a.js";import"./useButton.module.f61d153a.js";import"./OverlayArrow.module.7dfb772d.js";import"./Info.5180bd66.js";const n=e.div`
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
