import { useEffect } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
        .then(response => console.log(response.data))
    }, []);

    return(
        <Container>
            <table>

                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="withdraw">R$ 12.000,00</td>
                        <td>Desenvolvimento de Website</td>
                        <td>12/04/2022</td>        
                    </tr>

                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento de Website</td>
                        <td>12/04/2022</td>        
                    </tr>
                </tbody>

            </table>
        </Container>
    )
} 