import{s as e,a as o,j as r}from"./index.954e3bd6.js";import{T as m}from"./Tooltip.35d9475f.js";import"./theme.02a10726.js";import"./palette.15e4d008.js";import"./Button.module.7f8455ba.js";import"./context.module.bdacad02.js";import"./useFocusRing.module.393c9424.js";import"./OverlayArrow.module.de701aa5.js";import"./Info.67e29a55.js";const n=e.div`
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
