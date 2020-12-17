import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Input, Progress, Rate, Row } from 'antd'
import MenuItem from '../../MenuItem/MenuItem'
import ResponseNavbar from '../../ResponseNavbar/ResponseNavbar'
import './Review.css'
import { useHistory, useLocation } from "react-router-dom";
import FoodsJapanese from '../../../datajson/foods_desserts.json'
import Progressbar from './Progressbar'
import ComentReview from './ComentReview'
import axios from '../../../config/axios'

function Review() {
    const location = useLocation();
    const [dataReviews, setDataReviews] = useState(null)
    const [dataMenu, setDataMenu] = useState(null)
    const history = useHistory()


    const fetchReview = () => {
        axios.get(`/review/${location.state.detail}`).then(function (response) {
            setDataReviews(response.data)
            console.log("data", response.data);
            console.log("data", dataReviews);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const fetchMenuById = async () => {
        const httpResponse = await axios.get(`/menu/${location.state.detail}`)
        setDataMenu(httpResponse.data[0])
        console.log("fetchmenubyid", dataMenu);
    }

    const addReview = async (description, rate) => {
        const payload = {
            description: description,
            rate: rate,
            menu_id: location.state.detail

        }
        console.log("payload", payload);
        await axios.post(`/review/`, { ...payload })
        fetchReview()
    }

    useEffect(() => {
        try {
           
            fetchMenuById()
            fetchReview()
            console.log("search", location.search); // result: '?query=abc'
            console.log("detail", location.state.detail); // result: 'some_value'  
        } catch (error) {
            setDataMenu(FoodsJapanese[0])
            console.log("pathname", location.pathname); // result: '/secondpage'
            console.log("search", location.search); // result: '?query=abc'
            console.log("detail", location.state.detail); // result: 'some_value'  
        }
    }, [])


    return (
        <div className='review'>
            <ResponseNavbar />
            <div className='review__content'>
                <Card id="review" className="review" title="หน้ารีวิว" bordered={false} cover>
                    <Row gutter={[0, 40]} justify='space-around' style={{ marginTop: '1rem' }}>
                        <Col md={24} lg={8} >

                            <MenuItem
                                title={dataMenu?.title}
                                description={dataMenu?.description}
                                image={dataMenu?.image}
                                price={dataMenu?.price}
                                rate={dataMenu?.rate}
                                id={dataMenu?.id}

                            />
                        </Col>
                        <Col md={24} lg={16} >
                            <div className="progressbar_content">
                                <Progressbar label={5} percent={dataReviews?.rate5 != null ? dataReviews.rate5.toFixed(2) : 0} />
                                <Progressbar label={4} percent={dataReviews?.rate4 != null ? dataReviews.rate4.toFixed(2) : 0} />
                                <Progressbar label={3} percent={dataReviews?.rate3 != null ? dataReviews.rate3.toFixed(2) : 0} />
                                <Progressbar label={2} percent={dataReviews?.rate2 != null ? dataReviews.rate2.toFixed(2) : 0} />
                                <Progressbar label={1} percent={dataReviews?.rate1 != null ? dataReviews.rate1.toFixed(2) : 0} />
                            </div>

                            <ComentReview addReview={addReview} dataReviews={dataReviews?.review} />

                        </Col>
                    </Row>
                    <div className="button_content">
                        {/* <Button className='submitButton' type="primary" size={'large'}>  ยืนยัน</Button> */}
                        <Button onClick={() => (history.push('/home'))} className='cancelButton' type="primary" size={'large'}>  กลับ</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Review
