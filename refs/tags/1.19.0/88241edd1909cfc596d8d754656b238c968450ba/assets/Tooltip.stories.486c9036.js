import{s as e,a as o,j as r}from"./index.a39ae2d7.js";import{T as m}from"./Tooltip.7d265c05.js";import"./theme.7db12104.js";import"./palette.15e4d008.js";import"./Button.module.6d6269e6.js";import"./useFocusRing.module.7dd38b4e.js";import"./context.module.f0fb5150.js";import"./useButton.module.e5c4e9f8.js";import"./OverlayArrow.module.7cf694f9.js";import"./Info.009c6251.js";const n=e.div`
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
