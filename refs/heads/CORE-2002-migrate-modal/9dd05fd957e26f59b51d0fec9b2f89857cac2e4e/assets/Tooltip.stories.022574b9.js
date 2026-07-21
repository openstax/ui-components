import{s as e,a as o,j as r}from"./index.5895f7b0.js";import{T as m}from"./Tooltip.3d264de5.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.df043cbb.js";import"./useFocusRing.module.15274c95.js";import"./context.module.d8657925.js";import"./useButton.module.2a35b9ea.js";import"./OverlayArrow.module.878c2af0.js";import"./Info.c826fb4e.js";const n=e.div`
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
