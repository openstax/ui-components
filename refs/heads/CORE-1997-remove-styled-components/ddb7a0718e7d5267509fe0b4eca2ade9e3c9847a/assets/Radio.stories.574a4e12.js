import{s as n,a as e,F as d,j as o}from"./index.7e3e94d2.js";import{R as i}from"./Radio.2b93cb5a.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.37be9b45.js";import"./Button.module.e63dbbbd.js";import"./useFocusRing.module.031ad62f.js";import"./context.module.957e320f.js";import"./useButton.module.e0af28ba.js";import"./OverlayArrow.module.537fccaf.js";import"./Info.af75b6a9.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
