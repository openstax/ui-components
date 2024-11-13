import{s as r,a as e,F as i,j as n}from"./index.cee9d99f.js";import{R as o}from"./Radio.751ac246.js";import"./theme.8f4c0875.js";import"./palette.15e4d008.js";import"./Tooltip.817876eb.js";import"./OverlayArrow.module.faea2fb6.js";import"./focusSafely.module.e32ac921.js";import"./context.module.35cbc0c8.js";import"./Info.7df0175c.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
