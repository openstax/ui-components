import{s as e,a as o,j as r}from"./index.53907b3b.js";import{T as m}from"./Tooltip.1601474e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.6a1e331b.js";import"./useFocusRing.module.27e7a86b.js";import"./context.module.6c716e6b.js";import"./useButton.module.678283a6.js";import"./OverlayArrow.module.f22fc3ca.js";import"./Info.b27f2613.js";const n=e.div`
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
