import{s as r,a as e,F as i,j as n}from"./index.61fda8ed.js";import{R as o}from"./Radio.7ef15823.js";import"./theme.add8cbd9.js";import"./palette.15e4d008.js";import"./Tooltip.cb358026.js";import"./OverlayArrow.module.8cb1b2c9.js";import"./context.module.32260de9.js";import"./useButton.module.2d20d353.js";import"./Info.22a7bdd1.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
