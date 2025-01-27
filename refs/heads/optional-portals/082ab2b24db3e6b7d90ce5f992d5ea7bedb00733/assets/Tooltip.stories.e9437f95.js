import{s as e,a as o,j as r}from"./index.3f26f4ee.js";import{T as m}from"./Tooltip.60c502a4.js";import"./theme.7ecc0110.js";import"./palette.15e4d008.js";import"./Button.module.4ebc644d.js";import"./context.module.a4a5e91f.js";import"./useFocusRing.module.857bced1.js";import"./OverlayArrow.module.e80dcae8.js";import"./Info.471bedb1.js";const n=e.div`
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
