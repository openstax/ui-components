import{s as n,a as e,F as d,j as o}from"./index.db951cdd.js";import{R as i}from"./Radio.a0b2bc25.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.9cc8d84d.js";import"./Button.module.f121284a.js";import"./useFocusRing.module.79eff4a5.js";import"./context.module.c7ba1410.js";import"./useButton.module.91cc2b1b.js";import"./OverlayArrow.module.0cd5d02e.js";import"./Info.9938dffb.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
