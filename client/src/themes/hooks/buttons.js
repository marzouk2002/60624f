import { makeStyles } from "@material-ui/core";

const useButtonStyles = makeStyles(theme => ({
    primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: '3px',
        padding: '18px 56px 14px 56px',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: theme.typography.fontFamily,

        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        }
    },

    secondary: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main,
        fontSize: theme.typography.fontSize,
        backgroundColor: theme.palette.primary.contrastText,
        boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
        padding: '16px 42px',
    },
}));

export default useButtonStyles;