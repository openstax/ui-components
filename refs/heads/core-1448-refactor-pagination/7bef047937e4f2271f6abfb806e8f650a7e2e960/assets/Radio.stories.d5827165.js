import{s as n,a as e,F as d,j as o}from"./index.f3178a9e.js";import{R as i}from"./Radio.4b99079e.js";import"./theme.99ff7e39.js";import"./palette.5e342580.js";import"./Tooltip.ea239d19.js";import"./Button.module.3e75b809.js";import"./useFocusRing.module.dff59a8b.js";import"./context.module.fd8ddd17.js";import"./useButton.module.ea30babf.js";import"./OverlayArrow.module.0ebbcfcd.js";import"./Info.91501a0a.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
