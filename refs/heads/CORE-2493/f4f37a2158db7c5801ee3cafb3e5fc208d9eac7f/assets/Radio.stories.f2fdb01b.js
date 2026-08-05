import{s as n,a as e,F as d,j as o}from"./index.e05b5fad.js";import{R as i}from"./Radio.1e0ea420.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.c7d95ab1.js";import"./Button.module.29cac287.js";import"./useFocusRing.module.fe219c18.js";import"./context.module.6f6eb83b.js";import"./useButton.module.77e6817d.js";import"./OverlayArrow.module.9b8d56a4.js";import"./Info.ca68d8ab.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
