import{s as e,a as o,j as r}from"./index.b219e867.js";import{T as m}from"./Tooltip.39260a04.js";import"./theme.cfbbe147.js";import"./palette.15e4d008.js";import"./Button.module.2f774b4e.js";import"./useFocusRing.module.15e3d93c.js";import"./context.module.2d6ae0a1.js";import"./useButton.module.251b3ad6.js";import"./OverlayArrow.module.d7d1e12e.js";import"./Info.edc24349.js";const n=e.div`
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
