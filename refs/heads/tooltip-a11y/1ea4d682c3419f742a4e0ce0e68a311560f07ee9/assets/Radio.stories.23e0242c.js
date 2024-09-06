import{s as r,a as e,F as i,j as n}from"./index.00606b52.js";import{R as o}from"./Radio.fcb6113e.js";import"./theme.0f4e0b6a.js";import"./palette.15e4d008.js";import"./Tooltip.255f1758.js";import"./OverlayArrow.module.cb2b2688.js";import"./focusSafely.module.66df17cf.js";import"./context.module.89914598.js";import"./Info.97c2e07c.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
