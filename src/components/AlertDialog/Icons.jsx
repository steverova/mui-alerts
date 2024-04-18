import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import ReportGmailerrorredRoundedIcon from '@mui/icons-material/ReportGmailerrorredRounded';

const COLORS = {
  success: {
    text: "text-green-700",
    bg: "bg-green-600",
    bg_soft: "bg-green-100",
  },
  warning: {
    text: "text-yellow-500",
    bg: "bg-yellow-500",
    bg_soft: "bg-yellow-100",
  },
  error: {
    text: "text-red-500",
    bg: "bg-red-500",
    bg_soft: "bg-red-100",
  },
  info: {
    text: "text-blue-500",
    bg: "bg-blue-500",
    bg_soft: "bg-blue-100",
  },
};

const Icons = {
  success: <CheckCircleOutlineRoundedIcon className={COLORS["success"]?.text} />,
  warning: <WarningAmberRoundedIcon className={COLORS["warning"]?.text} />,
  error: <ReportGmailerrorredRoundedIcon className={COLORS["error"]?.text} />,
  info: <InfoOutlinedIcon className={COLORS["info"]?.text} />,
};

export default Icons;
