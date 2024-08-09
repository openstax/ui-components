import{s as d,a as e,F as i,j as n}from"./index.794f4153.js";import{R as o}from"./Radio.72328b31.js";import"./theme.c8d1c9df.js";import"./palette.15e4d008.js";import"./Tooltip.e273a4dc.js";import"./Button.module.c772a655.js";import"./context.module.a0714fae.js";import"./useFocusRing.module.2d92e383.js";import"./OverlayArrow.module.42165790.js";import"./Info.79bee82e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
