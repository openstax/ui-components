import{s as d,a as e,F as i,j as n}from"./index.01b405be.js";import{R as o}from"./Radio.6679d200.js";import"./theme.3ba0a4aa.js";import"./palette.15e4d008.js";import"./Tooltip.234d9742.js";import"./Button.module.b4f45811.js";import"./useFocusRing.module.17f3bb89.js";import"./useButton.module.0feb6ccf.js";import"./OverlayArrow.module.debfc22c.js";import"./Info.cb4c745a.js";import"./focusSafely.module.e67f986f.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
