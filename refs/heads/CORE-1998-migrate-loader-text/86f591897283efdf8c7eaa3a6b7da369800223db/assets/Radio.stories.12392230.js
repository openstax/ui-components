import{s as n,a as e,F as d,j as o}from"./index.6dbbbd6e.js";import{R as i}from"./Radio.0ae2e228.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.30bab36f.js";import"./Button.module.2fde215c.js";import"./useFocusRing.module.648b06a9.js";import"./context.module.87926d08.js";import"./useButton.module.74099248.js";import"./OverlayArrow.module.c4b6c3bf.js";import"./Info.0aaf6440.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
