import{s as r,a as e,F as i,j as n}from"./index.eb704414.js";import{R as o}from"./Radio.461a9fc6.js";import"./theme.2bad9ef5.js";import"./palette.15e4d008.js";import"./Tooltip.d8a8a8a8.js";import"./OverlayArrow.module.c212e9a1.js";import"./context.module.60f3bda3.js";import"./useButton.module.24992bc4.js";import"./Info.954f5677.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
