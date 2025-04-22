import{s as r,a as e,F as i,j as n}from"./index.df7d58c7.js";import{R as o}from"./Radio.9c211140.js";import"./theme.31cfe468.js";import"./palette.15e4d008.js";import"./Tooltip.96bfc21c.js";import"./OverlayArrow.module.e1766d59.js";import"./context.module.f57597da.js";import"./useButton.module.7d280916.js";import"./Info.9b6936f8.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
