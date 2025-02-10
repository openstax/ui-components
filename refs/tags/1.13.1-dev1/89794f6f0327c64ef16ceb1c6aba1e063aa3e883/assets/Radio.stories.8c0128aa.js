import{s as d,a as e,F as i,j as n}from"./index.f8d78af2.js";import{R as o}from"./Radio.b59595c4.js";import"./theme.23714136.js";import"./palette.15e4d008.js";import"./Tooltip.2359d4bc.js";import"./OverlayArrow.module.237670a1.js";import"./context.module.98b3790d.js";import"./Hidden.module.11724547.js";import"./useButton.module.edebdc71.js";import"./Info.c99af8a4.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
