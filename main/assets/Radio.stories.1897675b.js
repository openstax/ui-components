import{s as d,a as e,F as i,j as n}from"./index.a6cdba77.js";import{R as o}from"./Radio.cb0f0219.js";import"./theme.fe4ca0d7.js";import"./palette.15e4d008.js";import"./Tooltip.2489c9fd.js";import"./OverlayArrow.module.30a48656.js";import"./context.module.f1d2375d.js";import"./Hidden.module.fee0a2e4.js";import"./useButton.module.964fc550.js";import"./Info.f071dffd.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
