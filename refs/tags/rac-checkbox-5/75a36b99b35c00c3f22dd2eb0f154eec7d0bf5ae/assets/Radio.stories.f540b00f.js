import{s as d,a as e,F as i,j as n}from"./index.3da1bfd0.js";import{R as o}from"./Radio.500cb529.js";import"./theme.577cf909.js";import"./palette.15e4d008.js";import"./Tooltip.c6621804.js";import"./Button.module.4e803da2.js";import"./useFocusRing.module.09ea4fbb.js";import"./useButton.module.62e6bd00.js";import"./OverlayArrow.module.d44cf321.js";import"./Info.7c1cc899.js";import"./focusSafely.module.2244925e.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
