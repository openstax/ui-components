import{s as n,a as e,F as d,j as o}from"./index.50e76544.js";import{R as i}from"./Radio.2cf99dfe.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.e410668e.js";import"./Button.module.355a310d.js";import"./useFocusRing.module.fc01075e.js";import"./context.module.88ac0bfb.js";import"./useButton.module.c170d7cb.js";import"./OverlayArrow.module.d7fa9d7a.js";import"./Info.11ad1bdd.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
