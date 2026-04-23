import{s as e,a as o,j as r}from"./index.10dc917b.js";import{T as m}from"./Tooltip.225441be.js";import"./theme.303e82e8.js";import"./palette.5e342580.js";import"./Button.module.3c6b0fe2.js";import"./useFocusRing.module.bb5137fc.js";import"./context.module.7d3dd46f.js";import"./useButton.module.c05fd999.js";import"./OverlayArrow.module.978a211c.js";import"./Info.90e8ad86.js";const n=e.div`
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
