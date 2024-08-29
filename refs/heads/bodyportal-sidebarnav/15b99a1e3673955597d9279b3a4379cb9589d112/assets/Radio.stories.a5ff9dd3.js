import{s as r,a as e,F as i,j as n}from"./index.472bc33b.js";import{R as o}from"./Radio.1917dfa3.js";import"./theme.7cea2114.js";import"./palette.15e4d008.js";import"./Tooltip.77c2a421.js";import"./OverlayArrow.module.60f557d6.js";import"./focusSafely.module.e0435f7f.js";import"./context.module.23bd5f65.js";import"./Info.61c62c62.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
