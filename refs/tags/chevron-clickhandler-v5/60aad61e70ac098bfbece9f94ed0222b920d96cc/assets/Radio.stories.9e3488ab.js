import{s as d,a as e,F as i,j as n}from"./index.ac78977a.js";import{R as o}from"./Radio.c916be1a.js";import"./theme.11d125d8.js";import"./palette.15e4d008.js";import"./Tooltip.35d00cc3.js";import"./Button.module.55b21880.js";import"./useFocusRing.module.22d3fd82.js";import"./useButton.module.4032334f.js";import"./OverlayArrow.module.9fa36dd5.js";import"./Info.a92af062.js";import"./focusSafely.module.a5579911.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
