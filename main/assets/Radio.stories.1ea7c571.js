import{s as n,a as e,F as d,j as o}from"./index.00a2a56c.js";import{R as i}from"./Radio.e95bd803.js";import"./theme.650dd248.js";import"./palette.5e342580.js";import"./Tooltip.0261582b.js";import"./Button.module.8a18e10e.js";import"./useFocusRing.module.cd350b9c.js";import"./context.module.dbb11ea5.js";import"./useButton.module.c1d9099a.js";import"./OverlayArrow.module.ba8984c2.js";import"./Info.6a8811b7.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
