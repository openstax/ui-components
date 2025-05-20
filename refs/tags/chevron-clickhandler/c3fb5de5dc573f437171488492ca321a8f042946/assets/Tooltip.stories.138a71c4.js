import{s as e,a as o,j as r}from"./index.614bee7f.js";import{T as m}from"./Tooltip.f64405a1.js";import"./theme.aaf51a92.js";import"./palette.15e4d008.js";import"./Button.module.fec8517f.js";import"./useFocusRing.module.4fb367cb.js";import"./useButton.module.8c2b137c.js";import"./OverlayArrow.module.482705ac.js";import"./Info.8f33b16c.js";const n=e.div`
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
