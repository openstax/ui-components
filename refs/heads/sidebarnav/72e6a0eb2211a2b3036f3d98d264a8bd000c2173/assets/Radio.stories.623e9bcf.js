import{s as d,a as e,F as i,j as n}from"./index.22b301c1.js";import{R as o}from"./Radio.b609f0a3.js";import"./theme.76244a22.js";import"./palette.15e4d008.js";import"./Tooltip.737558e1.js";import"./Button.module.2af3e7b2.js";import"./context.module.a9204994.js";import"./useFocusRing.module.485a0c39.js";import"./OverlayArrow.module.cec7107f.js";import"./Info.7f481365.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
