import{s as e,a as o,j as r}from"./index.221f68d3.js";import{T as m}from"./Tooltip.26caee5b.js";import"./theme.412e53c9.js";import"./palette.15e4d008.js";import"./Button.module.a1258f8d.js";import"./useFocusRing.module.359a7211.js";import"./context.module.116ede5a.js";import"./useButton.module.02e5a16f.js";import"./OverlayArrow.module.980bfb5a.js";import"./Info.8bebec40.js";const n=e.div`
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
