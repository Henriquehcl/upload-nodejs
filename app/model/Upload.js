const { DataTypes, Model } = require('sequelize');
const db = require('../server/conn');

class Upload extends Model {}

    Upload.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true,            
        },
        type:{
            type: DataTypes.STRING,
            allowNull: true,            
        },
        path:{
            type: DataTypes.STRING,
            allowNull: true,            
        },
      },
      {
        sequelize: db,
        modelName: 'Upload',
        tableName: 'images',
      }
    );


  

module.exports = Upload;