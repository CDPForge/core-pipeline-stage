import path from 'path';
import Plugin from './Plugin';
import {ConfigReader, start} from '@cdp-forge/plugin-pipeline-sdk'
import { Sequelize } from 'sequelize-typescript';

const config = ConfigReader.generate(path.join(__dirname, '../config/config.yml'), path.join(__dirname, '../config/plugin.yml'));
const plugin = new Plugin();
const sequelize = new Sequelize(config.mysqlConfig!.uri, {models: [path.join(__dirname, './models')]});

const handleExit = async () => {
    await sequelize.close();
    console.log('Mysql disconnesso correttamente');
    process.exit(0);
};

process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);


start(plugin, config);
