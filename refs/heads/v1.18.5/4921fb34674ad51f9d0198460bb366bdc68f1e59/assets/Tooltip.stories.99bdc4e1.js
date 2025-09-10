import{s as e,a as o,j as r}from"./index.837c2439.js";import{T as m}from"./Tooltip.11d91ed6.js";import"./theme.108e3497.js";import"./palette.15e4d008.js";import"./Button.module.fa3751f3.js";import"./useFocusRing.module.fe4029c6.js";import"./context.module.45618bf3.js";import"./useButton.module.e3251c36.js";import"./OverlayArrow.module.d5859410.js";import"./Info.78bfef84.js";const n=e.div`
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
