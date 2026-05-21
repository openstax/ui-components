import{s as e,a as o,j as r}from"./index.1248aae2.js";import{T as m}from"./Tooltip.4cb106ac.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.34c426f4.js";import"./useFocusRing.module.fdc61ce5.js";import"./context.module.4531dced.js";import"./useButton.module.d26e7145.js";import"./OverlayArrow.module.d0371c8d.js";import"./Info.8e7c8e7b.js";const n=e.div`
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
