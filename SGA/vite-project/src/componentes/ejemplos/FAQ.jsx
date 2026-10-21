import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Paper from '@mui/material/Paper';
export function FAQ() {
  const id = React.useId();
  return (
    <div>
    <Paper elevation={3} sx={{p:2, border:2, borderColor:"divider", borderRadius:2}}>
        <Typography variant="h5" xs={{mb: 1}}>
          Preguntas Frecuentes
        </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">¿Como se registra un alumno?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Se debe completar el formulario de registro 
            con los datos del alumno y hacer click en el boton "Registrar Alumno".
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">¿Como puedo modificar los datos de un alumno</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Se debe hacer click en el boton "Editar" del alumno que se desea modificar,
            luego se debe modificar los datos en el formulario y hacer click en el boton "Actualizar Alumno".
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">¿Se puede eliminar a un alumno?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Si, se puede eliminar a un alumno haciendo click en el boton "Eliminar" del alumno que se desea eliminar,
            luego se debe confirmar la acción en el mensaje de confirmación.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">¿Como se elimina un alumno?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Se debe hacer click en el boton "Eliminar" del alumno que se desea eliminar,
            luego se debe confirmar la acción en el mensaje de confirmación.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Paper>
    </div>
  );
}
