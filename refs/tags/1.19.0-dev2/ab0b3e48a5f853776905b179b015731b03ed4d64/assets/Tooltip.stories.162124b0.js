import{s as e,a as o,j as r}from"./index.f87a91fe.js";import{T as m}from"./Tooltip.9b914a44.js";import"./theme.8e2e2444.js";import"./palette.15e4d008.js";import"./Button.module.463f6375.js";import"./useFocusRing.module.b8376a91.js";import"./context.module.c597e578.js";import"./useButton.module.43f19e26.js";import"./OverlayArrow.module.cfc1c070.js";import"./Info.8afdc032.js";const n=e.div`
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
