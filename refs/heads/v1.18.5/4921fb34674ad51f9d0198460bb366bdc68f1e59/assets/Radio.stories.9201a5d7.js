import{s as d,a as e,F as i,j as n}from"./index.837c2439.js";import{R as o}from"./Radio.6f37f3ad.js";import"./theme.108e3497.js";import"./palette.15e4d008.js";import"./Tooltip.11d91ed6.js";import"./Button.module.fa3751f3.js";import"./useFocusRing.module.fe4029c6.js";import"./context.module.45618bf3.js";import"./useButton.module.e3251c36.js";import"./OverlayArrow.module.d5859410.js";import"./Info.78bfef84.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
