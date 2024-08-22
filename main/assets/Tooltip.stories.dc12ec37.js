import{s as e,a as o,j as i}from"./index.f190344a.js";import{T as r}from"./Tooltip.7ee46939.js";import"./theme.d2e825be.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.3bcab41b.js";import"./focusSafely.module.e8463b8c.js";import"./context.module.bb7f2660.js";import"./Info.6a240bef.js";const m=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,n=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,f=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default};
