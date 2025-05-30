import{s as e,a as o,j as r}from"./index.2fc3ab85.js";import{T as m}from"./Tooltip.3fd52b4e.js";import"./theme.98def16e.js";import"./palette.15e4d008.js";import"./Button.module.315a5916.js";import"./useFocusRing.module.58ef531e.js";import"./useButton.module.b0be8fbd.js";import"./OverlayArrow.module.b8e27375.js";import"./Info.5058a457.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
