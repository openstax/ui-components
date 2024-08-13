import{s as r,a as e,F as i,j as n}from"./index.7d1dd54f.js";import{R as o}from"./Radio.1419f2d4.js";import"./theme.cf7b796d.js";import"./palette.15e4d008.js";import"./Tooltip.14012478.js";import"./OverlayArrow.module.66d3bd5f.js";import"./focusSafely.module.73535ea4.js";import"./context.module.d349f2ac.js";import"./Info.44aa216a.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
