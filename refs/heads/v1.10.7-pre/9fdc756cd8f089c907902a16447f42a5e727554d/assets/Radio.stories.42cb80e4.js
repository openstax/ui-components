import{s as r,a as e,F as i,j as n}from"./index.602bb277.js";import{R as o}from"./Radio.ae9d1e7f.js";import"./theme.36c8ac24.js";import"./palette.15e4d008.js";import"./Tooltip.b62930ae.js";import"./OverlayArrow.module.971f8047.js";import"./focusSafely.module.4a68d4f3.js";import"./context.module.55958d9e.js";import"./Info.918c1fe2.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
