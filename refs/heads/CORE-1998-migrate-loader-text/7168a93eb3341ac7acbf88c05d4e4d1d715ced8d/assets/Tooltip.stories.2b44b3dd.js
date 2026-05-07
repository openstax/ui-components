import{s as e,a as o,j as r}from"./index.92dc451b.js";import{T as m}from"./Tooltip.81cec7ed.js";import"./theme.11c81b00.js";import"./palette.5e342580.js";import"./Button.module.68431157.js";import"./useFocusRing.module.d89eaa9f.js";import"./context.module.8756b534.js";import"./useButton.module.61570390.js";import"./OverlayArrow.module.f4844a5a.js";import"./Info.40c2dc03.js";const n=e.div`
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
