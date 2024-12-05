import{s as i,a as t,F as y,j as d}from"./index.9b9905cd.js";import"./Radio.8faacbdc.js";import{C as g}from"./Checkbox.d7632786.js";const m=i.label`
  display: flex;
  flex-direction: column;
  flex: 0;
  justify-content: stretch;
`,h=i.span`
  white-space: nowrap;
  font-weight: bold;
  display: block;
`,v=i.p`
  font-style: italic;
  margin: 0;
  padding: 0;
`,x=({value:n,...r})=>n?t(v,{...r,children:n}):null,f=n=>n.show?t(y,{children:"*"}):null,w=i.input`
  flex: 1;
  justify-content: stretch;
`,u=i.div`
  flex-direction: row;
  display: flex;
`,I=({label:n,addon:r,help:o,wrapperProps:a,onChangeValue:l,...e})=>d(m,{...a,children:[d(h,{children:[t(f,{show:e.required}),n,":"]}),d(u,{children:[t(w,{type:"text",...e,onChange:c=>{var s;l==null||l(e.transformValue?e.transformValue(c.target.value):c.target.value),(s=e.onChange)==null||s.call(e,c)}}),r]}),t(x,{value:o})]});i.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;i(h)`
  white-space: normal;
`;const b=i.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`,T=i.p`
  color: #C22032;
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  line-height: 2.5rem;
`,q=({label:n,help:r,wrapperProps:o,error:a,onChangeValue:l,...e})=>d(m,{...o,children:[t(b,{children:t(g,{...e,onChange:c=>{var s;l==null||l(!!c.target.checked),(s=e.onChange)==null||s.call(e,c)},children:d(h,{children:[t(f,{show:e.required}),n]})})}),t(x,{value:r}),a!==void 0&&a.length>0&&t(T,{children:"This activity has been deleted. Please deselect this activity to remove it from this assignment and avoid errors."})]});export{q as C,I as T};
