import{s as e,a as o,j as i}from"./index.e4480ff8.js";import{T as r}from"./Tooltip.29367180.js";import"./theme.5bd51325.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.84b1aa93.js";import"./focusSafely.module.838d93e1.js";import"./context.module.8697e9b1.js";import"./Info.2d35da7a.js";const m=e.div`
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
