import styled from '@emotion/styled'


export const Wrapper = styled.div`

  margin: 0 0;
  background: rgba(255, 255, 255, 0.71);
  min-height: 100vh;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 16px/1.4 'Inter', sans-serif;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

`

export const Card = styled.div`
  min-width: 600px;
  background: rgba(238, 255, 237, 0.58);
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px 50px;

  & > h5 {
    font-size: 40px;
    margin: 0 0 0.5em 0;
    text-align: center;
  }

`


