import { makeStyles } from "@material-ui/core";

const useFormStyles = makeStyles(theme => ({
    formControl: {
        width: '100%',

        '& .MuiInputLabel-asterisk': {
            display: 'none',
        }
    },
}));

export default useFormStyles;