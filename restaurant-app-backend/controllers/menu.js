const db = require('../models/index')
const ip = require('../config/ip/ip')


const getAllMenus = async (req, res) => {
    const allMenus = await db.Menu.findAll({ include: [db.MenuType] });
    if (allMenus) {
        allMenus.map(item => item.image = ip.getIp() + item.image)
        res.status(200).send(allMenus);
    }
}

const createMenu = async (req, res) => {

    const {  title,price, rate, description,type } = JSON.parse(req.body.payload)
    // console.log("name",title);
    const image = req.file.path
    // } catch (error) {
    //     console.log(error);
    // }
    

    // const createMenuType = await db.MenuType.create({
    //     name: name,
    // });

    const newMenu = await db.Menu.create({
        title: title,
        price: price,
        rate: rate,
        description: description,
        image: image,
        type: type,
    })
    res.status(201).send(newMenu)
    // res.status(201).send('success')
}

const getMenuById = async (req, res) => {
    const targetId = req.params.id;
    let targetMenu = await db.Menu.findAll({ where: { id: targetId } });
    targetMenu.map(item => item.image = ip.getIp() + item.image)
    
    res.status(200).send(targetMenu)
}

const getMenuByGroup = async (req,res)=>{
    const targetId =req.params.id;
    const targetMenu = await db.Menu.findAll({where:{type:targetId}})
    if (targetMenu) {
        targetMenu.map(item => item.image = ip.getIp() + item.image)
        res.status(200).send(targetMenu)
    }
    
}

const deleteMenu = async (req, res) => {
    const targetId = req.params.id
    await db.Menu.destroy({
        where: { id: targetId }
    })
    res.status(204).send();
}
const upDateMenu = async (req, res) => {
    const { name, price, rate, description } = req.body
    const targetId = req.params.id;

    console.log(`description : ${description} targetId : ${targetId}`);
    await db.Menu.update({
        title: name,
        price: price,
        rate: rate,
        description: description,
        menutype_id: 2
    }, {
        where: { id: targetId }
    })
    res.status(200).send('update sucess')
}

module.exports = {
    createMenu,
    getAllMenus,
    getMenuById,
    upDateMenu,
    deleteMenu,
    getMenuByGroup
}