import{s as d,a as e,F as i,j as n}from"./index.14a97abd.js";import{R as o}from"./Radio.b2fae14f.js";import"./theme.bc278bd7.js";import"./palette.15e4d008.js";import"./Tooltip.dd387933.js";import"./Button.module.31e3f809.js";import"./useFocusRing.module.0130d255.js";import"./context.module.fcf81413.js";import"./useButton.module.76d86e94.js";import"./OverlayArrow.module.1a7cf3fe.js";import"./Info.9485b00f.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
