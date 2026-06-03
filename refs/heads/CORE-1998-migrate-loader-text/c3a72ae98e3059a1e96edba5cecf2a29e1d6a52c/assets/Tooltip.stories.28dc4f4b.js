import{s as e,a as o,j as r}from"./index.8904e557.js";import{T as m}from"./Tooltip.3ea277ea.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.fc6f96ba.js";import"./useFocusRing.module.5500a8c5.js";import"./context.module.360fb0aa.js";import"./useButton.module.239906d2.js";import"./OverlayArrow.module.d36c118f.js";import"./Info.82c74f86.js";const n=e.div`
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
