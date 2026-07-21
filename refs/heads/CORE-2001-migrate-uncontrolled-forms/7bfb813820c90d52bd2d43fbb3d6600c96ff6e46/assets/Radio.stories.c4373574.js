import{s as n,a as e,F as d,j as o}from"./index.41cd4c51.js";import{R as i}from"./Radio.efe2e410.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.6cdaed6c.js";import"./Button.module.f88dbaa1.js";import"./useFocusRing.module.de24a7eb.js";import"./context.module.f37d58f5.js";import"./useButton.module.f107204e.js";import"./OverlayArrow.module.31f9a440.js";import"./Info.28c7bbd8.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
