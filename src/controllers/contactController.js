const contactModel = require('../models/contactModel')
const contact = new contactModel()

exports.save = ((req, resp) => {
  var result = contact.Save(req.body.name, req.body.email)
  resp.render("homeView",{ saved: true })
})

exports.get = ((req, resp) => {
    resp.render("homeView",{ saved: false })
})

exports.delete = ((req, resp) => {
    let {id} = req.params;
    contact.Delete(id)
    let result = contact.GetAll()
    resp.render("contactList",{ contacts: result })
})

exports.getQty = ((req, resp) => {
    var result = contact.Count()
    resp.send(result)
})

exports.getAll = ((req, resp) => {
    var result = contact.GetAll()
    resp.render("contactList",{ contacts: result })
})