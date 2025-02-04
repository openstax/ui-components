import{s as d,a as e,F as i,j as n}from"./index.7cbf562f.js";import{R as o}from"./Radio.b9e711d9.js";import"./theme.7f12f462.js";import"./palette.15e4d008.js";import"./Tooltip.43737efc.js";import"./OverlayArrow.module.f0682acb.js";import"./context.module.c6a41c01.js";import"./Hidden.module.2d46bd06.js";import"./useButton.module.5f9c601c.js";import"./Info.abd16019.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
