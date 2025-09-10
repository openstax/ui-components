import{s as e,a as o,j as r}from"./index.b2621a8a.js";import{T as m}from"./Tooltip.1152632a.js";import"./theme.4b70bcd5.js";import"./palette.15e4d008.js";import"./Button.module.51829b69.js";import"./useFocusRing.module.f1baf383.js";import"./context.module.8c2030d1.js";import"./useButton.module.4bab03b2.js";import"./OverlayArrow.module.f66f286a.js";import"./Info.0e8d1f0f.js";const n=e.div`
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
