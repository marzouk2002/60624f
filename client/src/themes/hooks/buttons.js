import { makeStyles } from "@material-ui/core";

const useButtonStyles = makeStyles(theme => ({
    primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: '3px',
        width: '160px',
        height: '56px',
        padding: '18px 53px 14px 54px',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: theme.typography.fontFamily,

        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        }
    },

    primaryLogin: {
        marginTop: '22px',
        padding: '18px 58px 14px 58px',
    },

    secondary: {
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.primary.main,
        fontSize: theme.typography.fontSize,
        width: '140px',
        height: '54px',
        backgroundColor: theme.palette.primary.contrastText,
        boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
        padding: '16px 51px 19px 52px',
        borderRadius: '5px',
        lineHeight: '19px',
    },

    secondaryLogin: {
        padding: '16px 33px 19px 34px',
        width: '170px',
        height: '54px',
    }
}));

export default useButtonStyles;