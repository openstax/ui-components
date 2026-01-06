import{s as d,a as e,F as i,j as n}from"./index.7f66607f.js";import{R as o}from"./Radio.1908b6ce.js";import"./theme.2861fddf.js";import"./palette.15e4d008.js";import"./Tooltip.e276b8d2.js";import"./Button.module.3153aec9.js";import"./useFocusRing.module.451ef938.js";import"./context.module.05c081c9.js";import"./useButton.module.c8cba45a.js";import"./OverlayArrow.module.f4d0ffb8.js";import"./Info.edd19e07.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
