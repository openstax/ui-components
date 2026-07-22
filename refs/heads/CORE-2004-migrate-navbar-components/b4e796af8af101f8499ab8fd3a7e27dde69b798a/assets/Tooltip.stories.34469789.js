import{s as e,a as o,j as r}from"./index.f211f60f.js";import{T as m}from"./Tooltip.0b44eb63.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.78006367.js";import"./useFocusRing.module.218fb9a3.js";import"./context.module.535a92e6.js";import"./useButton.module.a5eaf0fd.js";import"./OverlayArrow.module.b208186c.js";import"./Info.a6b22557.js";const n=e.div`
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
