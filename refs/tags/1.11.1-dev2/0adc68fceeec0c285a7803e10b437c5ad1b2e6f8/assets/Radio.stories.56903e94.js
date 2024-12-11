import{s as d,a as e,F as i,j as n}from"./index.358353a8.js";import{R as o}from"./Radio.e0e7672e.js";import"./theme.2852186b.js";import"./palette.15e4d008.js";import"./Tooltip.3c250156.js";import"./Button.module.17160106.js";import"./context.module.6451b251.js";import"./focusSafely.module.141e2023.js";import"./useFocusRing.module.0f7ed721.js";import"./OverlayArrow.module.83edc143.js";import"./Info.8a6978e0.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
