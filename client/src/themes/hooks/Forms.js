import { makeStyles } from "@material-ui/core";

const useFormStyles = makeStyles(theme => ({
    formControl: {
        width: '100%',
        
        '& .MuiInputLabel-shrink': {
            [theme.breakpoints.up('xs')]: {
                transform: 'translate(0, 0) scale(1)',
            },
            transformOrigin: 'top left'
        },
        
        '& .MuiFormLabel-root': {
            color: theme.palette.secondary.main,
            fontSize: '14px',
            [theme.breakpoints.up('sm')]: {
                transform: 'translate(0, 38px) scale(1)',
            },
        },

        '& .MuiInputLabel-asterisk': {
            display: 'none',
        },

        '& .MuiInput-input': {
            [theme.breakpoints.up('sm')]: {
                paddingTop: '20px',
            },
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '19px',
        },

        '& .MuiInput-underline:before': {
            borderBottomColor: theme.palette.secondary.main,
        }
    },
}));

export default useFormStyles;