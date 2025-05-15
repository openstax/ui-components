import{s as d,a as e,F as i,j as n}from"./index.e1a1e965.js";import{R as o}from"./Radio.f41707cb.js";import"./theme.5d2d8ce5.js";import"./palette.15e4d008.js";import"./Tooltip.16626892.js";import"./Button.module.d5bbfaa4.js";import"./useFocusRing.module.b3b56f72.js";import"./useButton.module.73b15cab.js";import"./OverlayArrow.module.255a4692.js";import"./Info.a95f2c7c.js";import"./focusSafely.module.dc4353ae.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
