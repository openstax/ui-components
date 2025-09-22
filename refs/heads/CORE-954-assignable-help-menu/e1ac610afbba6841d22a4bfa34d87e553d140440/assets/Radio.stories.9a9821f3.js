import{s as d,a as e,F as i,j as n}from"./index.82170460.js";import{R as o}from"./Radio.995102e8.js";import"./theme.fb1fd088.js";import"./palette.15e4d008.js";import"./Tooltip.3783d9b3.js";import"./Button.module.078e1228.js";import"./useFocusRing.module.4ab47471.js";import"./context.module.341bdf06.js";import"./useButton.module.b8fa1bea.js";import"./OverlayArrow.module.6ad572a2.js";import"./Info.5dfb5823.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
