import{s as r,a as e,F as i,j as n}from"./index.7c51418c.js";import{R as o}from"./Radio.829fba0c.js";import"./theme.0db5b841.js";import"./palette.15e4d008.js";import"./Tooltip.5e2fdad7.js";import"./OverlayArrow.module.d6a2f595.js";import"./focusSafely.module.0ae58c64.js";import"./context.module.d18a6704.js";import"./Info.df120a73.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};