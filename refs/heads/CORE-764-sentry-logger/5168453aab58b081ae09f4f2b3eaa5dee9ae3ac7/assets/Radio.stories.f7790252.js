import{s as r,a as e,F as i,j as n}from"./index.6f6ddae4.js";import{R as o}from"./Radio.1de984b2.js";import"./theme.a4de61f9.js";import"./palette.15e4d008.js";import"./Tooltip.34de7b4c.js";import"./OverlayArrow.module.96661f55.js";import"./context.module.a76b02d8.js";import"./useButton.module.adc3c81f.js";import"./Info.98293dfe.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
