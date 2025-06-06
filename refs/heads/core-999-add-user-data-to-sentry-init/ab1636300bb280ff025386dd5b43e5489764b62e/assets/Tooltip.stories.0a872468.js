import{s as e,a as o,j as r}from"./index.e2f6827d.js";import{T as m}from"./Tooltip.825f8cb9.js";import"./theme.f8c44abb.js";import"./palette.15e4d008.js";import"./Button.module.ccc2034a.js";import"./useFocusRing.module.d607e266.js";import"./useButton.module.af4a9b35.js";import"./OverlayArrow.module.21a4e296.js";import"./Info.c7c62dfb.js";const n=e.div`
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
