import{s as r,a as e,F as i,j as n}from"./index.05d8845e.js";import{R as o}from"./Radio.6d113d15.js";import"./theme.13422aea.js";import"./palette.15e4d008.js";import"./Tooltip.30020495.js";import"./OverlayArrow.module.e9f1b6c7.js";import"./context.module.debe95ce.js";import"./useButton.module.3a56d67c.js";import"./Info.da5a0110.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
