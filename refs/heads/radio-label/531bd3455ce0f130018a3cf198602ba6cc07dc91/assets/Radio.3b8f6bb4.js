import{s,R as m,a as i,j as n}from"./index.a469d102.js";import{c as a}from"./theme.3d00966d.js";import{C as f}from"./Tooltip.0bf9d2c9.js";import{a as h,b as u}from"./module.3763579e.js";const c=s.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?a.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,d=s.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${e=>e.isDisabled?"#f7f7f7":"#fff"};
  font: inherit;
  color: ${a.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${e=>e.isDisabled?"#e6e6e6":"currentColor"};
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
    box-shadow: inset 1em 1em ${a.palette.mediumBlue};
  }

  &:checked::before {
    opacity: ${e=>e.isDisabled?0:1};
  }
`,y=s.div`
  display: inline-block;
`,R=({children:e,disabled:t,...o})=>{const r=h({delay:0}),l=m.useRef(null),{triggerProps:p,tooltipProps:b}=u({delay:0},r,l);return o.tooltipText?i("div",{children:i(y,{children:n(c,{ref:l,isDisabled:t,"aria-disabled":t,...p,children:[i(d,{type:"radio",onFocus:()=>r.open(),isDisabled:t,"aria-disabled":t,...o}),e,r.isOpen&&i(f,{state:r,...b,placement:"right",children:o.tooltipText})]})})}):n(c,{isDisabled:t,"aria-disabled":t,children:[i(d,{type:"radio",isDisabled:t,"aria-disabled":t,...o}),e]})};export{R};
