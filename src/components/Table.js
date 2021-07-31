import React, {useEffect, useState} from "react";
import {DataGrid} from '@material-ui/data-grid';

function Table() {
    const [users, setUsers] = useState([]);
    const wrapper = React.createRef();

    useEffect(() => {
        fetchUser().then(res =>
            setUsers(res)
        );
    }, []);

    const fetchUser = () => {
        return fetch("https://randomuser.me/api/?results=50")
            .then(res => res.json())
            .then(res => {
                return res.results
            });
    };

    const rows = () => {
        let rows = [];
        users.map((user => rows.push({id: user.login.uuid, lastName: user.name.last, firstName: user.name.first})));
        console.log(rows);
        return rows;
    };

    const columns = () =>
        [
            {
                field: 'id',
                headerName: 'ID',
                width: 250
            },
            {
                field: 'firstName',
                headerName: 'First name',
                width: 150,
                editable: true,
            },
            {
                field: 'lastName',
                headerName: 'Last name',
                width: 150,
                editable: true,
            }
        ];

    return (
        <div className="App">
            <DataGrid
                ref={wrapper}
                rows={rows()}
                columns={columns()}
                pageSize={20}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}


export default Table;
