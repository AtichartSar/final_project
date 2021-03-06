
import { Row, Col, Card } from 'antd';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import CarouselComponent from '../../CarouselComponent/CarouselComponent';
import MenuItem from '../../MenuItem/MenuItem'
import ResponseNavbar from '../../ResponseNavbar/ResponseNavbar';

import GroupFood from '../../../datajson/groupfoods.json'

import FoodsDesserts from '../../../datajson/foods_desserts.json'
import FoodsInter from '../../../datajson/foods_inter.json'
import FoodsJapanese from '../../../datajson/foods_japanese.json'
import FoodsThai from '../../../datajson/foods_thai.json'
import './Home.css'
import ModalComponent from '../../ModalComponent';
import MenuFood from './MenuFood';
import axios from '../../../config/axios'
import MenuCarousel from '../../MenuCarousel/MenuCarousel';
function Home() {

    const [groupFood, setgroupFood] = useState(null)
    const [selectGroup, setSelectGroup] = useState(null)


    const fetchGroupFood = async () => {
        try {
            const httpResponse = await axios.get('/menuType')
            setgroupFood(httpResponse.data)
        } catch (error) {
            setgroupFood(GroupFood.groupfood)
        }

    };

    useEffect(() => {
        console.log("<===[ Home ]===>");
        fetchGroupFood()
        console.log("<===[ group ]===>", groupFood);
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];

    const handleClickgroup =async (group) => {
        try {
            const httpResponse = await axios.get(`/menu/group/${group}`)
            setSelectGroup(httpResponse.data)
        } catch (error) {
            console.log("click", group);
            switch (group) {
                case 1: setSelectGroup(FoodsDesserts);
                    break;
                case 2: setSelectGroup(FoodsInter);
                    break;
                case 3: setSelectGroup(FoodsJapanese);
                    break;
                case 4: setSelectGroup(FoodsThai);
                    break;
                default:
                    break;
            }
        }
    }

    const carouselContent = selectGroup != null ? null : <CarouselComponent />
    const menuTypeFoodContent = selectGroup != null ? null :
        <div className='menuFood_component'>
            <Card id="menuFood" className="menuFood" title="เลือกประเภทอาหาร" bordered={false} cover>
                <Row gutter={[0, 40]} justify='center' style={{ marginTop: '1rem' }}>
                    {groupFood?.map(item => (
                        <Col key={item.id}

                            onClick={() => handleClickgroup(item.group)} md={24} md={8} lg={6} >
                            <MenuItem
                                href="#menuFood"
                                title={item.title}
                                description={item.description}
                                image={item.image}
                            />
                        </Col>
                    ))}
                </Row>
            </Card>
        </div>

    const menuFoodContent = selectGroup && 
    <MenuFood selectGroup={selectGroup} />

    const modalContent = selectGroup && 
    <div className="home_selectMenu">
            <Carousel breakPoints={breakPoints}>
                {groupFood.map((item)=>
                <div onClick={() => handleClickgroup(item.group)} className='menu_carousel'> 
                    <MenuItem
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                </div>
                )}
            </Carousel>
    </div>

    return (
        <div className='home'>

            <ResponseNavbar />

            <div className='home__content' >

                {modalContent}
                {carouselContent}
                {menuTypeFoodContent}
                {menuFoodContent}


            </div>

        </div>
    )
}

export default Home
