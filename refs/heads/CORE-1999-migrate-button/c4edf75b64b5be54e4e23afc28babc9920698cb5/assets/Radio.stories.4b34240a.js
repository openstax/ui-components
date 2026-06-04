import{s as n,a as e,F as d,j as o}from"./index.899a49f1.js";import{R as i}from"./Radio.6cd29452.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.2b0a600d.js";import"./Button.module.418a5c44.js";import"./useFocusRing.module.92642296.js";import"./context.module.7b936344.js";import"./useButton.module.447bc92f.js";import"./OverlayArrow.module.a2f38f96.js";import"./Info.55cdc852.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
