import{s as e,a as o,j as r}from"./index.3eca7034.js";import{T as m}from"./Tooltip.e2d8043a.js";import"./theme.9a6f3037.js";import"./palette.15e4d008.js";import"./Button.module.beb3e37f.js";import"./useFocusRing.module.b489b1c4.js";import"./useButton.module.b4ddbfd9.js";import"./OverlayArrow.module.be335e74.js";import"./Info.10824f2e.js";const n=e.div`
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
