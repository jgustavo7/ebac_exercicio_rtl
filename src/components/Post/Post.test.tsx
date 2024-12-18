import { fireEvent, render, screen } from "@testing-library/react";
import Post from "../PostComments"; 

describe('Teste para o componente Post', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Post')).toBeInTheDocument();
    })

    test('Deve adicionar comentarios ao Post', () => {
        render(<Post />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: ''
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))
        expect(screen.getByTestId('muito legal')).toBeInTheDocument()
    })
})
