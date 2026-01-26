import{s as d,a as e,F as i,j as n}from"./index.b757a763.js";import{R as o}from"./Radio.25ae0f8e.js";import"./theme.41870ae7.js";import"./palette.15e4d008.js";import"./Tooltip.b71ee078.js";import"./Button.module.e1acaf65.js";import"./useFocusRing.module.e52cf5d7.js";import"./context.module.14418222.js";import"./useButton.module.2c09f88e.js";import"./OverlayArrow.module.0dcbb3b2.js";import"./Info.f2850b42.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
