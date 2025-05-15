import{s as e,a as o,j as r}from"./index.e1a1e965.js";import{T as m}from"./Tooltip.16626892.js";import"./theme.5d2d8ce5.js";import"./palette.15e4d008.js";import"./Button.module.d5bbfaa4.js";import"./useFocusRing.module.b3b56f72.js";import"./useButton.module.73b15cab.js";import"./OverlayArrow.module.255a4692.js";import"./Info.a95f2c7c.js";const n=e.div`
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
