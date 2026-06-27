import{s as n,a as e,F as d,j as o}from"./index.9bff982f.js";import{R as i}from"./Radio.89a6ddc8.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.4cfdaec9.js";import"./Button.module.f5dec70a.js";import"./useFocusRing.module.16e435d1.js";import"./context.module.9c16c8ed.js";import"./useButton.module.2a032b26.js";import"./OverlayArrow.module.76fffffc.js";import"./Info.84ee36c6.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
