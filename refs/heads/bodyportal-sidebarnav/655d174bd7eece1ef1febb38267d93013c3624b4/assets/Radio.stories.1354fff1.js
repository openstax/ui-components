import{s as r,a as e,F as i,j as n}from"./index.5adbd7d6.js";import{R as o}from"./Radio.6d2e1263.js";import"./theme.830fc1c0.js";import"./palette.15e4d008.js";import"./Tooltip.d71a89c2.js";import"./OverlayArrow.module.41a6c996.js";import"./focusSafely.module.8ed8d087.js";import"./context.module.91afb465.js";import"./Info.60581884.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
