import{s as i,a as o,j as r}from"./index.244dd005.js";import{T as m}from"./Tooltip.d3adbb9a.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.1764719c.js";import"./useFocusRing.module.4e35c6bc.js";import"./context.module.3d64a1f7.js";import"./useButton.module.625f8887.js";import"./OverlayArrow.module.01e62d1e.js";import"./Info.0060f7a4.js";import"./VisuallyHidden.module.8943f7b5.js";const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
