import{s as d,a as e,F as i,j as n}from"./index.fbc8afd6.js";import{R as o}from"./Radio.1641799e.js";import"./theme.67570a8e.js";import"./palette.15e4d008.js";import"./Tooltip.8716804f.js";import"./Button.module.34942c37.js";import"./useFocusRing.module.71265149.js";import"./useButton.module.341e27f8.js";import"./OverlayArrow.module.df183c1f.js";import"./Info.7680206b.js";import"./focusSafely.module.edded5e2.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
