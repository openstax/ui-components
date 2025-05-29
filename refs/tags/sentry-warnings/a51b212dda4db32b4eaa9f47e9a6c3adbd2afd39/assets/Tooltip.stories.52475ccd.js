import{s as e,a as o,j as r}from"./index.c4cdfe2f.js";import{T as m}from"./Tooltip.519b678c.js";import"./theme.9f20467b.js";import"./palette.15e4d008.js";import"./Button.module.24e7dafc.js";import"./useFocusRing.module.2ef860e0.js";import"./useButton.module.cf61be06.js";import"./OverlayArrow.module.0f05df35.js";import"./Info.fa5982f4.js";const n=e.div`
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
