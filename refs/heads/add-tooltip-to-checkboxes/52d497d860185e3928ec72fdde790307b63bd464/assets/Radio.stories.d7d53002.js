import{s as l,a as t,j as a,F as d}from"./index.dc15c21a.js";import{c as r}from"./theme.469067e1.js";import{u as w}from"./Tooltip.43c83908.js";import"./palette.5e342580.js";import"./Button.module.50840617.js";import"./useFocusRing.module.218800ae.js";import"./context.module.8323f7a9.js";import"./useButton.module.e12a1c82.js";import"./OverlayArrow.module.70bd92e8.js";import"./Info.bfdb4fba.js";const m=l.label`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?r.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,p=l.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${r.palette.white};
  opacity: ${e=>e.isDisabled?"0.4":"1"};
  font: inherit;
  color: ${r.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${r.palette.neutralThin};
  border-radius: 50%;
  transform: translateY(-0.075em);
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    opacity: 0;
    box-shadow: inset 1em 1em ${r.palette.mediumBlue};
  }

  &:checked::before {
    opacity: ${e=>e.isDisabled?0:1};
  }
`,T=l.div`
  display: inline-block;
`,o=({children:e,disabled:i,labelAs:n,tooltipText:s,...c})=>{const{triggerRef:f,triggerProps:g,openTooltip:y,tooltip:D}=w(s);return s?t("div",{children:t(T,{children:a(m,{ref:f,as:n,isDisabled:i,...g,children:[t(p,{type:"radio",onFocus:y,isDisabled:i,disabled:i,...c}),e,D]})})}):a(m,{isDisabled:i,as:n,children:[t(p,{type:"radio",isDisabled:i,disabled:i,...c}),e]})},b=l.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,u=e=>a(b,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),C=()=>t(d,{children:u({name:"default"})}),E=()=>t(d,{children:u({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),h=e=>a(b,{children:[t(o,{disabled:!0,...e,children:"Disabled label"}),t(o,{disabled:!0,defaultChecked:!0,...e,children:"Disabled label"})]}),z=()=>a(d,{children:[h({name:"disabled"}),h({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{C as Default,z as Disabled,E as WithTooltip};
