import{s as r,a as e,F as i,j as n}from"./index.cf24ef3b.js";import{R as o}from"./Radio.f4bfe224.js";import"./theme.f1fb32ed.js";import"./palette.15e4d008.js";import"./Tooltip.74bb595c.js";import"./OverlayArrow.module.84d9e499.js";import"./context.module.2174a500.js";import"./useButton.module.0dda1c74.js";import"./Info.dfe98dd8.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
