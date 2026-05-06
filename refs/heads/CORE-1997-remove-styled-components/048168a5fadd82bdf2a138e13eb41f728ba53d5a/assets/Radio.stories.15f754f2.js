import{s as n,a as e,F as d,j as o}from"./index.8f0a2c28.js";import{R as i}from"./Radio.b5fe2fe9.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.f8a18a4d.js";import"./Button.module.2587a89a.js";import"./useFocusRing.module.1e2cd607.js";import"./context.module.c9748400.js";import"./useButton.module.b7af77f8.js";import"./OverlayArrow.module.cd4b3341.js";import"./Info.439bcaea.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
