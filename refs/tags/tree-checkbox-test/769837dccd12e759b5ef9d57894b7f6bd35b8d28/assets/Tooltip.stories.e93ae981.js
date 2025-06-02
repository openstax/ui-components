import{s as e,a as o,j as r}from"./index.2434011c.js";import{T as m}from"./Tooltip.807a6e24.js";import"./theme.9e2be59f.js";import"./palette.15e4d008.js";import"./Button.module.985ae705.js";import"./useFocusRing.module.c3aedc56.js";import"./context.module.f51aa8dc.js";import"./useButton.module.757e769b.js";import"./OverlayArrow.module.6b356616.js";import"./Info.a98edbd3.js";const n=e.div`
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
