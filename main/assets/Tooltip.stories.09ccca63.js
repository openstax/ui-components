import{s as e,a as o,j as r}from"./index.a6cdba77.js";import{T as m}from"./Tooltip.2489c9fd.js";import"./theme.fe4ca0d7.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.30a48656.js";import"./context.module.f1d2375d.js";import"./Hidden.module.fee0a2e4.js";import"./useButton.module.964fc550.js";import"./Info.f071dffd.js";const n=e.div`
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
