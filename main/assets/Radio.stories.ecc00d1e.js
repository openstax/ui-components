import{s as n,a as e,F as d,j as o}from"./index.6f835c86.js";import{R as i}from"./Radio.421c72da.js";import"./theme.70751264.js";import"./palette.5e342580.js";import"./Tooltip.2e1f124b.js";import"./Button.module.d5960e02.js";import"./useFocusRing.module.96ff117b.js";import"./context.module.c1f58a16.js";import"./useButton.module.0a488349.js";import"./OverlayArrow.module.a51e2a16.js";import"./Info.eb175548.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
