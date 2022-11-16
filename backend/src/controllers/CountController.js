const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;
        const incidentCount = await connection('incidents')
            .where('ong_id', ong_id)
            .select('title')
            .count('id')
            .groupBy('title');
            

        return response.json(incidentCount);
    }
}