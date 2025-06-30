import{s as d,a as e,F as i,j as n}from"./index.bdcef5ee.js";import{R as o}from"./Radio.90721bf1.js";import"./theme.90922121.js";import"./palette.15e4d008.js";import"./Tooltip.fde6fe84.js";import"./Button.module.c8124910.js";import"./useFocusRing.module.80c66c7d.js";import"./context.module.d4ec1028.js";import"./useButton.module.4d32e2c3.js";import"./OverlayArrow.module.6c710143.js";import"./Info.916d67e0.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
