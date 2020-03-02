import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.conncetion = new Sequelize(databaseConfig);

        models.map(model => model.init(this.conncetion));
    }
}

export default new Database();
