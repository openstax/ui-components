import{s as n,a as e,F as d,j as o}from"./index.029c5d11.js";import{R as i}from"./Radio.8873a2ae.js";import"./theme.9ff19f1b.js";import"./palette.5e342580.js";import"./Tooltip.c726db92.js";import"./Button.module.a600c13d.js";import"./useFocusRing.module.39375883.js";import"./context.module.71a07274.js";import"./useButton.module.9bdb49d5.js";import"./OverlayArrow.module.2d802a71.js";import"./Info.bc4cde20.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
