import{s as r,a as e,F as i,j as n}from"./index.2ecd1c91.js";import{R as o}from"./Radio.6c59d483.js";import"./theme.dc4e28f0.js";import"./palette.15e4d008.js";import"./Tooltip.81844bcb.js";import"./OverlayArrow.module.34b5595c.js";import"./focusSafely.module.8bfda9c4.js";import"./context.module.e26f7530.js";import"./Info.9eb43422.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
