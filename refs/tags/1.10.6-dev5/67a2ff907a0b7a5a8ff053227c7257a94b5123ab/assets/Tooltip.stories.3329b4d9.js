import{s as e,a as o,j as i}from"./index.e2c08fa7.js";import{T as r}from"./Tooltip.cf5e4a0c.js";import"./theme.b9535cc3.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.593e7fbf.js";import"./focusSafely.module.61bf43db.js";import"./context.module.9a4dbe5e.js";import"./Info.d7b9a859.js";const m=e.div`
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
