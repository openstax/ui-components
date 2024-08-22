import{s as r,a as e,F as i,j as n}from"./index.dd572cb5.js";import{R as o}from"./Radio.e93f6683.js";import"./theme.5b7cb9a5.js";import"./palette.15e4d008.js";import"./Tooltip.353d4a36.js";import"./OverlayArrow.module.38284a40.js";import"./focusSafely.module.b9b9ee4d.js";import"./context.module.bcb8769f.js";import"./Info.3f328057.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
