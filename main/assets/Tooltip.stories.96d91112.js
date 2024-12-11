import{s as e,a as o,j as r}from"./index.069edce0.js";import{T as m}from"./Tooltip.e2da12b1.js";import"./theme.7690d78e.js";import"./palette.15e4d008.js";import"./Button.module.ed04d4f1.js";import"./context.module.f7ec4f70.js";import"./focusSafely.module.e4ff997f.js";import"./useFocusRing.module.188870d8.js";import"./OverlayArrow.module.86837da0.js";import"./Info.abed83cd.js";const n=e.div`
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
