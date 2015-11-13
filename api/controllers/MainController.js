/*
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getName:function(req, res){
		var cnt=0;
		++cnt;
		return res.json(
			{
				RESULT:'S',
				DATA:{
					name:'test_'+(cnt),
					list:(function(){
						var arr = [];
						for( var i=0, iTotal=parseInt(Math.random()*50); i<iTotal; ++i ){
							arr.push({
								name:'list_'+(i),
								age:30+i
							});
						}
						return arr;
					})()
				}
			}
		);
	}
};

