import{s as n,a as e,F as d,j as o}from"./index.b7b53794.js";import{R as i}from"./Radio.c95ac8b2.js";import"./theme.baaf5830.js";import"./palette.5e342580.js";import"./Tooltip.24a7e7e7.js";import"./Button.module.6ee831b3.js";import"./useFocusRing.module.ad4047d1.js";import"./context.module.6d9287b5.js";import"./useButton.module.dd447af0.js";import"./OverlayArrow.module.12f2b282.js";import"./Info.f8a61198.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
