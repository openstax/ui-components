import{s as r,a as e,F as i,j as n}from"./index.f09d4694.js";import{R as o}from"./Radio.3ebfc008.js";import"./theme.e36af20f.js";import"./palette.15e4d008.js";import"./Tooltip.823b01a6.js";import"./OverlayArrow.module.1c35a28b.js";import"./context.module.98926726.js";import"./useButton.module.bc2a963e.js";import"./Info.ca27969a.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
