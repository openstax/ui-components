import{s as d,a as e,F as i,j as n}from"./index.c72783d2.js";import{R as o}from"./Radio.223d2890.js";import"./theme.09220cf1.js";import"./palette.15e4d008.js";import"./Tooltip.345b6caf.js";import"./Button.module.4666d548.js";import"./useFocusRing.module.fb6cdfe4.js";import"./context.module.5c49e7c5.js";import"./useButton.module.d31fa088.js";import"./OverlayArrow.module.669eb4a2.js";import"./Info.26b59531.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
