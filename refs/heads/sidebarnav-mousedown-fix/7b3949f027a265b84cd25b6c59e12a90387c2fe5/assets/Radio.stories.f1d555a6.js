import{s as r,a as e,F as i,j as n}from"./index.2e5bf251.js";import{R as o}from"./Radio.9068f756.js";import"./theme.37d6da14.js";import"./palette.15e4d008.js";import"./Tooltip.48d6a819.js";import"./OverlayArrow.module.00869e8f.js";import"./focusSafely.module.086ed6ef.js";import"./context.module.2033781d.js";import"./Info.55081754.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
