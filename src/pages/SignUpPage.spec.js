import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/vue'
import SignUpPage from './SignUpPage.vue'

it('Has Sign Up Header', () => {
	render(SignUpPage)
	const header = screen.queryByRole('heading', { name: 'Sign Up' })
	expect(header).toBeInTheDocument()
})
