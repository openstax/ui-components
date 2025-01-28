import{s as d,a as e,F as i,j as n}from"./index.c7881c19.js";import{R as o}from"./Radio.14b304b3.js";import"./theme.4b6c3a74.js";import"./palette.15e4d008.js";import"./Tooltip.aaa15ec4.js";import"./OverlayArrow.module.28da0728.js";import"./context.module.efea8a6c.js";import"./Hidden.module.5f46c756.js";import"./useButton.module.565cbdc6.js";import"./Info.a443c4b4.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
