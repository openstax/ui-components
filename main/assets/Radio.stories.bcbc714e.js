import{s as n,a as e,F as d,j as o}from"./index.da0843ca.js";import{R as i}from"./Radio.41128357.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.6878ade6.js";import"./Button.module.e77a2f02.js";import"./useFocusRing.module.41091c45.js";import"./context.module.3ba257d6.js";import"./useButton.module.173eeb57.js";import"./OverlayArrow.module.f98e30ff.js";import"./Info.5b6b7b7e.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
