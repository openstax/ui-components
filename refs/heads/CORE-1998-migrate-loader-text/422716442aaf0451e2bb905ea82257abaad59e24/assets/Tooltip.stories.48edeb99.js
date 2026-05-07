import{s as e,a as o,j as r}from"./index.118ac4e9.js";import{T as m}from"./Tooltip.ad0b6b3f.js";import"./theme.f0b3ac83.js";import"./palette.5e342580.js";import"./Button.module.46cb57bd.js";import"./useFocusRing.module.f76eeae9.js";import"./context.module.86e907c3.js";import"./useButton.module.0f6c3104.js";import"./OverlayArrow.module.cf185531.js";import"./Info.00548bf7.js";const n=e.div`
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
