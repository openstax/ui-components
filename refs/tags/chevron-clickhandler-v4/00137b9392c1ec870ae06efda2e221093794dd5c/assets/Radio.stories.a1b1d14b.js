import{s as d,a as e,F as i,j as n}from"./index.dc7cd7b1.js";import{R as o}from"./Radio.a3715474.js";import"./theme.16560e64.js";import"./palette.15e4d008.js";import"./Tooltip.b2b86dcc.js";import"./Button.module.113e8004.js";import"./useFocusRing.module.dabaa8d3.js";import"./useButton.module.03f4f641.js";import"./OverlayArrow.module.93d95df8.js";import"./Info.ecee0627.js";import"./focusSafely.module.873c04ed.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
