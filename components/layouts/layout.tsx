import { Container, createStyles, makeStyles, Theme, Toolbar } from '@material-ui/core'
import React, { ReactElement } from 'react'
import { ReactNode } from 'react'
import Footes from './footer'
import Header from './header'
import Menu from './menu'

interface Props {
    children: ReactNode;
}
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
           
        },
    }),
);

export default function Layout({ children }: Props): ReactElement {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header />
      
            <main className={classes.content}>
                <Toolbar />
                <Container
                // maxWidth="sm" //small sizw = sm // md = medium // lg = lrage //sx == extrasmall
                >
                    {children}
                </Container>
            </main>

            <Footes style={{
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%",
                backgroundColor: "#EEEEEE",
                color: "black",
                fontSize: 13,
                textAlign: "left",
                height: 30,
                paddingLeft: 8,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontWeight: 900,
            }} />
            <style jsx global>
                {`
                    body{
                        margin: 0px;
                    }
                `}
            </style>
        </React.Fragment>
    )
}
