import{s as e,a as o,j as i}from"./index.0a27c5ce.js";import{T as r}from"./Tooltip.c842fc95.js";import"./theme.3d34f3e6.js";import"./palette.15e4d008.js";import"./Button.module.b78edd68.js";import"./context.module.cbef6687.js";import"./focusSafely.module.baee9b88.js";import"./useFocusRing.module.b05559ad.js";import"./OverlayArrow.module.af6871ce.js";import"./Info.c7a3507e.js";const m=e.div`
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
`,h=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
