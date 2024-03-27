import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from "@/App"


describe("Рендер App", () => {
	it('renders without crashing', () => {
		render(<App/>);
		expect(true).toBeTruthy()
	});

})


