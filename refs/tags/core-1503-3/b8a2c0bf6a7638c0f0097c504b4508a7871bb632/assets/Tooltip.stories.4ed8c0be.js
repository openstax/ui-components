import{s as e,a as o,j as r}from"./index.27cf8e2c.js";import{T as m}from"./Tooltip.5ae92a28.js";import"./theme.697fe45e.js";import"./palette.5e342580.js";import"./Button.module.a790372c.js";import"./useFocusRing.module.6d34efbe.js";import"./context.module.05e858cb.js";import"./useButton.module.7143ecda.js";import"./OverlayArrow.module.702fa2e9.js";import"./Info.5e05b918.js";const n=e.div`
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
