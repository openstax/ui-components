import{s as e,a as o,j as r}from"./index.f7a4f65c.js";import{T as m}from"./Tooltip.baa1bfa6.js";import"./theme.637808db.js";import"./palette.15e4d008.js";import"./Button.module.b78ea298.js";import"./useFocusRing.module.a2851361.js";import"./context.module.28b418ef.js";import"./useButton.module.223f1d8b.js";import"./OverlayArrow.module.09df0dd5.js";import"./Info.c660f138.js";const n=e.div`
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
