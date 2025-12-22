import{s as e,a as o,j as r}from"./index.5f6ba33b.js";import{T as m}from"./Tooltip.99eca933.js";import"./theme.f7db6ace.js";import"./palette.15e4d008.js";import"./Button.module.2de91788.js";import"./useFocusRing.module.56d9189e.js";import"./context.module.3f1410c3.js";import"./useButton.module.916752e7.js";import"./OverlayArrow.module.eb801e1c.js";import"./Info.b4011b4e.js";const n=e.div`
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
