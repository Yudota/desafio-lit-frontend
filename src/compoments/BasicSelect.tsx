import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function BasicSelect() {
  const [headers, setHeaders] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setHeaders(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={headers}
          label="Filtro"
          onChange={handleChange}
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
  )
}