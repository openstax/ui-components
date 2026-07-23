import{s as n,a as e,F as d,j as o}from"./index.8a319c7f.js";import{R as i}from"./Radio.233eb08a.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.371d1ccc.js";import"./Button.module.53bd1551.js";import"./useFocusRing.module.836a58b1.js";import"./context.module.159f5df0.js";import"./useButton.module.173d942c.js";import"./OverlayArrow.module.5637cc83.js";import"./Info.7f0cc6ed.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
