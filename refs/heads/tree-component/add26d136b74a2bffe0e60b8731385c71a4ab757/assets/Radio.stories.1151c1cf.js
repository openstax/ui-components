import{s as d,a as e,F as i,j as n}from"./index.cbea4b92.js";import{R as o}from"./Radio.b6145878.js";import"./theme.078f33d0.js";import"./palette.15e4d008.js";import"./Tooltip.a2203e42.js";import"./Button.module.d22ddfc8.js";import"./useFocusRing.module.7afdb1fb.js";import"./useButton.module.c1972754.js";import"./OverlayArrow.module.d5847ca0.js";import"./Info.31dc6fda.js";import"./focusSafely.module.177015d4.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
