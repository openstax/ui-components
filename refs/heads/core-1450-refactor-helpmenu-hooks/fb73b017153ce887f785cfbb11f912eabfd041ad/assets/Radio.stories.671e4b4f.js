import{s as d,a as e,F as i,j as n}from"./index.07c1b2d6.js";import{R as o}from"./Radio.8561ff9e.js";import"./theme.8995dcdf.js";import"./palette.15e4d008.js";import"./Tooltip.87cb2438.js";import"./Button.module.e419248b.js";import"./useFocusRing.module.9b8da44b.js";import"./context.module.ccb9c1c7.js";import"./useButton.module.325ded3d.js";import"./OverlayArrow.module.854f284e.js";import"./Info.003b2211.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
