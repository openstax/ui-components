import{s as d,a as e,F as i,j as n}from"./index.698c06ff.js";import{R as o}from"./Radio.6a6bac5e.js";import"./theme.e00cde55.js";import"./palette.15e4d008.js";import"./Tooltip.d503e9e1.js";import"./OverlayArrow.module.68143d4c.js";import"./context.module.339fe9c2.js";import"./Hidden.module.40052b85.js";import"./useButton.module.2eb38fb0.js";import"./Info.de1fd655.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
