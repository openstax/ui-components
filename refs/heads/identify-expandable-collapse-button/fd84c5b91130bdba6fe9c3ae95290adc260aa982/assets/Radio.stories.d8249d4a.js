import{s as d,a as e,F as i,j as n}from"./index.619157ca.js";import{R as o}from"./Radio.c09d33c2.js";import"./theme.8e9f065c.js";import"./palette.15e4d008.js";import"./Tooltip.6b6cfbd3.js";import"./Button.module.c96bc382.js";import"./useFocusRing.module.472e70cc.js";import"./useButton.module.d2544a01.js";import"./OverlayArrow.module.667cb704.js";import"./Info.a08fcec3.js";import"./focusSafely.module.3d6607bb.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
