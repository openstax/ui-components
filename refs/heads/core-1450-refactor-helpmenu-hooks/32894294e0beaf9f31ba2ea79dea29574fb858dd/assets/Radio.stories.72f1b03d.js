import{s as d,a as e,F as i,j as n}from"./index.543c969e.js";import{R as o}from"./Radio.eb839e41.js";import"./theme.d9792c9b.js";import"./palette.15e4d008.js";import"./Tooltip.50298c0e.js";import"./Button.module.528c2a46.js";import"./useFocusRing.module.54ccaa8e.js";import"./context.module.f8a89be1.js";import"./useButton.module.a0a69c08.js";import"./OverlayArrow.module.50b960f1.js";import"./Info.7752ff53.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
