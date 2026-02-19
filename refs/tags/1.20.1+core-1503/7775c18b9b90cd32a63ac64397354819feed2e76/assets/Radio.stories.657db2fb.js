import{s as n,a as e,F as d,j as o}from"./index.a63550aa.js";import{R as i}from"./Radio.7dea2a64.js";import"./theme.1e4478e4.js";import"./palette.5e342580.js";import"./Tooltip.296e0e2f.js";import"./Button.module.a671eea7.js";import"./useFocusRing.module.881429e7.js";import"./context.module.0bb6a1e8.js";import"./useButton.module.0be7faa5.js";import"./OverlayArrow.module.8bf8529e.js";import"./Info.1485385d.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
