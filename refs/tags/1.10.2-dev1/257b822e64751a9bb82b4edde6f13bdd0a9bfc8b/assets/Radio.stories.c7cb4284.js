import{s as r,a as e,F as i,j as n}from"./index.3afea343.js";import{R as o}from"./Radio.e247fe86.js";import"./theme.ca6c9e7c.js";import"./palette.15e4d008.js";import"./Tooltip.215b8246.js";import"./OverlayArrow.module.0d209ee2.js";import"./focusSafely.module.815c5fee.js";import"./context.module.abacec58.js";import"./Info.1688bc80.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
