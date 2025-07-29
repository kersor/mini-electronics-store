import Page from '@/app/testpage/page'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe("Тестирование страницы Page", () => {
    it("Тестирование button", () => {
        render(<Page />)
        // Ищем компонент с названием "Click me"
        const button = screen.getByText(/Click me/i)
        // Приверяем существует ли он в документе
        expect(button).toBeInTheDocument()
    })
    it("Тестирование Input", () => {
        render(<Page />)
        // Берем компонент по placeholder
        const input = screen.getByPlaceholderText("Hello, world!")
        expect(input).toBeInTheDocument()
    })

    it("find_get_query", async () => {
        render(<Page />)
        // Берем компонент который появится через какое то время с текстом
        // Hello, world 
        const helloWorld = await screen.findByText("Hello, world")
        expect(helloWorld).toBeInTheDocument()
    })

    it("Тестированеие button v2", () => {
        render(<Page />)
        const btn = screen.getByRole('button')
        fireEvent.click(btn)
        const toggle = screen.queryByText("toggle")
        expect(toggle).toBeInTheDocument()
    })

    it("Тестированеие button v2", () => {
        render(<Page />)
        screen.debug()
        const inp = screen.getByRole('input')
        fireEvent.input(inp, {
            target: {
                value: "123"
            }
        })
        const h2 = screen.getByTestId("value-elem")
        expect(h2).toContainHTML("123")
        screen.debug()
    })
}) 
