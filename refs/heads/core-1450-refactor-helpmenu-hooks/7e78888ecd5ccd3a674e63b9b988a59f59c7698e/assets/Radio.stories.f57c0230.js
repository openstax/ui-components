import{s as d,a as e,F as i,j as n}from"./index.edfd0bba.js";import{R as o}from"./Radio.eff4991f.js";import"./theme.ee3d3dc8.js";import"./palette.15e4d008.js";import"./Tooltip.8bee1d36.js";import"./Button.module.7018c3d7.js";import"./useFocusRing.module.aac19547.js";import"./context.module.262c00d0.js";import"./useButton.module.712bcdb0.js";import"./OverlayArrow.module.2250da3e.js";import"./Info.6dba9dbe.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
