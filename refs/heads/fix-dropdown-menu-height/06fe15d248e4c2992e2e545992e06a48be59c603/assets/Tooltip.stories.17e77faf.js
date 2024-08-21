import{s as e,a as o,j as i}from"./index.3ca53d7c.js";import{T as r}from"./Tooltip.7303ff82.js";import"./theme.6648c6ca.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.32cc63f7.js";import"./focusSafely.module.6a0810d6.js";import"./context.module.e746dfd4.js";import"./Info.bddd3592.js";const m=e.div`
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
