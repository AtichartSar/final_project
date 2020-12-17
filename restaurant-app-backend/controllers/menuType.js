const db = require('../models/index')
const ip = require('../config/ip/ip')

const getAllmenuType = async (req, res) => {
    const allMenusType = await db.MenuType.findAll();
    if (allMenusType) {
        allMenusType.map(item => item.image = ip.getIp() + item.image)
    }
    res.status(200).send(allMenusType);
}

const createMenuType = async (req, res) => {
    const { title,group } = JSON.parse(req.body.payload)
        
        
    const image = req.file.path
    const newMenu = await db.MenuType.create({
        title: title,
        group: group,
        image: image,
    })
    res.status(201).send(newMenu)
}

module.exports = {
    getAllmenuType,
    createMenuType
}