import{s as e,a as o,j as r}from"./index.ce91dad7.js";import{T as m}from"./Tooltip.c91efee7.js";import"./theme.ab33c2a9.js";import"./palette.15e4d008.js";import"./Button.module.32052beb.js";import"./useFocusRing.module.9be1e3d5.js";import"./context.module.b3d394e1.js";import"./useButton.module.2ce63a7a.js";import"./OverlayArrow.module.55b3164e.js";import"./Info.e332656b.js";const n=e.div`
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
