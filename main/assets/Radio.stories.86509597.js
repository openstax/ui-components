import{s as d,a as e,F as i,j as n}from"./index.88b42fe3.js";import{R as o}from"./Radio.60dff222.js";import"./theme.37cf361a.js";import"./palette.15e4d008.js";import"./Tooltip.7ae920d2.js";import"./OverlayArrow.module.93a692fb.js";import"./context.module.9894b877.js";import"./Hidden.module.4a60847a.js";import"./useButton.module.3aaaaec2.js";import"./Info.234ecbd7.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
