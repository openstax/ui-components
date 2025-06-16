import{s as e,a as o,j as r}from"./index.f27f02f2.js";import{T as m}from"./Tooltip.abb2010c.js";import"./theme.303d042c.js";import"./palette.15e4d008.js";import"./Button.module.8ffa74cb.js";import"./useFocusRing.module.946c9a1a.js";import"./context.module.c986e5cb.js";import"./useButton.module.156c415a.js";import"./OverlayArrow.module.bce4c807.js";import"./Info.27218177.js";const n=e.div`
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
