import{s as r,a as e,F as i,j as n}from"./index.3de36e76.js";import{R as o}from"./Radio.101d6e8b.js";import"./theme.4ade321c.js";import"./palette.15e4d008.js";import"./Tooltip.feb95d93.js";import"./OverlayArrow.module.648fb943.js";import"./context.module.2d6a64b7.js";import"./useButton.module.782b46db.js";import"./Info.22aa2acc.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
