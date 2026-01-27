import{s as d,a as e,F as i,j as n}from"./index.81dfb6b1.js";import{R as o}from"./Radio.9319b4be.js";import"./theme.7ceff249.js";import"./palette.5e342580.js";import"./Tooltip.650007db.js";import"./Button.module.e88ccaec.js";import"./useFocusRing.module.3c6a9e23.js";import"./context.module.c115203f.js";import"./useButton.module.14846d47.js";import"./OverlayArrow.module.02565d75.js";import"./Info.2af4a111.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
