import{s as n,a as e,F as d,j as o}from"./index.01199e2f.js";import{R as i}from"./Radio.b940fd93.js";import"./theme.c39df871.js";import"./palette.5e342580.js";import"./Tooltip.50f368ea.js";import"./Button.module.e68ad4d8.js";import"./useFocusRing.module.24f6b4cd.js";import"./context.module.341aec33.js";import"./useButton.module.c9635ead.js";import"./OverlayArrow.module.51235ac1.js";import"./Info.3505b76b.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
