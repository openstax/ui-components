import{s as e,a as o,j as r}from"./index.aca28bb5.js";import{T as m}from"./Tooltip.4b437308.js";import"./theme.927cb98c.js";import"./palette.15e4d008.js";import"./Button.module.35ee0533.js";import"./useFocusRing.module.d7a713a9.js";import"./context.module.36d442d3.js";import"./useButton.module.75b718a5.js";import"./OverlayArrow.module.d8b586e6.js";import"./Info.ef862fc9.js";const n=e.div`
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
