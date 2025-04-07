import{s as r,a as e,F as i,j as n}from"./index.d2b7e1af.js";import{R as o}from"./Radio.14d343af.js";import"./theme.f138921f.js";import"./palette.15e4d008.js";import"./Tooltip.b5193e03.js";import"./OverlayArrow.module.75546c43.js";import"./context.module.23197c15.js";import"./useButton.module.64381ecb.js";import"./Info.a0e52576.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
