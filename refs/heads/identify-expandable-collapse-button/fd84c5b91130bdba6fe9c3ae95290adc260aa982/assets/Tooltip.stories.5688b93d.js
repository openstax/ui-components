import{s as e,a as o,j as r}from"./index.619157ca.js";import{T as m}from"./Tooltip.6b6cfbd3.js";import"./theme.8e9f065c.js";import"./palette.15e4d008.js";import"./Button.module.c96bc382.js";import"./useFocusRing.module.472e70cc.js";import"./useButton.module.d2544a01.js";import"./OverlayArrow.module.667cb704.js";import"./Info.a08fcec3.js";const n=e.div`
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
