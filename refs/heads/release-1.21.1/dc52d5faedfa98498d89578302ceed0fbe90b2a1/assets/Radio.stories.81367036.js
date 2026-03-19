import{s as n,a as e,F as d,j as o}from"./index.de69091e.js";import{R as i}from"./Radio.e7a06b5e.js";import"./theme.5b2c2782.js";import"./palette.5e342580.js";import"./Tooltip.2b72df74.js";import"./Button.module.549569e5.js";import"./useFocusRing.module.6e8ec749.js";import"./context.module.d5d915c4.js";import"./useButton.module.950efd50.js";import"./OverlayArrow.module.77053d8a.js";import"./Info.de4bc91e.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
