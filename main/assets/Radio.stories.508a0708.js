import{s as r,a as e,F as i,j as n}from"./index.703f0666.js";import{R as o}from"./Radio.e252dc55.js";import"./theme.4cbb785b.js";import"./palette.15e4d008.js";import"./Tooltip.4e7403d7.js";import"./OverlayArrow.module.71424d6a.js";import"./focusSafely.module.9f333e43.js";import"./context.module.2c9931c5.js";import"./Info.b3523a2e.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
