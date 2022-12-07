import{s as g,C as i,R as l,j as o}from"./index.896e20ab.js";import{c as t}from"./theme.2b5a452e.js";var n="/home/runner/work/ui-components/ui-components/src/components/Toast.tsx";const m=500,N=1e3,x=g.div`
  min-height: 5rem;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  ${e=>!e.inline&&i`
    max-width: 28rem;
  `}
  font-size: 1.4rem;

  ${e=>e.dismissAfterMs?i`
    animation-duration: ${m}ms;
    animation-timing-function: ease;
    animation-delay: ${e.dismissAfterMs-m}ms;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-play-state: running;
    animation-fill-mode: forwards;
    animation-name: toast-animation;

    @keyframes toast-animation {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
  `:null}

  ${e=>e.inline&&i`
    margin: 0 auto;
    box-shadow: none;
    border: 1px solid rgba(0,0,0,0.2);
  `}

  > * {
    flex-grow: 1;
  }

  .title {
    padding: 1rem;
    font-weight: bold;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }

  .body {
    padding: 1rem;
  }

  .success {
    .title {
      color: ${t.palette.darkerGreen};
      background-color: ${t.palette.paleGreen};
    }
  }

  .neutral {
    .title {
      color: ${t.palette.neutralDarker};
      background-color: ${t.palette.neutralLighter};
    }
  }

  .failure {
    .title {
      color: ${t.palette.darkRed};
      background-color: ${t.palette.paleRed};
      .openstax-icon[type="close"] {
        color: ${t.palette.neutralDark};
        margin-left: 2rem;
        align-self: flex-start;
      }
    }
    .body {
      button {
        padding-left: 0;
        font-size: 1.6rem;
      }
    }
  }
`,v=({id:e,title:s,children:c,variant:u="neutral",inline:d=!1,dismissAfterMs:a,onDismiss:r})=>{const[f,p]=l.useState(!0);return a&&(a=Math.max(a,N)),l.useEffect(()=>{if(!a)return;const b=setTimeout(()=>{p(!1),r&&r(e)},a);return()=>{clearTimeout(b)}},[]),f?o(x,{dismissAfterMs:a,inline:d,children:o("div",{className:u,children:[o("div",{className:"title",children:s},void 0,!1,{fileName:n,lineNumber:154,columnNumber:7},void 0),o("div",{className:"body",children:c},void 0,!1,{fileName:n,lineNumber:155,columnNumber:7},void 0)]},void 0,!0,{fileName:n,lineNumber:153,columnNumber:5},void 0)},void 0,!1,{fileName:n,lineNumber:150,columnNumber:10},void 0):null};export{v as T};
