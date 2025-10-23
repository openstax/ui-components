import{s as d,a as e,F as i,j as n}from"./index.bd5cf011.js";import{R as o}from"./Radio.9ef3101f.js";import"./theme.d3a0bfc0.js";import"./palette.15e4d008.js";import"./Tooltip.a8c5ac28.js";import"./Button.module.c16bdbe8.js";import"./useFocusRing.module.55efec08.js";import"./context.module.e1785199.js";import"./useButton.module.a985a503.js";import"./OverlayArrow.module.e6febd0a.js";import"./Info.870d942c.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
