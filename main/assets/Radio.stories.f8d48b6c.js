import{s as d,a as e,F as i,j as n}from"./index.5f747d11.js";import{R as o}from"./Radio.580122d6.js";import"./theme.baec5b26.js";import"./palette.15e4d008.js";import"./Tooltip.9618454c.js";import"./Button.module.7f2eaf85.js";import"./context.module.af7e31dc.js";import"./useFocusRing.module.02b88cfe.js";import"./OverlayArrow.module.b50d8587.js";import"./Info.0f147f25.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
