import{s as r,a as e,F as i,j as n}from"./index.2ed57b38.js";import{R as o}from"./Radio.acc3a7ac.js";import"./theme.f9556c48.js";import"./palette.15e4d008.js";import"./Tooltip.9fd15ad1.js";import"./OverlayArrow.module.2a7738a7.js";import"./context.module.34b4e0cd.js";import"./useButton.module.f48321a7.js";import"./Info.2f43cfad.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
