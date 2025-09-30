import{s as e,a as o,j as r}from"./index.fe78f6c2.js";import{T as m}from"./Tooltip.17f93d1a.js";import"./theme.e8feacdb.js";import"./palette.15e4d008.js";import"./Button.module.faf48828.js";import"./useFocusRing.module.7cd19e02.js";import"./context.module.fde96bd9.js";import"./useButton.module.8b4bd82a.js";import"./OverlayArrow.module.0b0bde23.js";import"./Info.67635f1a.js";const n=e.div`
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
