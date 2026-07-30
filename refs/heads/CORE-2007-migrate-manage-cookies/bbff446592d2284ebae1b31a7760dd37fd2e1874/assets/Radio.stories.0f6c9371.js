import{s as n,a as e,F as d,j as o}from"./index.4f9fd98e.js";import{R as i}from"./Radio.8a47b1a4.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.ce6ee1fe.js";import"./Button.module.29f82554.js";import"./useFocusRing.module.f50b7001.js";import"./context.module.99ddbbd9.js";import"./useButton.module.2bdf1831.js";import"./OverlayArrow.module.b0538934.js";import"./Info.fed0d5aa.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
