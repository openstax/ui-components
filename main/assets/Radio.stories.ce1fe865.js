import{s as n,a as e,F as d,j as o}from"./index.c3a91293.js";import{R as i}from"./Radio.2815a6c3.js";import"./theme.aa99a804.js";import"./palette.5e342580.js";import"./Tooltip.71649116.js";import"./Button.module.3136aebb.js";import"./useFocusRing.module.18dd7f0d.js";import"./context.module.11a16827.js";import"./useButton.module.6133a619.js";import"./OverlayArrow.module.700db967.js";import"./Info.f22c5da9.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
