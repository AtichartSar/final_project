const db = require('../models/index')
const { QueryTypes } = require('sequelize');
const sequelize = require('sequelize');

const getAllInvoice = async (req, res) => {

    // const allMenus = await db.Invoice.findAll();
    // const target=await db.sequelize.query("select * from Invoice",{ type: QueryTypes.SELECT })
    try {
        const target=await db.sequelize.query(" SELECT sum(`price`) AS `total_amount`, date_format(`createdAt`, '%Y-%m-%d') AS `date_col_formed` FROM `invoice` AS `Invoice` GROUP BY date_format(`createdAt`, '%Y-%m-%d') ORDER BY date_col_formed;",{ type: QueryTypes.SELECT })
        // const target = await db.Invoice.findAll(
        //     {
        //         attributes: [
        //             [sequelize.fn('sum', sequelize.col('price')), 'total_amount'],
        //             [sequelize.fn('date_format', sequelize.col('createdAt'), '%Y-%m-%d'), 'date_col_formed']
        //         ],
        //         group: [sequelize.fn('date_format', sequelize.col('createdAt'), '%Y-%m-%d'), 'date_col_formed'],
              
        //     }
        // )

        const allMenus = await db.Invoice.findAll();
        const customer = allMenus.length
        const income = allMenus.reduce((value, current) => value + current.price, 0)
        const menu = allMenus.reduce((value, current) => value + current.count, 0)

        const payload = {
            chart: target,
            invoice: {
                customer,
                income,
                menu
            }
        }

        res.status(200).send(payload);
    } catch (error) {
        console.log(error);
    }
}
const getInvoiceById = async (req, res) => {
    const targetId = req.params.id
    const targetInvoice = await db.Invoice.findOne({ where: { id: targetId }, include: [db.Order] });
    res.status(200).send(targetInvoice);

}
const createInvoice = async (req, res) => {
    console.log(req.body.items);
    const { items } = req.body
    try {
        items.map(async (item) => {
            await db.Invoice.create({
                title: item.title,
                price: item.price,
                count: item.count
            })
        })

    } catch (error) {
        console.log(error);
    }

    // try {
    //     items.map(async (item) => {
    //         console.log(item.MenuType.name);
    //         await db.Order.create({
    //             name: item.name,
    //             type_name: item.MenuType.name,
    //             price: item.price,
    //             invoice_id: newInvoice.id
    //         })
    //     })
    // } catch (error) {
    //     console.log(error);
    // }
    res.status(201).send('save')
}
module.exports = {
    getAllInvoice,
    getInvoiceById,
    createInvoice
}

