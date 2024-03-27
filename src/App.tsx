
import { Global, css } from '@emotion/react'

import {Card, Wrapper} from "@/App.styles";
import {TodoInput,TodoList} from '@/components'

function App(){


  return (
      <>
      <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
              min-height: 100vh;
              max-width: 100vw;
            }
          `}
      />
    <Wrapper>
        <Card>
            <h5>Список задач</h5>
            <TodoInput/>
            <TodoList/>
        </Card>
    </Wrapper>
      </>
  )
}

export default App
