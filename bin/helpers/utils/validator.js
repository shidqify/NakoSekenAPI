const moment = require('moment');
const { InternalServerError } = require('../error');

module.exports.isMonthsValid = async (months) => {
    if (moment(months, 'MMMM', true).isValid()) {
        return true;
    }
    throw new InternalServerError('Invalid months format');
}