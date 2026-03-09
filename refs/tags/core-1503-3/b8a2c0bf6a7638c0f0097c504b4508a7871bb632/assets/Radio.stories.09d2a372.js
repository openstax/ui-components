import{s as n,a as e,F as d,j as o}from"./index.27cf8e2c.js";import{R as i}from"./Radio.010b1993.js";import"./theme.697fe45e.js";import"./palette.5e342580.js";import"./Tooltip.5ae92a28.js";import"./Button.module.a790372c.js";import"./useFocusRing.module.6d34efbe.js";import"./context.module.05e858cb.js";import"./useButton.module.7143ecda.js";import"./OverlayArrow.module.702fa2e9.js";import"./Info.5e05b918.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
