var Sequelize = require('sequelize'); 
var sequelize=require('./ModelHead')();

var MsgModel = sequelize.define('msgs',{
	id:{type:Sequelize.BIGINT,
		primaryKey:true
	},
	sendid:Sequelize.STRING,
	toid:Sequelize.STRING,
	message:Sequelize.STRING,
	createtime:Sequelize.DATE

	},{
		timestamps: false,
		//paranoid: true  //获取不到id的返回值

});
module.exports = MsgModel;