import PropTypes from "prop-types";
import useDialog from "./context/useDialog";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Button } from "@mui/material";

/**
 * Componente de diálogo de alerta.
 * @param {Object} options - Opciones para configurar el diálogo.
 * @param {string} options.title - Título del diálogo.
 * @param {string} options.message - Mensaje del diálogo.
 * @param {React.Element} options.icon - Icono del diálogo.
 * @param {Object} options.color - Colores del diálogo.
 * @param {string} options.color.bg - Color de fondo del botón de aceptar.
 * @param {string} options.color.bg_soft - Color de fondo suave.
 * @param {Function} options.handleClose - Función para manejar el cierre del diálogo.
 * @returns {JSX.Element} Componente del diálogo de alerta.
 */
export default function AlertDialogComponent({ options }) {
  const { title, message, icon, color, handleClose } = options;
  const { bg, bg_soft } = color;
  const { isOpen } = useDialog();

  return (
    <Dialog
      open={isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box sx={{ backgroundColor: 'red' }}>
        {icon}

        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: 'blue', width: '100%', height: 'auto' }}>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions className="flex justify-between">
          <Button onClick={() => handleClose(false)}>Disagree</Button>
          <Button variant='contained' color='primary' onClick={() => handleClose(true)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

AlertDialogComponent.propTypes = {
  options: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.shape({
      bg: PropTypes.string.isRequired,
      bg_soft: PropTypes.string.isRequired,
    }).isRequired,
    handleClose: PropTypes.func,
  }).isRequired,
};


AlertDialogComponent.propTypes = {
  options: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.shape({
      bg: PropTypes.string.isRequired,
      bg_soft: PropTypes.string.isRequired,
    }).isRequired,
    handleClose: PropTypes.func,
  }).isRequired,
};
