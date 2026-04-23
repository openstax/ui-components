import{s as n,a as e,F as d,j as o}from"./index.10dc917b.js";import{R as i}from"./Radio.290c392a.js";import"./theme.303e82e8.js";import"./palette.5e342580.js";import"./Tooltip.225441be.js";import"./Button.module.3c6b0fe2.js";import"./useFocusRing.module.bb5137fc.js";import"./context.module.7d3dd46f.js";import"./useButton.module.c05fd999.js";import"./OverlayArrow.module.978a211c.js";import"./Info.90e8ad86.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
