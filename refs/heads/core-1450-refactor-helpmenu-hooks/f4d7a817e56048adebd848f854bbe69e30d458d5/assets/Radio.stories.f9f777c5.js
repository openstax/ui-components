import{s as d,a as e,F as i,j as n}from"./index.95b52459.js";import{R as o}from"./Radio.7432d030.js";import"./theme.5d25d926.js";import"./palette.15e4d008.js";import"./Tooltip.9d47ac4c.js";import"./Button.module.eb7e88a2.js";import"./useFocusRing.module.fb8f4b1f.js";import"./context.module.51a90ac4.js";import"./useButton.module.27dc1257.js";import"./OverlayArrow.module.b5e5a9ea.js";import"./Info.e9cb7b8d.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
