const { Report } = require('./report.model');


const options = {
	listProperties: ['postName', 'reportType','reportDescription','createdAt'],
	properties:{
		postId:{
			isVisible: {
            	edit: false,
            	show: true,
            list: false,
            filter: true,
          },
		},
		postName:{
			isVisible: {
            	edit: false,
            	show: true,
	            list: false,
    	        filter: true,
          },
			
		},
		reportDescription:{
			isVisible: {
            	edit: false,
            	show: true,
				list: false,
				filter: true,
          },

		},
		reportType:	
			{
			isVisible: {
            	edit: false,
            	show: true,
				list: false,
				filter: true,
          },
		},
		createdAt:{
			isVisible:false
		},
		updatedAt:{
			isVisible:false
		}
	}
};

module.exports = {
  options,
  resource: Report,
};
