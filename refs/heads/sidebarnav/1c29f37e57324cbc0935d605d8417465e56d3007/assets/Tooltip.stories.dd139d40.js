import{s as e,a as o,j as i}from"./index.9ead4d17.js";import{T as r}from"./Tooltip.761be85c.js";import"./theme.4d324ff0.js";import"./palette.15e4d008.js";import"./Button.module.44a1faad.js";import"./context.module.18b5dce2.js";import"./useFocusRing.module.3dba2959.js";import"./OverlayArrow.module.83652a52.js";import"./Info.16adc5ff.js";const m=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,n=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,g=()=>o(m,{children:["right","top","bottom"].map(t=>i(n,{children:[o(r,{placement:t,children:"Tooltip content goes here."}),t]}))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default};