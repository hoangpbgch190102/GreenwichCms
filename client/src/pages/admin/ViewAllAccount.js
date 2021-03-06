import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { UserContext } from '../../contexts/UserContext';
import UpdateAccount from './updateAccount';

const ViewAllAccount = () => {
    const [edit, setEdit] = React.useState(false)
    const [search, setSearch] = React.useState('');
    const { userState: { users }, getAllUsers, findUser, deleteUser } = React.useContext(UserContext);
    React.useEffect(() => getAllUsers(), [])

    const chooseUser = userId => {
        findUser(userId)
        setEdit(true)
    }

    const handelDeleteUser = userId => {
        let choice = window.confirm("Do you want to delete this account user?")
        if (choice === true) {
            deleteUser(userId)
        }
    }

    const props = { setEdit }

    return (
        <>
            {!edit
                ?
                <React.Fragment>
                    <Box sx={{ display: 'flex', alignItems: 'center', margin: '0 auto 20px' }}>
                        <TextField
                            label="Enter name of staff..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            sx={{ width: 400 }}
                        />
                        <Button >
                            <SearchIcon color="action" sx={{ fontSize: 40 }} />
                        </Button>
                    </Box>
                    <Table size="larger" sx={{ minWidth: 900 }}>
                        <TableHead >
                            <TableRow >
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Number</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>date Of Birth</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Gender</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', textAlign: 'center' }}>Role</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, index) => (
                                <TableRow key={user.userId}>
                                    <TableCell align="center">{index + 1}</TableCell>
                                    <TableCell align="center">{user.firstName} {user.lastName}</TableCell>
                                    <TableCell align="center">{user.dateOfBirth}</TableCell>
                                    <TableCell align="center">{user.gender}</TableCell>
                                    <TableCell align="center">{user.role}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            onClick={chooseUser.bind(this, user.userId)}
                                        >
                                            <EditOutlinedIcon sx={{ color: '#933fbae3' }} />
                                        </Button>
                                        <Button
                                            onClick={handelDeleteUser.bind(this, user.userId)}
                                        >
                                            <DeleteOutlineIcon sx={{ color: '#ff4b00de' }} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </React.Fragment >
                : <UpdateAccount props={props} />
            }
        </>
    );
};

export default ViewAllAccount;