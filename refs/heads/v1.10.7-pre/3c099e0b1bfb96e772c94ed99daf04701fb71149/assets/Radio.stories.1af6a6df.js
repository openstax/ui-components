import{s as r,a as e,F as i,j as n}from"./index.66dfb7be.js";import{R as o}from"./Radio.6c8bb610.js";import"./theme.fb75f9d7.js";import"./palette.15e4d008.js";import"./Tooltip.7ed752be.js";import"./OverlayArrow.module.8fa81aa5.js";import"./focusSafely.module.999e0ffb.js";import"./context.module.6e56b063.js";import"./Info.02e297cf.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
