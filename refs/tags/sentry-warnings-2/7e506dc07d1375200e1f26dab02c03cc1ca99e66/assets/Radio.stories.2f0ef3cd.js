import{s as d,a as e,F as i,j as n}from"./index.879bf273.js";import{R as o}from"./Radio.e89029a6.js";import"./theme.db85a27f.js";import"./palette.15e4d008.js";import"./Tooltip.57fa4a92.js";import"./Button.module.d99b3d65.js";import"./useFocusRing.module.5e96a940.js";import"./useButton.module.00da0c26.js";import"./OverlayArrow.module.5ae52fee.js";import"./Info.28043656.js";import"./focusSafely.module.f315a44b.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
