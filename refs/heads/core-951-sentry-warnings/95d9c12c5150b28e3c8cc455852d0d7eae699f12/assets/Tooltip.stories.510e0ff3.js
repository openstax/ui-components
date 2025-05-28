import{s as e,a as o,j as r}from"./index.8357a086.js";import{T as m}from"./Tooltip.5c5d7d1d.js";import"./theme.3b3bbdc1.js";import"./palette.15e4d008.js";import"./Button.module.59ce13d8.js";import"./useFocusRing.module.8d534ba9.js";import"./useButton.module.1db1a81e.js";import"./OverlayArrow.module.ed713784.js";import"./Info.5bdd838e.js";const n=e.div`
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
