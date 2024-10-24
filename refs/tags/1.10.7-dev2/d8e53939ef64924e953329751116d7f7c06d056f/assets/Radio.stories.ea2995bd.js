import{s as r,a as e,F as i,j as n}from"./index.2cb5524c.js";import{R as o}from"./Radio.a1bb2c31.js";import"./theme.5b4c592d.js";import"./palette.15e4d008.js";import"./Tooltip.ba3c1b72.js";import"./OverlayArrow.module.8ef5b83a.js";import"./focusSafely.module.c7cdd5b1.js";import"./context.module.97ea21cf.js";import"./Info.23bba247.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
