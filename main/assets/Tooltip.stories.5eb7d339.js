import{s as e,a as o,j as i}from"./index.380c3e9b.js";import{T as r}from"./Tooltip.8fb297de.js";import"./theme.955541a7.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.8dec5002.js";import"./focusSafely.module.50ff3e57.js";import"./context.module.c166cb69.js";import"./Info.6b1eea29.js";const m=e.div`
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
