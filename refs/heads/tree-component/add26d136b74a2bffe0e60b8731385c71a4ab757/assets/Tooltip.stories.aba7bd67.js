import{s as e,a as o,j as r}from"./index.cbea4b92.js";import{T as m}from"./Tooltip.a2203e42.js";import"./theme.078f33d0.js";import"./palette.15e4d008.js";import"./Button.module.d22ddfc8.js";import"./useFocusRing.module.7afdb1fb.js";import"./useButton.module.c1972754.js";import"./OverlayArrow.module.d5847ca0.js";import"./Info.31dc6fda.js";const n=e.div`
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
