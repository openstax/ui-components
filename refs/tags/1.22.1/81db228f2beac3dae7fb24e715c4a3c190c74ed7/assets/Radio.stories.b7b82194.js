import{s as n,a as e,F as d,j as o}from"./index.66ada5b7.js";import{R as i}from"./Radio.e6a036bc.js";import"./theme.3f59fdbf.js";import"./palette.5e342580.js";import"./Tooltip.3b3f8094.js";import"./Button.module.f55ee80f.js";import"./useFocusRing.module.ee0fb11a.js";import"./context.module.e0e5ad0c.js";import"./useButton.module.34620dbb.js";import"./OverlayArrow.module.e605da1d.js";import"./Info.3a927a81.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
