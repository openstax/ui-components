import{s as r,a as e,F as i,j as n}from"./index.e0203407.js";import{R as o}from"./Radio.5224bcaa.js";import"./theme.e5e3f992.js";import"./palette.15e4d008.js";import"./Tooltip.770d1b62.js";import"./OverlayArrow.module.1ecfbc09.js";import"./context.module.1925c255.js";import"./useButton.module.5a9a4da0.js";import"./Info.8cee47bd.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
