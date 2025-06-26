import{s as e,a as o,j as r}from"./index.25aec46f.js";import{T as m}from"./Tooltip.435cab53.js";import"./theme.dc3599a9.js";import"./palette.15e4d008.js";import"./Button.module.8477d730.js";import"./useFocusRing.module.5ba3a1ea.js";import"./context.module.8c30aefe.js";import"./useButton.module.fdf4c4da.js";import"./OverlayArrow.module.7c602be9.js";import"./Info.63c6ea85.js";const n=e.div`
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
