import React from 'react'
import {render} from '@testing-library/react'
import Trasacao from './Transacao'

describe('Componente de transação do extrato', () => {
  it('O snapshot do componente deve permanecer sempre o mesmo', () => {
    const { container } = render(<Trasacao 
      data = "08/09/2020"
      tipo = "saque"
      valor = "20.00"
    />)

    expect(container.firstChild).toMatchSnapshot()
  })
})