import{s as n,a as e,F as d,j as o}from"./index.810f4178.js";import{R as i}from"./Radio.632ec656.js";import"./theme.a2601d66.js";import"./palette.5e342580.js";import"./Tooltip.2c308bea.js";import"./Button.module.cd5e3342.js";import"./useFocusRing.module.001182d4.js";import"./context.module.2d15cc5f.js";import"./useButton.module.1786df5e.js";import"./OverlayArrow.module.9e795c68.js";import"./Info.07c4f891.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
