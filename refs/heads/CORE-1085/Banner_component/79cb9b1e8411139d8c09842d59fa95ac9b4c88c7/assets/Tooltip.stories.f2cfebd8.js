import{s as e,a as o,j as r}from"./index.3e02da38.js";import{T as m}from"./Tooltip.0759ac38.js";import"./theme.92b14b32.js";import"./palette.15e4d008.js";import"./Button.module.ab75db5d.js";import"./useFocusRing.module.0087e0fb.js";import"./context.module.0861e9bf.js";import"./useButton.module.72fe30f5.js";import"./OverlayArrow.module.2b6ff940.js";import"./Info.606d11f5.js";const n=e.div`
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
