import{s as d,a as e,F as i,j as n}from"./index.89484feb.js";import{R as o}from"./Radio.5c6590d6.js";import"./theme.c43baf4e.js";import"./palette.15e4d008.js";import"./Tooltip.96094759.js";import"./OverlayArrow.module.929e3056.js";import"./context.module.3f371966.js";import"./Hidden.module.4e5d620e.js";import"./useButton.module.7ea9351c.js";import"./Info.a47dd396.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
