import{s as n,a as e,F as d,j as o}from"./index.3bef755b.js";import{R as i}from"./Radio.fabd9131.js";import"./theme.ff2e73a0.js";import"./palette.5e342580.js";import"./Tooltip.6105802f.js";import"./Button.module.4bba30da.js";import"./useFocusRing.module.d6a99936.js";import"./context.module.49a97fc8.js";import"./useButton.module.37113c8d.js";import"./OverlayArrow.module.ef2e3e69.js";import"./Info.f8cfe3e2.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
