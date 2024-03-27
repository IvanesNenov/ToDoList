import styled from '@emotion/styled'


export const WrapperInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content;
	margin-bottom: 10px;

  & > input {
    border: 1px solid #B1B1B1;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 8px 10px;
    font: 16px/1.4 'Inter', sans-serif;
    background: #FFF;

    &::placeholder {
      color: darkgrey;
    }
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #FFF;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    background: #72bb24;

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;

    }
  }

 

  

`