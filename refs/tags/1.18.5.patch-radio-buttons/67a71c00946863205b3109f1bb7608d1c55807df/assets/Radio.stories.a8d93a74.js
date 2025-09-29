import{s as d,a as e,F as i,j as n}from"./index.456f62bb.js";import{R as o}from"./Radio.dd89b997.js";import"./theme.e48aaf48.js";import"./palette.15e4d008.js";import"./Tooltip.b7768ac4.js";import"./Button.module.66a51b0a.js";import"./useFocusRing.module.12417d36.js";import"./context.module.659e80ed.js";import"./useButton.module.a8e0b06f.js";import"./OverlayArrow.module.ac4bc2cb.js";import"./Info.fb9a091a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
