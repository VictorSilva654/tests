import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários ao DOM', () => {
        render(<PostComment/>)

        fireEvent.change(screen.getByTestId('textoComentario'), {
            target: {
                value: 'Iserindo um primeiro comentário' 
            }
        })
        fireEvent.click(screen.getByTestId('botaoComentario'))

        fireEvent.change(screen.getByTestId('textoComentario'), {
            target: {
                value: 'INserindo um segundo comentário' 
            }
        })
        fireEvent.click(screen.getByTestId('botaoComentario'))

        expect(screen.getAllByTestId('elementoComentario')).toHaveLength(2)

    })
});

