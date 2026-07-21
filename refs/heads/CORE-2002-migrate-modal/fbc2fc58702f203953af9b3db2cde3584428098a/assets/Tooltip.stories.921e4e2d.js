import{s as e,a as o,j as r}from"./index.3a54eac8.js";import{T as m}from"./Tooltip.bd015455.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.2ac54956.js";import"./useFocusRing.module.db0a0874.js";import"./context.module.fe1f9183.js";import"./useButton.module.fd87909d.js";import"./OverlayArrow.module.def6954f.js";import"./Info.019d94d8.js";const n=e.div`
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
