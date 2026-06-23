import{s as n,a as e,F as d,j as o}from"./index.dbe3a13e.js";import{R as i}from"./Radio.c2f1ef6e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.c189cc79.js";import"./Button.module.f51dd030.js";import"./useFocusRing.module.e6d9a4a6.js";import"./context.module.95785d1e.js";import"./useButton.module.0aa12332.js";import"./OverlayArrow.module.7a14183b.js";import"./Info.ef25d628.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
