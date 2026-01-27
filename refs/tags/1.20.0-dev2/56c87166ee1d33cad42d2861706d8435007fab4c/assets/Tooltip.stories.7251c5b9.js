import{s as e,a as o,j as r}from"./index.81dfb6b1.js";import{T as m}from"./Tooltip.650007db.js";import"./theme.7ceff249.js";import"./palette.5e342580.js";import"./Button.module.e88ccaec.js";import"./useFocusRing.module.3c6a9e23.js";import"./context.module.c115203f.js";import"./useButton.module.14846d47.js";import"./OverlayArrow.module.02565d75.js";import"./Info.2af4a111.js";const n=e.div`
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
