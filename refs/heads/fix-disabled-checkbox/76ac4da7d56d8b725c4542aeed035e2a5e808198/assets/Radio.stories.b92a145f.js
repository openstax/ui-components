import{s as d,a as e,F as i,j as n}from"./index.78285902.js";import{R as o}from"./Radio.41ead869.js";import"./theme.d8535946.js";import"./palette.5e342580.js";import"./Tooltip.3cd6115b.js";import"./Button.module.17dbe4b1.js";import"./useFocusRing.module.17274fc5.js";import"./context.module.81474cbb.js";import"./useButton.module.71eade0f.js";import"./OverlayArrow.module.6e2792af.js";import"./Info.b109239f.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
