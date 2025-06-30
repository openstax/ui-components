import{s as e,a as o,j as r}from"./index.3a0fffde.js";import{T as m}from"./Tooltip.e93774b3.js";import"./theme.4a8164a7.js";import"./palette.15e4d008.js";import"./Button.module.24c23c43.js";import"./useFocusRing.module.af70b7f2.js";import"./context.module.1251d844.js";import"./useButton.module.afb0a005.js";import"./OverlayArrow.module.c806ba33.js";import"./Info.7b871bcd.js";const n=e.div`
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
