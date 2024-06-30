import Box from "@mui/material/Box";
import {Button, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../state/store";
import {attemptDispatch} from "../../state/actions/assessment/assessment.slice";

const AssessmentIndex = () => {
    const dispatch = useDispatch<AppDispatch>();
    return(
        <Box textAlign={'center'} mt={3}>
            <Typography>Hello there !</Typography>

            <Button onClick={() => dispatch(attemptDispatch())}>
                Dispatch
            </Button>
        </Box>
    )
}
export default AssessmentIndex;