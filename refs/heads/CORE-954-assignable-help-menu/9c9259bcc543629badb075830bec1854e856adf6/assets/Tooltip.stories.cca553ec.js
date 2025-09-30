import{s as e,a as o,j as r}from"./index.275c3d05.js";import{T as m}from"./Tooltip.ae4d4b59.js";import"./theme.f1eeab5d.js";import"./palette.15e4d008.js";import"./Button.module.45864509.js";import"./useFocusRing.module.eef34ac4.js";import"./context.module.123aa522.js";import"./useButton.module.39b3eef1.js";import"./OverlayArrow.module.06d04c30.js";import"./Info.decc1574.js";const n=e.div`
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
