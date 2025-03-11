import{s as f,R as s,j as i,a,F as I}from"./index.c232f93f.js";import{M as E,a as h}from"./Modal.98e6f73a.js";import{c as x}from"./theme.1a9b3d09.js";import{E as b,l as m}from"./contexts.276a3410.js";const w=f.div`
  font-size: 1.4rem;
  color: ${x.palette.neutralMedium};
  margin-top: 1.6rem;
`,R=({heading:e,children:r,...u})=>{var n,d;const o=s.useContext(b),[t,v]=s.useState(m());return s.useEffect(()=>{var l;if(((l=o.error)==null?void 0:l.eventId)||t)return;const p=setInterval(()=>{const c=m();t!==c&&v(c)},100);return()=>clearInterval(p)},[t,(n=o.error)==null?void 0:n.eventId]),i(E,{...u,"data-testid":"error",children:[a(h,{children:e!=null?e:"Uh-oh, there's been a glitch"}),r!=null?r:i(I,{children:["We're not quite sure what went wrong. Restart your browser. If this doesn't solve the problem, visit our ",a("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"}),"."]}),a(w,{"data-testid":"event-id",children:((d=o.error)==null?void 0:d.eventId)||t})]})};export{R as E};
