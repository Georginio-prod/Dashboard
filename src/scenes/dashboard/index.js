import Header from "../../components/Header";
import { Box } from "@mui/material";
const dashborard = () =>{
    return(
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Bienvenue sur votre dashboard"/>
            </Box>
        </Box>
    );

};

export default dashborard;