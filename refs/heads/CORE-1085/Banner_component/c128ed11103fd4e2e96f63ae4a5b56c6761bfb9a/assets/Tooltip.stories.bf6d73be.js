import{s as e,a as o,j as r}from"./index.466fce0f.js";import{T as m}from"./Tooltip.5cf63d1e.js";import"./theme.622bdbbd.js";import"./palette.15e4d008.js";import"./Button.module.b77e35c1.js";import"./useFocusRing.module.b8b0ef88.js";import"./context.module.5231af30.js";import"./useButton.module.0df83066.js";import"./OverlayArrow.module.8eee65c8.js";import"./Info.3338050e.js";const n=e.div`
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
