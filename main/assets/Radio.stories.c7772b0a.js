import{s as r,a as e,F as i,j as n}from"./index.ebc20e14.js";import{R as o}from"./Radio.83274b99.js";import"./theme.2d6d734f.js";import"./palette.15e4d008.js";import"./Tooltip.155a12f5.js";import"./OverlayArrow.module.28930c28.js";import"./focusSafely.module.5e643972.js";import"./context.module.61a96b5f.js";import"./Info.fc87330e.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
