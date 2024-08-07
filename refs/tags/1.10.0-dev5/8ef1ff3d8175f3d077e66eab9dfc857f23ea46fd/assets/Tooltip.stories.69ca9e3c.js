import{s as e,a as o,j as i}from"./index.6aefe75b.js";import{T as r}from"./Tooltip.7965f10d.js";import"./theme.35c41bf1.js";import"./palette.15e4d008.js";import"./Button.module.06e93033.js";import"./context.module.c1c358e2.js";import"./useFocusRing.module.8e81e6a9.js";import"./OverlayArrow.module.ac204c83.js";import"./Info.21acbab2.js";const m=e.div`
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
`,g=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};
