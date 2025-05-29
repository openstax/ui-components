import{s as d,a as e,F as i,j as n}from"./index.f7b2f93a.js";import{R as o}from"./Radio.3f32cedf.js";import"./theme.bf2601d7.js";import"./palette.15e4d008.js";import"./Tooltip.fc876aa2.js";import"./Button.module.e2f71407.js";import"./useFocusRing.module.f85b1a5e.js";import"./useButton.module.cd86af0d.js";import"./OverlayArrow.module.6e30c7bb.js";import"./Info.3e8a7649.js";import"./focusSafely.module.6b616c69.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
