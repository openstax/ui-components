import{s as r,a as e,F as i,j as n}from"./index.1658d0ff.js";import{R as o}from"./Radio.9c2f2d25.js";import"./theme.6b093367.js";import"./palette.15e4d008.js";import"./Tooltip.1fed0939.js";import"./OverlayArrow.module.b8c2a587.js";import"./context.module.9c47d877.js";import"./useButton.module.6a81afb6.js";import"./Info.45c64a54.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
