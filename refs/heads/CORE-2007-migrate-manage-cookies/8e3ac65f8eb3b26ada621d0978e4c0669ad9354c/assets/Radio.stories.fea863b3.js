import{s as n,a as e,F as d,j as o}from"./index.8d8a51de.js";import{R as i}from"./Radio.fce3924c.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.6a179b33.js";import"./Button.module.d8781de3.js";import"./useFocusRing.module.ea27d643.js";import"./context.module.3ddbb5c3.js";import"./useButton.module.34cfc63d.js";import"./OverlayArrow.module.20fe712e.js";import"./Info.8a73c68f.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
