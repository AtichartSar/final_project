import { Card } from 'antd'
import React from 'react'

function CardComponent({title,label}) {
    return (
        <Card id="dashbord" className="dashbord" title={title} bordered={true} style={{background:'#A6F6F1'}} cover>
            {label}
        </Card>
    )
}

export default CardComponent

