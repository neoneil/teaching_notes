import React, { useState } from "react";
import '../Home/Home.scss'
import useTable from "./useTable";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    return (
        <>
            <table className="table">
                <thead className="tableRowHeader">
                    <tr>
                        <th className="tableRowHeader">#</th>
                        <th className="tableRowHeader">词根</th>
                        <th className="tableRowHeader">意思</th>
                        <th className="tableRowHeader">例子</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el,i) => (
                        <tr className="tableRowItems" key={el.id}>
                            <td className="tableCell">{el.id}</td>
                            <td className="tableCell">{el.root}</td>
                            <td className="tableCell">{el.meaning}</td>
                            <td className="tableCell">{el.example}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </>
    );
};

export default Table;