import{s as e,a as o,j as r}from"./index.2a1aae0e.js";import{T as m}from"./Tooltip.a62db52c.js";import"./theme.6c5d108a.js";import"./palette.15e4d008.js";import"./Button.module.19f3fc81.js";import"./useFocusRing.module.452f8111.js";import"./context.module.27f044a2.js";import"./useButton.module.193cc18f.js";import"./OverlayArrow.module.e938e7ed.js";import"./Info.1670fa91.js";const n=e.div`
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
