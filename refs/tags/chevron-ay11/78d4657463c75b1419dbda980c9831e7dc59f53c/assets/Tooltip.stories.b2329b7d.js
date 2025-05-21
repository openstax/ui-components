import{s as e,a as o,j as r}from"./index.2f575498.js";import{T as m}from"./Tooltip.2b586812.js";import"./theme.8efc2a1a.js";import"./palette.15e4d008.js";import"./Button.module.d262e02c.js";import"./useFocusRing.module.95573eec.js";import"./useButton.module.56ccb212.js";import"./OverlayArrow.module.af7c4ff0.js";import"./Info.c93bd6dc.js";const n=e.div`
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
