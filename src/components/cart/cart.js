import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {connect} from "react-redux";
import {useEffect} from "react";
import {fetchBooks} from "../../actions";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";
import Button from "@mui/material/Button";
import {ButtonGroup} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function createData({title, author, price}) {
    return {
        title,
        author,
        price,

        history: [
            {
                date: new Date().toLocaleDateString(),
                customerId: "" + Math.random()*10e16,
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}

const rows = (items) => {
    return items.map((book) => createData(book));
}

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

const subtotal = (items) => {console.log(items)
    return items.map(({price}) => price).reduce((sum, i) => sum + i, 0);
}

function Cart({cartItems, loading, error, orderTotal, onIncrease, onDecrease, onDelete }) {

    function Row({props}) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        const buttons = [
            <Button onClick={() => onIncrease} key="one">+</Button>,
            <Button onClick={() => onDecrease} key="two">-</Button>,
            <Button onClick={() => onDelete} key="three"> <DeleteIcon /> </Button>,
        ];

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.title}
                    </TableCell>
                    <TableCell align="left">{row.author}</TableCell>
                    <TableCell align="left">{row.quantity}</TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align='right'>
                        <ButtonGroup color="secondary" size="small" aria-label="medium secondary button group">
                            {buttons}
                        </ButtonGroup>

                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    History
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Customer</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">Total price ($)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.history.map((historyRow) => (
                                            <TableRow key={historyRow.date}>
                                                <TableCell component="th" scope="row">
                                                    {historyRow.date}
                                                </TableCell>
                                                <TableCell>{historyRow.customerId}</TableCell>
                                                <TableCell align="right">{historyRow.amount}</TableCell>
                                                <TableCell align="right">
                                                    {Math.round(historyRow.amount * row.price * 100) / 100}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

    Row.propTypes = {
        row: PropTypes.shape({
            history: PropTypes.arrayOf(
                PropTypes.shape({
                    amount: PropTypes.number.isRequired,
                    customerId: PropTypes.string.isRequired,
                    date: PropTypes.string.isRequired,
                }),
            ).isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired,
    };

    const _rows = rows(cartItems).map((row) => (
        <Row key={row.title} row={row} />
    ))
    const invoiceSubtotal = subtotal(_rows);

    useEffect(() => {

    }, [fetchBooks]);

    if (error) {
        return <ErrorIndicator />
    }

    if (loading) {
        return <Spinner />
    }

    if (cartItems) {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Book</TableCell>
                            <TableCell align="right">Author</TableCell>
                            <TableCell align='right'>Quantity</TableCell>
                            <TableCell align="right">Price&nbsp;($)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {_rows}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{orderTotal}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

}

const mapStateToProps = ({cartItems, orderTotal, loading, error}) => {
    return {cartItems, loading, error, orderTotal}
}
const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`increase${id}`)
        },
        onDecrease: (id) => {
             console.log(`decrease${id}`)
        },
        onDelete: (id) => {
            console.log(`delete${id}`)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
