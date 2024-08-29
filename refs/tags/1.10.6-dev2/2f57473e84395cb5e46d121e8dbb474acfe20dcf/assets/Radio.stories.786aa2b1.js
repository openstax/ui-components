import{s as r,a as e,F as i,j as n}from"./index.150d903d.js";import{R as o}from"./Radio.1f7089ce.js";import"./theme.e822521e.js";import"./palette.15e4d008.js";import"./Tooltip.6ff948e0.js";import"./OverlayArrow.module.32e80c38.js";import"./focusSafely.module.685d6009.js";import"./context.module.53d3fe3a.js";import"./Info.2d901528.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
