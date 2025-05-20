import{s as d,a as e,F as i,j as n}from"./index.a21a0fc5.js";import{R as o}from"./Radio.177ef34f.js";import"./theme.4ed5d70c.js";import"./palette.15e4d008.js";import"./Tooltip.ffe63cde.js";import"./Button.module.e94f23ea.js";import"./useFocusRing.module.3646f433.js";import"./useButton.module.2c40e25f.js";import"./OverlayArrow.module.13b6d3a7.js";import"./Info.5456687d.js";import"./focusSafely.module.46a6581a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
