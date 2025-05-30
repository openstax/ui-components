import{s as d,a as e,F as i,j as n}from"./index.d09ddd49.js";import{R as o}from"./Radio.6875464a.js";import"./theme.638fec6c.js";import"./palette.15e4d008.js";import"./Tooltip.cdf063e1.js";import"./Button.module.7c993853.js";import"./useFocusRing.module.0f812f74.js";import"./useButton.module.a1e8cbce.js";import"./OverlayArrow.module.aeffdafa.js";import"./Info.c859fadb.js";import"./focusSafely.module.97e05a60.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
