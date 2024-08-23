import{s as r,a as e,F as i,j as n}from"./index.da1c4242.js";import{R as o}from"./Radio.5fb78702.js";import"./theme.ba7e5a80.js";import"./palette.15e4d008.js";import"./Tooltip.9d66c3a6.js";import"./OverlayArrow.module.a9d997fd.js";import"./focusSafely.module.20778e4e.js";import"./context.module.d92a133c.js";import"./Info.fbf8c761.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
