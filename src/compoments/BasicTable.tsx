import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SaveIcon from '@mui/icons-material/Save';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Button from '@mui/material/Button';
interface Funcionario {
  nome: string
  cpf: string
  cargo: string
  email: string
  isActive: boolean
}
interface Props {
  rows: Array<Funcionario>
}

export default function BasicTable({ rows }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="center">CPF</TableCell>
            <TableCell align="center">Cargo</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="center">{row.cpf}</TableCell>
              <TableCell align="center">{row.cargo}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.isActive ? 'Ativo' : 'Inativo'}</TableCell>
              <TableCell align="center">{row.isActive ? <Button>
                <SaveIcon />
              </Button>
                : <Button>

                  <ArrowCircleUpIcon />
                </Button>
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}