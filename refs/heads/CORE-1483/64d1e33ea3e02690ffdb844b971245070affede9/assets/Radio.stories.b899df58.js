import{s as d,a as e,F as i,j as n}from"./index.4c08c77b.js";import{R as o}from"./Radio.369a7fd9.js";import"./theme.6c1366c4.js";import"./palette.5e342580.js";import"./Tooltip.614645d8.js";import"./Button.module.6afd7f3d.js";import"./useFocusRing.module.643381dc.js";import"./context.module.237291cc.js";import"./useButton.module.156ae38e.js";import"./OverlayArrow.module.8dc10fcc.js";import"./Info.947261f3.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
