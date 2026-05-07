import{s as n,a as e,F as d,j as o}from"./index.84d40ee4.js";import{R as i}from"./Radio.d68308af.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.8efd0fc6.js";import"./Button.module.63c59d0a.js";import"./useFocusRing.module.4429028b.js";import"./context.module.018b8870.js";import"./useButton.module.3a92ba3d.js";import"./OverlayArrow.module.77809b70.js";import"./Info.26f4bd2a.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
