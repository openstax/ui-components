import{s as e,a as o,j as r}from"./index.3d937027.js";import{T as m}from"./Tooltip.ed747826.js";import"./theme.faf9aa84.js";import"./palette.15e4d008.js";import"./Button.module.40eb5513.js";import"./useFocusRing.module.d084052f.js";import"./context.module.0293aa53.js";import"./useButton.module.8eae8f9a.js";import"./OverlayArrow.module.1d2482de.js";import"./Info.34075c4f.js";const n=e.div`
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
