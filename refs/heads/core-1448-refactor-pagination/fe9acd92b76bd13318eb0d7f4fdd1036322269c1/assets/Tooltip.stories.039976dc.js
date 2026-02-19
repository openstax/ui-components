import{s as e,a as o,j as r}from"./index.335a09ea.js";import{T as m}from"./Tooltip.b9cef438.js";import"./theme.a46833aa.js";import"./palette.5e342580.js";import"./Button.module.726ed212.js";import"./useFocusRing.module.f42953aa.js";import"./context.module.60478231.js";import"./useButton.module.e5fdf239.js";import"./OverlayArrow.module.bdbd55e5.js";import"./Info.c45978d4.js";const n=e.div`
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
