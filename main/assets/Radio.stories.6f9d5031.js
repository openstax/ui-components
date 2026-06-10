import{s as n,a as e,F as d,j as o}from"./index.c9baf2eb.js";import{R as i}from"./Radio.9285bd98.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.b3933d49.js";import"./Button.module.535d117c.js";import"./useFocusRing.module.9c85a4e7.js";import"./context.module.2f9236f5.js";import"./useButton.module.0f124d1f.js";import"./OverlayArrow.module.239353c4.js";import"./Info.a28eceb6.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
