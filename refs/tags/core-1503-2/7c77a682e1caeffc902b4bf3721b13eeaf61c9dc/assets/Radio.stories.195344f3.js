import{s as n,a as e,F as d,j as o}from"./index.47766ba9.js";import{R as i}from"./Radio.6656a28c.js";import"./theme.19eedf03.js";import"./palette.5e342580.js";import"./Tooltip.c398c12d.js";import"./Button.module.e2fa53ee.js";import"./useFocusRing.module.88af0cba.js";import"./context.module.6b9b9904.js";import"./useButton.module.8a961ae1.js";import"./OverlayArrow.module.ab21263d.js";import"./Info.3fa2eaf7.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
