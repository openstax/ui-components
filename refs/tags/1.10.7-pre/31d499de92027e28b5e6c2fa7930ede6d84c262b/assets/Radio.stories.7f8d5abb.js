import{s as r,a as e,F as i,j as n}from"./index.fa345119.js";import{R as o}from"./Radio.bc2e6204.js";import"./theme.823fe688.js";import"./palette.15e4d008.js";import"./Tooltip.86088077.js";import"./OverlayArrow.module.efe9891e.js";import"./focusSafely.module.bc4a327c.js";import"./context.module.36170295.js";import"./Info.55e24332.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
