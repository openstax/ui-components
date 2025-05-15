import{s as d,a as e,F as i,j as n}from"./index.764eb68c.js";import{R as o}from"./Radio.93ad40a5.js";import"./theme.fb75aff6.js";import"./palette.15e4d008.js";import"./Tooltip.7f5f3dc4.js";import"./Button.module.aae84ec8.js";import"./useFocusRing.module.9a119be1.js";import"./useButton.module.9b3be454.js";import"./OverlayArrow.module.ce8eb8f3.js";import"./Info.a95edac5.js";import"./focusSafely.module.f93a491a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
