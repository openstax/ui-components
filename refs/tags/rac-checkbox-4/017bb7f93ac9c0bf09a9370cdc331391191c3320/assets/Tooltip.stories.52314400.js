import{s as e,a as o,j as r}from"./index.d09ddd49.js";import{T as m}from"./Tooltip.cdf063e1.js";import"./theme.638fec6c.js";import"./palette.15e4d008.js";import"./Button.module.7c993853.js";import"./useFocusRing.module.0f812f74.js";import"./useButton.module.a1e8cbce.js";import"./OverlayArrow.module.aeffdafa.js";import"./Info.c859fadb.js";const n=e.div`
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
