import{R as a,s as l,j as s,a as o,F as c}from"./index.44fe421c.js";import{M as m,a as p}from"./Modal.6b46406e.js";import{c as i}from"./theme.1ea202d0.js";const u=a.createContext(null),d=l.div`
  font-size: 0.9rem;
  color: ${i.palette.neutralMedium};
  margin-top: 1.2rem;
`,v=({heading:t,children:e,...n})=>{const r=a.useContext(u);return s(m,{...n,"data-testid":"error",children:[o(p,{children:t!=null?t:"Uh-oh, there's been a glitch"}),e!=null?e:s(c,{children:["We're not quite sure what went wrong. Restart your browser. If this doesn't solve the problem, visit our ",o("a",{href:"https://openstax.secure.force.com/help",target:"_blank",children:"Support Center"}),"."]}),o(d,{children:r==null?void 0:r.eventId})]})};export{v as E,u as a};
