import{s as d,a as e,F as i,j as n}from"./index.7e4b207f.js";import{R as o}from"./Radio.e4516289.js";import"./theme.a48a4dd0.js";import"./palette.15e4d008.js";import"./Tooltip.e7626521.js";import"./Button.module.d3ce6886.js";import"./useFocusRing.module.d6811e15.js";import"./context.module.5b8a8f3c.js";import"./useButton.module.844cbaae.js";import"./OverlayArrow.module.8b1f763e.js";import"./Info.ffb01e0c.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
