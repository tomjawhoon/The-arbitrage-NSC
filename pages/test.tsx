import React, { ReactElement } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Header from '../components/layouts/header'
import Layout from '../components/layouts/layout'
import Menu from '../components/layouts/menu'
import CoinGecko from 'coingecko-api';
const coinGeckoClient = new CoinGecko();
import MaterialTable from 'material-table'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import { Theme } from '@material-ui/core';
const useStylesbuttom = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
    }),
);
const useStyles = makeStyles({
    root: {
        maxWidth: 800,
    },
    media: {
        height: 800,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
        minHeight: "50vh",
    },
    test: {
        display: "flex",
        marginLeft: "500px",
    },
    testright: {
        display: "flex",
        marginLeft: "1000px",
        marginTop: "-350px"

    }
});

const useStylesRight = makeStyles({
    root: {
        maxWidth: 350,
        marginTop: "-380px",
        marginLeft: "950px",
    },
    media: {
        height: 500,
    },
});

interface Props {
    result: { data: any; };

}
export async function getServerSideProps(context) {
    const params = {
        order: CoinGecko.ORDER.MARKET_CAP_DESC
    };
    const result = await coinGeckoClient.coins.markets({ params });
    return {
        props: {
            result
        },
    }
}
export default function Test(props: Props): ReactElement {
    const { data } = props.result;
    console.log("Show---->getAPI---->", data)
    const formatPercent = number =>
    `${new Number(number).toFixed(2)}%`

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat(
      'en-US',
      {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits
      })
      .format(number);
    const classestest = useStylesbuttom();
    const classes = useStyles();
    const classesRight = useStylesRight();
    return (
        <Layout>
            <div className={classes.container} >

                <Card className={classes.root}>
                    <div className={classes.test}>
                        Balance:
                     <input type="text" name="name" />
                    </div>

                    <form>
                        <label>
                            Token:
                     <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <br></br>
                    <input type="text" name="name" placeholder="Enter coin" />
                    <>___________________________________________________________________________________________________________</>
                    <br></br>
                    <form>
                        <label>
                            Token:
                     <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <br></br>
                    <input type="text" name="name" placeholder="Enter coin" />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classestest.button}
                    //endIcon={<Icon>send</Icon>}
                    >
                        Exchang Token
                        </Button>
                </Card>
            </div>

            <MaterialTable
                columns={[
                    { title: "Symbol", field: 'image' },
                    { title: "Name", field: 'name' },
                    { title: "24H Change", field: 'price24' },
                    { title: "	Price ($)", field: 'current_price' },
                    { title: "	Market cap ($)", field: 'market_cap' },
                ]}
                data={
                    data.map((coin) => (
                        {
                            image: <img src={coin.image} style={{ width: 25, height: 25, marginRight: 10 }}/>,
                            name: coin.symbol.toUpperCase(),
                            price24: formatPercent(coin.price_change_percentage_24h),
                            current_price: coin.current_price,
                            market_cap: coin.market_cap,
                        }
                    ))}
                //{ image: "test", price24: "test", Price: "test", Marketcap: "test" },
                title="Coinmarketcap" />

        </Layout>
    )
}
