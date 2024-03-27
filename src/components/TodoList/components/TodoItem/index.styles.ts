import styled from '@emotion/styled'

interface TextProps {
	isComplete: boolean
}

export const TodoItemWrapper = styled.div`
	display: flex;
	justify-content: flex-start;	
	gap:10px;
	background: #FFF;
	align-items: center;
	border: 1px solid #000;
	border-radius: 5px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
		padding: 5px;
	
	& > button {
    display: flex;
		margin-left: auto;
		border: none;
		background: none;
		cursor: pointer;
		transition: opacity 0.3s;
		&:hover {
      opacity: 0.7;
		}
	}
`

export const Text = styled.h3<TextProps>(
	{
		margin:0
	},
	props=> ({textDecoration:props.isComplete?'line-through':'none'})
)
