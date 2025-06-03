import{s as e,a as o,j as r}from"./index.879bf273.js";import{T as m}from"./Tooltip.57fa4a92.js";import"./theme.db85a27f.js";import"./palette.15e4d008.js";import"./Button.module.d99b3d65.js";import"./useFocusRing.module.5e96a940.js";import"./useButton.module.00da0c26.js";import"./OverlayArrow.module.5ae52fee.js";import"./Info.28043656.js";const n=e.div`
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
