import{s as e,a as o,j as r}from"./index.ce0241c7.js";import{T as m}from"./Tooltip.c857f948.js";import"./theme.d797b6bd.js";import"./palette.15e4d008.js";import"./Button.module.c59fa80d.js";import"./useFocusRing.module.1ae2676e.js";import"./context.module.bc4f193c.js";import"./useButton.module.bac1c261.js";import"./OverlayArrow.module.b9376811.js";import"./Info.9afe181b.js";const n=e.div`
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
