import{s as e,a as o,j as r}from"./index.f2772add.js";import{T as m}from"./Tooltip.6aca1d44.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.7a5e5847.js";import"./useFocusRing.module.044e6f2d.js";import"./context.module.750af040.js";import"./useButton.module.bdc837cf.js";import"./OverlayArrow.module.8c585dd7.js";import"./Info.8bb49714.js";const n=e.div`
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
