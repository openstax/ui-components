import{s as d,a as e,F as i,j as n}from"./index.c86db077.js";import{R as o}from"./Radio.8acacc2c.js";import"./theme.832214a2.js";import"./palette.15e4d008.js";import"./Tooltip.bb9001ff.js";import"./Button.module.9005f992.js";import"./useFocusRing.module.37458a88.js";import"./useButton.module.a7482aac.js";import"./OverlayArrow.module.4d87d70b.js";import"./Info.b53d1b2a.js";import"./focusSafely.module.744e72b0.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
