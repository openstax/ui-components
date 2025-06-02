import{s as e,a as o,j as r}from"./index.f5f3f699.js";import{T as m}from"./Tooltip.c4be3ddc.js";import"./theme.c41fbeb7.js";import"./palette.15e4d008.js";import"./Button.module.7faf4a52.js";import"./useFocusRing.module.7facdbf1.js";import"./context.module.402ebd89.js";import"./useButton.module.bb59648d.js";import"./OverlayArrow.module.a23aeb2b.js";import"./Info.07dcbb1d.js";const n=e.div`
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
