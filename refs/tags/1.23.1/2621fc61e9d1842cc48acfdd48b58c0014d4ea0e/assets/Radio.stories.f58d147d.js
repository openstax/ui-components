import{s as n,a as e,F as d,j as o}from"./index.6dab7242.js";import{R as i}from"./Radio.6a076a7b.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.1896e60d.js";import"./Button.module.0cb337ed.js";import"./useFocusRing.module.3728917d.js";import"./context.module.8d33846f.js";import"./useButton.module.e85a5fca.js";import"./OverlayArrow.module.8270a1fb.js";import"./Info.d5c3af62.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
