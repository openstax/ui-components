import{s as r,a as e,F as i,j as n}from"./index.66d9f391.js";import{R as o}from"./Radio.9cd76046.js";import"./theme.0311f00b.js";import"./palette.15e4d008.js";import"./Tooltip.71f96efb.js";import"./OverlayArrow.module.597b121f.js";import"./focusSafely.module.7b71a959.js";import"./context.module.25d6573d.js";import"./Info.36c0be75.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
