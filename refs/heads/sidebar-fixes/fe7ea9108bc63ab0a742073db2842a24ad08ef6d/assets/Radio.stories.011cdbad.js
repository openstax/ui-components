import{s as r,a as e,F as i,j as n}from"./index.5748ac5d.js";import{R as o}from"./Radio.1f56aec1.js";import"./theme.4dd66404.js";import"./palette.15e4d008.js";import"./Tooltip.78b0155e.js";import"./OverlayArrow.module.ca950bdd.js";import"./focusSafely.module.265c7811.js";import"./context.module.3d32e3de.js";import"./Info.8a6bafd9.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
