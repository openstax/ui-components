import{s as n,a as e,F as d,j as o}from"./index.d5d65d0d.js";import{R as i}from"./Radio.653735e3.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.e1064106.js";import"./Button.module.917c1c09.js";import"./useFocusRing.module.0118295c.js";import"./context.module.bf5ea841.js";import"./useButton.module.360c37d9.js";import"./OverlayArrow.module.5663b505.js";import"./Info.8e92e37e.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
