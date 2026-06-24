import{s as n,a as e,F as d,j as o}from"./index.af192ac9.js";import{R as i}from"./Radio.a1464c57.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.a41c94a5.js";import"./Button.module.f299e16b.js";import"./useFocusRing.module.9ca0bfa4.js";import"./context.module.1fad9a0d.js";import"./useButton.module.0dba6a7e.js";import"./OverlayArrow.module.770c8e2c.js";import"./Info.24886614.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
