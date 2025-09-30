import{s as d,a as e,F as i,j as n}from"./index.567d8526.js";import{R as o}from"./Radio.560a60f4.js";import"./theme.9086e610.js";import"./palette.15e4d008.js";import"./Tooltip.5d661eb9.js";import"./Button.module.8559bdaa.js";import"./useFocusRing.module.fb557b6a.js";import"./context.module.f5252cb3.js";import"./useButton.module.97a8bb28.js";import"./OverlayArrow.module.d3df2d99.js";import"./Info.9a52d158.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
