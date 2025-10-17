import{s as e,a as o,j as r}from"./index.426d7292.js";import{T as m}from"./Tooltip.45d06beb.js";import"./theme.3d086095.js";import"./palette.15e4d008.js";import"./Button.module.ab9607a1.js";import"./useFocusRing.module.52097e1d.js";import"./context.module.0b5e77e5.js";import"./useButton.module.85c724bf.js";import"./OverlayArrow.module.73b017f2.js";import"./Info.eff55281.js";const n=e.div`
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
