const AdminBro = require('admin-bro');
const { Internship } = require('./internship.model');


const options = {
	listProperties: ['intTitle', 'companyName', 'intLocation','intType','createdAt'],
	properties:{
		isDeleted:{
			isVisible:false
		},
		createdAt:{
			isVisible:false
		},
		updatedAt:{
			isVisible:false
		},
		deletedAt:{
			isVisible:false
		},
		intLocation:{
			type:'string',
			  availableValues: [
					{ value: 'remote', label: 'Remote' },
					{ value: 'office', label: 'Office' },
				],
				availableTitles: [
					'Remote',
					'Office'
				],
		},
		intStatus:{
			type:'string',
			  availableValues: [
					{ value: 'Open', label: 'Open' },
					{ value: 'closed', label: 'Closed' }
				],
				availableTitles: [
					'Open',
					'Closed'
				],
		},
		intType:{
			type:'string',
			  availableValues: [
					{ value: 'paid', label: 'Paid' },
					{ value: 'unpaid', label: 'Unpaid' }
				],
				availableTitles: [
					'Paid',
					'Unpaid'
				],
		}


	}
};

module.exports = {
  options,
  resource: Internship,
};
