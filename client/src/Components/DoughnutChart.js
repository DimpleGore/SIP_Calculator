import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Legend
} from 'chart.js'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

ChartJS.register(
  ArcElement,
  Legend
)

function DoughnutChart(props) {
  const { sip } = props;


  var s1 = sip && sip.invested_amount.toString().replace(/\,/g, '');
  var s2 = sip && sip.estimated_return.toString().replace(/\,/g, '');;


  const state = {
    labels: ['Invested Amount', 'Est. returns'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#a3a7c1',
          '#5367ff',
        ],

        borderWidth: 0,
        data: [s1, s2]
      }
    ]
  }





  return (
    <div>
      <div>
        <Table>
          <TableBody>

            <TableRow key={1}>
              <TableCell component="th" scope="row">
                Invested Amount
              </TableCell>
              <TableCell align="right">{sip.invested_amount}</TableCell>
            </TableRow>

            <TableRow key={2}>
              <TableCell component="th" scope="row">
                Est. returns
              </TableCell>
              <TableCell align="right">{sip.estimated_return}</TableCell>
            </TableRow>

            <TableRow key={3}>
              <TableCell component="th" scope="row">
                Total Value
              </TableCell>
              <TableCell align="right">{sip.total_value}</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </div>
      <div style={{ width: '60%', height: '30%', margin: 'auto' }}>
        <Doughnut data={state} options={{
          responsive: true,
          maintainAspectRatio: true
        }} />
      </div>
    </div>

  )
}

export default DoughnutChart
