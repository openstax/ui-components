import{s as e,a as o,j as r}from"./index.fb959489.js";import{T as m}from"./Tooltip.92edf888.js";import"./theme.0336608a.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.690c2210.js";import"./context.module.ef808172.js";import"./Hidden.module.ba18ed70.js";import"./useButton.module.5e1178f2.js";import"./Info.55fe3a40.js";const n=e.div`
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
