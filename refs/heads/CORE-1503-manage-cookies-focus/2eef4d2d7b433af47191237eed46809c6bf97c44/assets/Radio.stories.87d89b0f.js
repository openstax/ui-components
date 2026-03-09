import{s as n,a as e,F as d,j as o}from"./index.d5cd7303.js";import{R as i}from"./Radio.9851e721.js";import"./theme.34f3e547.js";import"./palette.5e342580.js";import"./Tooltip.8076f986.js";import"./Button.module.62cfc4b7.js";import"./useFocusRing.module.02e79198.js";import"./context.module.4e7ee9c2.js";import"./useButton.module.ad259dd5.js";import"./OverlayArrow.module.49aa965f.js";import"./Info.0b1cb9d3.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
