import{s as e,a as o,j as r}from"./index.af192ac9.js";import{T as m}from"./Tooltip.a41c94a5.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.f299e16b.js";import"./useFocusRing.module.9ca0bfa4.js";import"./context.module.1fad9a0d.js";import"./useButton.module.0dba6a7e.js";import"./OverlayArrow.module.770c8e2c.js";import"./Info.24886614.js";const n=e.div`
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
