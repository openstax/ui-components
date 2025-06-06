import{s as d,a as e,F as i,j as n}from"./index.e2f6827d.js";import{R as o}from"./Radio.c1e31236.js";import"./theme.f8c44abb.js";import"./palette.15e4d008.js";import"./Tooltip.825f8cb9.js";import"./Button.module.ccc2034a.js";import"./useFocusRing.module.d607e266.js";import"./useButton.module.af4a9b35.js";import"./OverlayArrow.module.21a4e296.js";import"./Info.c7c62dfb.js";import"./focusSafely.module.6cfdee02.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
