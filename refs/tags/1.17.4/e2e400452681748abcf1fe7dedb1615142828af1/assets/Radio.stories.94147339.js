import{s as d,a as e,F as i,j as n}from"./index.c3f899c4.js";import{R as o}from"./Radio.8ed4bbcb.js";import"./theme.e03456da.js";import"./palette.15e4d008.js";import"./Tooltip.66bf0b3c.js";import"./Button.module.dd5fb9fe.js";import"./useFocusRing.module.dbb75c3b.js";import"./context.module.00a2ee0b.js";import"./useButton.module.b758843c.js";import"./OverlayArrow.module.8ec02937.js";import"./Info.bf56a621.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
