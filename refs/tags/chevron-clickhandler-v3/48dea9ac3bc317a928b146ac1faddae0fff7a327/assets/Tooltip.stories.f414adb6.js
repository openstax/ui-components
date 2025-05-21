import{s as e,a as o,j as r}from"./index.3f42f478.js";import{T as m}from"./Tooltip.8fb6796e.js";import"./theme.78dc4d32.js";import"./palette.15e4d008.js";import"./Button.module.fa97bf0d.js";import"./useFocusRing.module.30a8faa1.js";import"./useButton.module.78402594.js";import"./OverlayArrow.module.470e3934.js";import"./Info.8d43affc.js";const n=e.div`
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
