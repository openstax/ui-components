import{s as e,a as o,j as r}from"./index.964940cc.js";import{T as m}from"./Tooltip.5b358ccb.js";import"./theme.f522d3c7.js";import"./palette.15e4d008.js";import"./Button.module.cd2d3213.js";import"./useFocusRing.module.bd802165.js";import"./context.module.cc338bef.js";import"./useButton.module.1ebeee7f.js";import"./OverlayArrow.module.8d625800.js";import"./Info.874fbf20.js";const n=e.div`
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
