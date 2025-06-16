import{s as g,C as n,R as i,a as o,j as x}from"./index.c3f899c4.js";import{c as e}from"./theme.e03456da.js";const l=500,b=1e3,h=g.div`
  min-height: 5rem;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  ${t=>!t.inline&&n`
    max-width: 28rem;
  `}
  font-size: 1.6rem;

  ${t=>t.dismissAfterMs?n`
    animation-duration: ${l}ms;
    animation-timing-function: ease;
    animation-delay: ${t.dismissAfterMs-l}ms;
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

  ${t=>t.inline&&n`
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
      color: ${e.palette.darkerGreen};
      background-color: ${e.palette.paleGreen};
    }
  }

  .neutral {
    .title {
      color: ${e.palette.neutralDarker};
      background-color: ${e.palette.neutralLighter};
    }
  }

  .failure {
    .title {
      color: ${e.palette.darkRed};
      background-color: ${e.palette.paleRed};
      .openstax-icon[type="close"] {
        color: ${e.palette.neutralDark};
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
`,w=({id:t,title:s,children:c,variant:m="neutral",inline:d=!1,dismissAfterMs:a,onDismiss:r})=>{const[u,f]=i.useState(!0);return a&&(a=Math.max(a,b)),i.useEffect(()=>{if(!a)return;const p=setTimeout(()=>{f(!1),r&&r(t)},a);return()=>{clearTimeout(p)}},[]),u?o(h,{dismissAfterMs:a,inline:d,children:x("div",{className:m,children:[o("div",{className:"title",children:s}),o("div",{className:"body",children:c})]})}):null};export{w as T};
