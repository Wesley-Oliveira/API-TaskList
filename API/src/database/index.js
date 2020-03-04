import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Task from '../app/models/Task';

const models = [User, Task];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.conncetion = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.conncetion))
            .map(
                model =>
                    model.associate && model.associate(this.conncetion.models)
            );
    }
}

export default new Database();
