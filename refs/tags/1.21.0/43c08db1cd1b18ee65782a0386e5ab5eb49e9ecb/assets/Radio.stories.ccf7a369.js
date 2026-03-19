import{s as n,a as e,F as d,j as o}from"./index.5d25bf12.js";import{R as i}from"./Radio.257d3470.js";import"./theme.7d07f9a5.js";import"./palette.5e342580.js";import"./Tooltip.a2044de6.js";import"./Button.module.2873a5d7.js";import"./useFocusRing.module.478b4960.js";import"./context.module.4fa2fb87.js";import"./useButton.module.6fca81ff.js";import"./OverlayArrow.module.c5ca3d0b.js";import"./Info.22b909ce.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
