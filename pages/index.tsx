import Head from 'next/head'
import React, { ReactElement } from 'react' //tsrfc
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

interface Props {

}
export default function index({ }: Props): ReactElement {
  return (
    <>
    </>
  )
}


// Called in server-side
index.getInitialProps = ({ res, err }) => { //destructoring
  res.writeHead(301, { Location: "/Home/main" })
  res.end();
  return {};
};
