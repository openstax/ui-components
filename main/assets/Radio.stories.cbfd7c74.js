import{s as n,a as e,F as d,j as o}from"./index.3c483d52.js";import{R as i}from"./Radio.5d6c4c4e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.cb75a3b5.js";import"./Button.module.f7f3e362.js";import"./useFocusRing.module.6ffdefe6.js";import"./context.module.b668c7b5.js";import"./useButton.module.5f5b8403.js";import"./OverlayArrow.module.6c9a9247.js";import"./Info.1e9ece62.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
