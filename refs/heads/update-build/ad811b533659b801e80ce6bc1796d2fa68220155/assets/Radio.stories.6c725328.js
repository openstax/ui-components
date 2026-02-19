import{s as n,a as e,F as d,j as o}from"./index.a6587f7c.js";import{R as i}from"./Radio.9071dd42.js";import"./theme.ca319df7.js";import"./palette.5e342580.js";import"./Tooltip.cd318db1.js";import"./Button.module.56993cd9.js";import"./useFocusRing.module.c5cee7f3.js";import"./context.module.c2f69083.js";import"./useButton.module.09e2bf19.js";import"./OverlayArrow.module.2785f5ad.js";import"./Info.8a30de51.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
