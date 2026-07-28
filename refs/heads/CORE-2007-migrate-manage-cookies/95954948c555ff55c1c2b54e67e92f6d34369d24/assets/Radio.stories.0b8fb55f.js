import{s as n,a as e,F as d,j as o}from"./index.a9de77b9.js";import{R as i}from"./Radio.de3da9b4.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.1ae92cf9.js";import"./Button.module.ae41daf8.js";import"./useFocusRing.module.518c0077.js";import"./context.module.ac196076.js";import"./useButton.module.57f6f12f.js";import"./OverlayArrow.module.700394a8.js";import"./Info.2e4667dc.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
