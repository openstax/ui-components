import{s as d,a as e,F as i,j as n}from"./index.16cb692d.js";import{R as o}from"./Radio.f8f596a5.js";import"./theme.0b073f40.js";import"./palette.15e4d008.js";import"./Tooltip.132a2257.js";import"./Button.module.a7cedcd1.js";import"./useFocusRing.module.feffa39c.js";import"./context.module.3a7e72a4.js";import"./useButton.module.676e1a9a.js";import"./OverlayArrow.module.042a0400.js";import"./Info.ced8c6f6.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
