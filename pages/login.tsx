import React, { ReactElement } from "react";
import loginStyle from "../styles/login.style";
import loginCSS from "../public/static/css/login.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import index from "./home";
import Router from "next/router"
interface Props { }

//const useTest = makeStyles(loginStyle);

const useStyles = makeStyles((theme) => ({ //theme เปรียบเสมือน GLOBAL ส่งผลทั้งหมดเปลี่ยนที่เดียว
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 150,
    },
    submit: {
        margin: theme.spacing(3, 0, 2), //theme *8 = 24,0,16
    },
}));

const onclickLogin = () => { //arrow function
    Router.push("/stock")
}


export default function Login({ }: Props): ReactElement {
    const classes = useStyles();

    // const TestJsx = useTest();


    return (
        <React.Fragment>
            {/*<div className={TestJsx.subtitle}>
                <h1>EIEI</h1>
    </div>*/}
            <div className={classes.container}>
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image="/static/img/userlogin.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <form noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={onclickLogin}
                            >
                                Sign In
              </Button>
                            <Button fullWidth size="small" color="primary"
                                onClick={() => {
                                    Router.push("/register")
                                }}
                            >
                                Register
              </Button>
                        </form>
                    </CardContent>
                </Card>

                <style jsx global>
                    {`
            body {
              min-height: 100vh;
              position: relative;
              margin: 0;
              background-size: cover;
              background-image: url("/static/img/bg4.jpg");
              text-align: center;
            }
          `}
                </style>
            </div>
        </React.Fragment>
    );
}


