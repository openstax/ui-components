import{s as n,a as e,F as d,j as o}from"./index.c8bb93d4.js";import{R as i}from"./Radio.fcaf5eba.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.e7a2937c.js";import"./Button.module.dbae6a4d.js";import"./useFocusRing.module.df7f34f6.js";import"./context.module.8568ac81.js";import"./useButton.module.c5c46847.js";import"./OverlayArrow.module.6c96e9e1.js";import"./Info.16a0803e.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
