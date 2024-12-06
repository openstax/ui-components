import{s as d,a as e,F as i,j as n}from"./index.cc835bd8.js";import{R as o}from"./Radio.83d1b92a.js";import"./theme.cc0a80d6.js";import"./palette.15e4d008.js";import"./Tooltip.bb1fa4db.js";import"./Button.module.cd98a565.js";import"./context.module.b913cfa5.js";import"./focusSafely.module.5220aa3a.js";import"./useFocusRing.module.8658ba65.js";import"./OverlayArrow.module.f8d91753.js";import"./Info.c53390c6.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
