import{s as n,a as e,F as d,j as o}from"./index.fcc0061f.js";import{R as i}from"./Radio.7e2cab41.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.e46329ad.js";import"./Button.module.2781d04a.js";import"./useFocusRing.module.46b3e9e0.js";import"./context.module.d36371ca.js";import"./useButton.module.23eda777.js";import"./OverlayArrow.module.bdfb6544.js";import"./Info.b39fbdb8.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
