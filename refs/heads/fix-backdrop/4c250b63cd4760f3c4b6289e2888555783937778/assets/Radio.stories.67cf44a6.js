import{s as r,a as e,F as i,j as n}from"./index.6ca94291.js";import{R as o}from"./Radio.f23a8f9d.js";import"./theme.dae5b85e.js";import"./palette.15e4d008.js";import"./Tooltip.910acd51.js";import"./OverlayArrow.module.16dd7733.js";import"./focusSafely.module.8349a574.js";import"./context.module.3ee4c062.js";import"./Info.3733e7ed.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
