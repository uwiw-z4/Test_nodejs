const db = require("../models");
const Shopping = db.shopping;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }

    const Shopping = {
      name: req.body.name,
    };
  

    Shopping.create(Shopping)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Shopping."
        });
      });
  };


exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Shopping.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Shoppings."
        });
      });
  };


exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Shopping.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Shopping with id=" + id
        });
      });
  };


exports.update = (req, res) => {
    const id = req.params.id;
  
    Shopping.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Shopping was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Shopping with id=${id}. Maybe Shopping was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Shopping with id=" + id
        });
      });
  };

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Shopping.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Shopping was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Shopping with id=${id}. Maybe Shopping was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Shopping with id=" + id
        });
      });
  };

exports.deleteAll = (req, res) => {
    Shopping.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Shoppings were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Shoppings."
        });
      });
  };


exports.findAllPublished = (req, res) => {
    Shopping.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Shoppings."
        });
      });
  };