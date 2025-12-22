import{s as d,a as e,F as i,j as n}from"./index.85ae25d8.js";import{R as o}from"./Radio.23716eff.js";import"./theme.1c2c1863.js";import"./palette.15e4d008.js";import"./Tooltip.829d0fac.js";import"./Button.module.bc67202a.js";import"./useFocusRing.module.249111bf.js";import"./context.module.7a701e50.js";import"./useButton.module.45768283.js";import"./OverlayArrow.module.4e7efcf6.js";import"./Info.896f1be0.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
