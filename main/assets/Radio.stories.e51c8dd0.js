import{s as n,a as e,F as d,j as o}from"./index.5f040724.js";import{R as i}from"./Radio.c167527d.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.925a6c90.js";import"./Button.module.ae55b264.js";import"./useFocusRing.module.1cb7b8ed.js";import"./context.module.4aaf10c5.js";import"./useButton.module.8a9327a2.js";import"./OverlayArrow.module.8c6c0136.js";import"./Info.7cf47b49.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
