import{s as n,a as e,F as d,j as o}from"./index.a28ac396.js";import{R as i}from"./Radio.dde28e8f.js";import"./theme.1c8963ed.js";import"./palette.5e342580.js";import"./Tooltip.987392ad.js";import"./Button.module.25378011.js";import"./useFocusRing.module.2db638f6.js";import"./context.module.41396c5b.js";import"./useButton.module.58a9e0c6.js";import"./OverlayArrow.module.299e1e25.js";import"./Info.2d3b50c6.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
