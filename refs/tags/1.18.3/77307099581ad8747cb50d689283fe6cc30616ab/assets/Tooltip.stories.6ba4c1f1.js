import{s as e,a as o,j as r}from"./index.b5746b1a.js";import{T as m}from"./Tooltip.d180d9af.js";import"./theme.91937cdd.js";import"./palette.15e4d008.js";import"./Button.module.95aab1aa.js";import"./useFocusRing.module.a904b2f7.js";import"./context.module.808955ae.js";import"./useButton.module.b0e11eb9.js";import"./OverlayArrow.module.7326a520.js";import"./Info.54fbeea3.js";const n=e.div`
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
