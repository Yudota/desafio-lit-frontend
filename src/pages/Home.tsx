import axios from "axios"
import BasicTable from "../compoments/BasicTable"
import { useEffect, useState } from "react"
import Input from "@mui/material/Input"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { Box, Button, FormControl, InputLabel, MenuItem } from "@mui/material"



const Home = () => {
  const [headers, setHeaders] = useState('nome');
  const [inputData, setInputData] = useState('')
  const [employees, setEmployees] = useState<any>([])


  useEffect(() => {
    getFuncionarios()
  }, [])

  const filterData = async (entry: string) => {
    console.log('entry:', entry);

    const { data: funcionarios } = await axios.get('http://localhost:8000/funcionario')
    const formatedData = funcionarios.data.map((funcionario: any) => {

      console.log({
        ...funcionario,
        cargo: funcionario.cargo.car_nome
      })
      return {
        ...funcionario,
        cargo: funcionario.cargo.car_nome
      }
    })

    const result = formatedData.filter((employee: any) => employee[entry].includes(inputData))
    setEmployees([...result]);

  }

  const getFuncionarios = async () => {
    const { data: funcionarios } = await axios.get('http://localhost:8000/funcionario')
    const formatedData = funcionarios.data.map((funcionario: any) => {

      console.log({
        ...funcionario,
        cargo: funcionario.cargo.car_nome
      })
      return {
        ...funcionario,
        cargo: funcionario.cargo.car_nome
      }
    })

    console.log('formatado:', formatedData)
    setEmployees(formatedData)
  }
  return (
    <div className='home-container' style={{
      marginTop: '100px'
    }}>

      <div style={
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'inherit',
        }}
      >
        <Input value={inputData} onChange={(e) => { setInputData(e.target.value) }} />
        <>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={headers}
                label="Filtro"
                onChange={(e) => { setHeaders(e.target.value as string) }}
                defaultValue='Nome'
              >
                <MenuItem value='nome'>Nome</MenuItem>
                <MenuItem value='cpf'>CPF</MenuItem>
                <MenuItem value='cargo'>Cargo</MenuItem>
                <MenuItem value='email'>Email</MenuItem>
                <MenuItem value='isActive'>Status</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </>

        <Button type="button" onClick={() => filterData(headers)}>
          Filtrar
        </Button>
      </div>

      <BasicTable rows={employees} />
    </div >
  )
}
export default Home