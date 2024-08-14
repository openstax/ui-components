import{s as r,a as e,F as i,j as n}from"./index.2f94ad0b.js";import{R as o}from"./Radio.73ef3ee4.js";import"./theme.2fe80fd8.js";import"./palette.15e4d008.js";import"./Tooltip.79a9cef7.js";import"./OverlayArrow.module.70a9028f.js";import"./focusSafely.module.71989e4d.js";import"./context.module.b48470d5.js";import"./Info.9ab08e8e.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
