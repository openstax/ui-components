import{s as n,a as e,F as d,j as o}from"./index.87fbd453.js";import{R as i}from"./Radio.24d9e451.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.219c6e29.js";import"./Button.module.db63910d.js";import"./useFocusRing.module.b3ec5059.js";import"./context.module.6488c022.js";import"./useButton.module.0a391e59.js";import"./OverlayArrow.module.5875e8b9.js";import"./Info.e99cb228.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
