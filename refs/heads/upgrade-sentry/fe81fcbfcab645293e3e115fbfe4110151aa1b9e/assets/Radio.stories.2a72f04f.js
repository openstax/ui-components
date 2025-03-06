import{s as r,a as e,F as i,j as n}from"./index.a8c6b030.js";import{R as o}from"./Radio.cc02448f.js";import"./theme.d4b5e010.js";import"./palette.15e4d008.js";import"./Tooltip.7edfd8c7.js";import"./OverlayArrow.module.112f66bc.js";import"./context.module.44ac2d6f.js";import"./useButton.module.4016024e.js";import"./Info.aac32841.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
