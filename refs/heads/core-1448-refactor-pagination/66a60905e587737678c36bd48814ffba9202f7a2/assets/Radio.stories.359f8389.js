import{s as d,a as e,F as i,j as n}from"./index.db6776a4.js";import{R as o}from"./Radio.229373fb.js";import"./theme.6b72730c.js";import"./palette.15e4d008.js";import"./Tooltip.28b76dd6.js";import"./Button.module.94d0221a.js";import"./useFocusRing.module.55090908.js";import"./context.module.a7d9fee5.js";import"./useButton.module.da557485.js";import"./OverlayArrow.module.70a71803.js";import"./Info.f2935dc2.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
