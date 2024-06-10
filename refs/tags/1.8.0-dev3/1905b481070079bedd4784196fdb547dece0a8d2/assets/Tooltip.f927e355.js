import{s as o,j as i,a as e}from"./index.ea1552af.js";import{c as a}from"./theme.543648ff.js";import{h as s,a as m,i as p,j as n,k as g,l as h}from"./module.0521079f.js";import{I as f}from"./Info.6eb9ae9c.js";const l=`
  box-shadow: 0 0.8rem 2rem rgba(0 0 0 / 0.1);
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  background: ${a.palette.white};
  color: ${a.palette.neutralThin};
  outline: none;
  padding: 1rem;
  /* fixes FF gap */
  transform: translate3d(0, 0, 0);
  position: absolute;
  min-width: 24rem;
  z-index: 1000;

  &[data-placement=top] {
    margin-bottom: 0.8rem;
    --origin: translateY(0.4rem);
  }

  &[data-placement=bottom] {
    margin-top: 0.8rem;
    top: 50%;
    --origin: translateY(-0.4rem);
    & .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    left: 100%;
    margin-left: 0.8rem;
    --origin: translateX(-0.4rem);
    & .react-aria-OverlayArrow {
      top: 50%;
      svg {
        transform: rotate(90deg);
      }
    }
  }

  &[data-placement=left] {
    margin-right: 0.8rem;
    --origin: translateX(0.4rem);
    & .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  & .react-aria-OverlayArrow svg {
    display: block;
    fill: ${a.palette.white};
  }
`,$=o(s)`${l}`,b=o.div`
  ${l}  
`,x=o(m)`
  border: none;
  padding: 0;
  margin-left: 0.4rem;
  display: flex;
  background-color: inherit;
`,v=({children:r,placement:t,icon:d,...c})=>i($,{...c,placement:t,children:[e(n,{children:e("svg",{width:8,height:8,viewBox:"0 0 8 8",children:e("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})}),r]}),T=({icon:r,...t})=>i(p,{delay:0,children:[e(x,{children:r?e("img",{src:r,"aria-hidden":!0,alt:""}):e(f,{"aria-hidden":!0})}),e(v,{...t})]}),j=({state:r,...t})=>{const{tooltipProps:d}=g(t,r);return i(b,{"data-placement":t.placement,...h(t,d),children:[t.children,e(n,{...t,children:e("svg",{width:8,height:8,viewBox:"0 0 8 8",children:e("path",{d:"M0 0 L4 4 L8 0",stroke:"#ccc",strokeWidth:"1"})})})]})};export{j as C,T};
