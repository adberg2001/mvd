import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import "../styles/utils.scss";
import { createTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#183f5b",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
        <Component {...pageProps} />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
