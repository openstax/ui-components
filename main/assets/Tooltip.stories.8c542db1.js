import{s as e,a as o,j as i}from"./index.06bd856d.js";import{T as r}from"./Tooltip.69b7711c.js";import"./theme.be7e82d2.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.4d1f3241.js";import"./focusSafely.module.1a87d2d4.js";import"./context.module.732664c8.js";import"./Info.173fde48.js";const m=e.div`
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
