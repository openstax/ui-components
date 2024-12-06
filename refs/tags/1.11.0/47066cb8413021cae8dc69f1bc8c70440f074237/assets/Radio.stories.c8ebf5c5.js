import{s as d,a as e,F as i,j as n}from"./index.a37a2337.js";import{R as o}from"./Radio.c8f6e6b7.js";import"./theme.cd88a085.js";import"./palette.15e4d008.js";import"./Tooltip.e52da47a.js";import"./Button.module.c016415f.js";import"./context.module.ef1c7555.js";import"./focusSafely.module.0b5632f2.js";import"./useFocusRing.module.9e5cfe7a.js";import"./OverlayArrow.module.3b885908.js";import"./Info.647e567c.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
