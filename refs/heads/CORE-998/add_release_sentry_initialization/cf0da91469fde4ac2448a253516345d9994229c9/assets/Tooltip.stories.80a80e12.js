import{s as e,a as o,j as r}from"./index.adf085fa.js";import{T as m}from"./Tooltip.28255be2.js";import"./theme.608fa8d7.js";import"./palette.15e4d008.js";import"./Button.module.7614afc9.js";import"./useFocusRing.module.55fcfc9f.js";import"./context.module.5e648b33.js";import"./useButton.module.e4b5f1aa.js";import"./OverlayArrow.module.b937a485.js";import"./Info.4b152671.js";const n=e.div`
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
