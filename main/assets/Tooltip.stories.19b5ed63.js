import{s as e,a as o,j as r}from"./index.54148a0f.js";import{T as m}from"./Tooltip.292f6e10.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.e6166761.js";import"./useFocusRing.module.49c21ae5.js";import"./context.module.4a906004.js";import"./useButton.module.5c8ce93c.js";import"./OverlayArrow.module.8b74565a.js";import"./Info.e4839481.js";const n=e.div`
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
