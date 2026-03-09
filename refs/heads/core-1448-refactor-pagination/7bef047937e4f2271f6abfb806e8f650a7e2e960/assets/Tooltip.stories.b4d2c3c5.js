import{s as e,a as o,j as r}from"./index.f3178a9e.js";import{T as m}from"./Tooltip.ea239d19.js";import"./theme.99ff7e39.js";import"./palette.5e342580.js";import"./Button.module.3e75b809.js";import"./useFocusRing.module.dff59a8b.js";import"./context.module.fd8ddd17.js";import"./useButton.module.ea30babf.js";import"./OverlayArrow.module.0ebbcfcd.js";import"./Info.91501a0a.js";const n=e.div`
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
