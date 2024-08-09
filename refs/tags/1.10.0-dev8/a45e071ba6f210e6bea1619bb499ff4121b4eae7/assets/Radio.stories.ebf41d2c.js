import{s as d,a as e,F as i,j as n}from"./index.272fbfbf.js";import{R as o}from"./Radio.f6076cde.js";import"./theme.d49bc48e.js";import"./palette.15e4d008.js";import"./Tooltip.cd0f3462.js";import"./Button.module.418d71c4.js";import"./context.module.29a9eea7.js";import"./useFocusRing.module.227b5928.js";import"./OverlayArrow.module.f4fa431b.js";import"./Info.b4e54ec6.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
