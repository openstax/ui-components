import{s as d,a as e,F as i,j as n}from"./index.a39ae2d7.js";import{R as o}from"./Radio.873bca08.js";import"./theme.7db12104.js";import"./palette.15e4d008.js";import"./Tooltip.7d265c05.js";import"./Button.module.6d6269e6.js";import"./useFocusRing.module.7dd38b4e.js";import"./context.module.f0fb5150.js";import"./useButton.module.e5c4e9f8.js";import"./OverlayArrow.module.7cf694f9.js";import"./Info.009c6251.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
