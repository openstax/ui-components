import{s as e,a as o,j as r}from"./index.790c2c28.js";import{T as m}from"./Tooltip.2610c6ff.js";import"./theme.16ef95e5.js";import"./palette.15e4d008.js";import"./Button.module.f1dd235e.js";import"./useFocusRing.module.51565bb9.js";import"./useButton.module.abe6cbee.js";import"./OverlayArrow.module.2a4025a3.js";import"./Info.262fc3b5.js";const n=e.div`
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
