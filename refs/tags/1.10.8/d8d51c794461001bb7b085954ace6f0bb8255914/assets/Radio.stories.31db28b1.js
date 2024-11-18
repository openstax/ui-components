import{s as r,a as e,F as i,j as n}from"./index.ee7cf99b.js";import{R as o}from"./Radio.54ed81e4.js";import"./theme.0cc7d32d.js";import"./palette.15e4d008.js";import"./Tooltip.e9112bf6.js";import"./OverlayArrow.module.80aa1d0a.js";import"./focusSafely.module.93898310.js";import"./context.module.b6a2084f.js";import"./Info.c04b974f.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
