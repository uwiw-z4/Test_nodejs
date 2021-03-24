module.exports = (sequelize, Sequelize) => {
    const Shopping = sequelize.define("shopping", {
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Shopping;
  };
  