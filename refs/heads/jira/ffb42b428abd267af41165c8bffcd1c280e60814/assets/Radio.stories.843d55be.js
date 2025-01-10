import{s as d,a as e,F as i,j as n}from"./index.954e3bd6.js";import{R as o}from"./Radio.125a78df.js";import"./theme.02a10726.js";import"./palette.15e4d008.js";import"./Tooltip.35d9475f.js";import"./Button.module.7f8455ba.js";import"./context.module.bdacad02.js";import"./useFocusRing.module.393c9424.js";import"./OverlayArrow.module.de701aa5.js";import"./Info.67e29a55.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
