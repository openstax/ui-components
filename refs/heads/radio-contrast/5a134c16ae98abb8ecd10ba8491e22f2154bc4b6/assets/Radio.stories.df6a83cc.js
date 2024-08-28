import{s as r,a as e,F as i,j as n}from"./index.8b8509b6.js";import{R as o}from"./Radio.302aaa7d.js";import"./theme.0a1eaf15.js";import"./palette.15e4d008.js";import"./Tooltip.6f5b19ca.js";import"./OverlayArrow.module.5caccc56.js";import"./focusSafely.module.db157cdf.js";import"./context.module.e7b96665.js";import"./Info.121452c3.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
