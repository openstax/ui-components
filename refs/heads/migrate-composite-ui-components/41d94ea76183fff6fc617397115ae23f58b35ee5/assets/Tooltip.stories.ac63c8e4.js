import{s as e,a as o,j as r}from"./index.f5b07e0b.js";import{T as m}from"./Tooltip.ff9edc10.js";import"./Button.module.74b9e455.js";import"./useFocusRing.module.9030c39a.js";import"./Hidden.module.6087b984.js";import"./useButton.module.228e69f7.js";import"./OverlayArrow.module.e4fe79a6.js";import"./context.module.9667934b.js";import"./Info.b240e711.js";import"./palette.5e342580.js";const n=e.div`
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
