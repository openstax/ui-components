import{s as d,a as e,F as i,j as n}from"./index.58c9c329.js";import{R as o}from"./Radio.b8f210ee.js";import"./theme.3cc92f89.js";import"./palette.15e4d008.js";import"./Tooltip.f6ffd404.js";import"./Button.module.552fb8ad.js";import"./useFocusRing.module.91db6f55.js";import"./context.module.08c53a8b.js";import"./useButton.module.78a22f29.js";import"./OverlayArrow.module.d1b7e799.js";import"./Info.0913eb07.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
