import{s as e,a as o,j as r}from"./index.c7c660c5.js";import{T as m}from"./Tooltip.1ed276eb.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.2786e428.js";import"./useFocusRing.module.3721d014.js";import"./context.module.10a21c16.js";import"./useButton.module.7669760d.js";import"./OverlayArrow.module.0b3423fe.js";import"./Info.9b4ce768.js";const n=e.div`
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
