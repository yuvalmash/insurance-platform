import { useContext, useState, useEffect } from 'react';
import CurrentDataStore from '../../stores/currentDataStore';
import { useTable } from 'react-table';
import './submissions.styles.scss';
import { Btn } from '../../models/models';
import { observer } from 'mobx-react';
import UserStore from '../../stores/userStore';
import ToastUtil from '../../components/toast/toastUtil';

interface Props {
  setActivePage: (page) => void;
}

const Submissions = observer((props: Props) => {
  const currentDataStore = useContext(CurrentDataStore);
  const userStore = useContext(UserStore);

  const [currentData, setCurrentData] = useState(currentDataStore);
  const [shouldReloadList, setShouldReloadList] = useState<boolean>(false);
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState<any>([]);
  const [isData, setIsData] = useState<boolean>(false);

  const deleteSubmission = (submission) => {
    currentDataStore.deleteSubmission(submission.id);
    setShouldReloadList(!shouldReloadList);
  };

  const bindSubmission = (submission) => {
    const submissionFromCurrentList = currentDataStore.allSubmissions.filter((submissions) => submissions.id === submission.id);
    currentDataStore.setData(submissionFromCurrentList[0]);
    props.setActivePage(Btn.Bind);

    setShouldReloadList(!shouldReloadList);
  };

  const editSubmission = (submission) => {
    const submissionFromCurrentList = currentDataStore.allSubmissions.filter((submissions) => submissions.id === submission.id);
    currentDataStore.setData(submissionFromCurrentList[0]);

    props.setActivePage(Btn.Actions);
  };

  function download(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  const downloadPdf = async (submission) => {
    if (!submission.signedApplication) return ToastUtil.error('No PDF file, this submission is not bound yet');
    await fetch(
      `http://localhost:4000/getPdf?fileToDownload=${userStore.fullName + '/' + currentDataStore.id + '/' + submission.signedApplication}`
    ).then((res) => {
      res.blob().then((blob) => download(blob, submission.signedApplication));
    });
  };

  const Columns: any = [
    {
      Header: 'Id',
      accessor: 'id',
    },
    {
      Header: 'Company Name',
      accessor: 'companyName',
    },
    {
      Header: 'Address',
      accessor: 'address',
    },
    {
      Header: 'Annual Revenue',
      accessor: 'annualRevenue',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Signed Application',
      accessor: 'signedApplication',
      Cell: ({ row }) => {
        return (
          <div>
            <i
              onClick={() => {
                downloadPdf(row.original);
              }}
              className="fas fa-file-download"
              data-tip="Download"
            ></i>
          </div>
        );
      },
    },
    {
      Header: 'Submitted By',
      accessor: 'submittedBy',
    },
    {
      Header: 'Actions',
      Cell: ({ row }) => {
        return (
          <div>
            <div>
              <i
                onClick={() => {
                  editSubmission(row.original);
                }}
                className="fas fa-pen"
                data-tip="Edit"
              ></i>
              <i
                onClick={() => {
                  deleteSubmission({ ...row.original });
                }}
                data-tip="Delete"
                className="fas fa-trash-alt"
                style={{ paddingLeft: '10%' }}
              ></i>
              <i
                onClick={() => {
                  bindSubmission({ ...row.original });
                }}
                data-tip="Bind"
                className="far fa-file-pdf"
                style={{ paddingLeft: '10%' }}
              ></i>
            </div>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    const init = async () => {
      const res = await currentData.getAllSubmissions();
      if (res) {
        setColumns(Columns);
        setData(currentData.allSubmissions);
        return setIsData(true);
      } else {
        return;
      }
    };

    init();
  }, [shouldReloadList]);

  const TableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = TableInstance;
  return (
    <div>
      {!isData ? (
        <div> No submissions</div>
      ) : (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell?.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
});

export default Submissions;
