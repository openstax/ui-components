import{s as n,a as e,F as d,j as o}from"./index.2b887cc0.js";import{R as i}from"./Radio.7ed97280.js";import"./theme.fc3bece1.js";import"./palette.5e342580.js";import"./Tooltip.33d14a35.js";import"./Button.module.1b80e886.js";import"./useFocusRing.module.2ca3e192.js";import"./context.module.b25fc1c3.js";import"./useButton.module.4677ee94.js";import"./OverlayArrow.module.16d68e53.js";import"./Info.4f615e26.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
