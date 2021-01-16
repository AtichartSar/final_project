import { Button, Card, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import ResponseNavbar from '../../ResponseNavbar/ResponseNavbar'
import CardComponent from './CardComponent'
import ChartComponent from './ChartComponent'
import './Dashbord.css'

import axios from '../../../config/axios'

function Dashbord() {
    const history = useHistory();
    // const [menu, setMenu] = useState(null)
    // const [income, setIncome] = useState(null)
    // const [customer, setCustomer] = useState(null)
    // const [chart, setChart] = useState(null)
    const [chartData, setChartData] = useState({})
    const [dataDashbord, setDataDashbord] = useState({ customer: 0, income: 0, menu: 0 })
    const fetchDashbord = async () => {
        const httpresponse = await axios.get('/invoice')
        const { chart, invoice: { customer, income, menu } } = httpresponse.data
        setDataDashbord({
            customer: customer,
            income: income,
            menu: menu
        })
        // setChart(chart)
        // setCustomer(customer)
        // setIncome(income)
        // setMenu(menu)
        console.log("data", httpresponse.data);
        console.log("data", chart);
        if (chart) {
            console.log("chartData",chart);
            console.log("...chart?.map((item) => item.total_amount)",...chart?.map((item) => item.total_amount));
            setChartData({
                labels: [...chart?.map((item) => item.date_col_formed).reverse()],
                datasets: [{
                    label: 'กราฟรายงานการขาย',
                    data: [...chart?.map((item) => item.total_amount).reverse()],
                    backgroundColor: 'rgba(75,192,192,0.6)',
                    borderWidth: 4
                }]
            })
        }

    }


    useEffect(() => {
        fetchDashbord()

    }, [])
    return (
        <div className='dashbord'>
            <ResponseNavbar />
            <div className='dashbord__content'>
                <Card id="dashbord" className="dashbord" title="รายงานการขาย" bordered={false} cover>
                    <Row gutter={[0, 40]} justify='center' style={{ marginTop: '1rem' }}>
                        <Col md={24} md={8} lg={12}>
                            <div className='dashbord__detail'>
                                <CardComponent label={dataDashbord.customer} title='ลูกค้า' />
                                <CardComponent label={dataDashbord.income} title='รายได้' />
                                <CardComponent label={dataDashbord.menu} title='ออเดอร์' />
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[0, 40]} justify='center' style={{ marginTop: '1rem' }}>
                        <Col md={24} md={8} lg={12}>
                            <div className='dashbord__chart'>
                                <ChartComponent chartData={chartData} />
                            </div>
                        </Col>
                    </Row>
                    <div className="button_content">
                        <Button onClick={() => (history.push('/home'))} className='cancelButton' type="primary" size={'large'}>  กลับ</Button>
                    </div>
                </Card>
            </div>

        </div>
    )
}

export default Dashbord
