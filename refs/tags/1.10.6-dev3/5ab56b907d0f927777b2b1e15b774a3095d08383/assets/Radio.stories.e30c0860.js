import{s as r,a as e,F as i,j as n}from"./index.7adc4e41.js";import{R as o}from"./Radio.4886ea3c.js";import"./theme.18a18449.js";import"./palette.15e4d008.js";import"./Tooltip.c9de3905.js";import"./OverlayArrow.module.66c91a56.js";import"./focusSafely.module.b8fc58d0.js";import"./context.module.ada5344c.js";import"./Info.3a5820b6.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
