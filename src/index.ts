import path from 'path';
import Plugin from './Plugin';
import { start, clusterConfig } from '@cdp-forge/plugin-pipeline-sdk'
import { Sequelize } from 'sequelize-typescript';
import pluginConfig from './config/plugin'

const plugin = new Plugin();
const sequelize = new Sequelize(clusterConfig.mysql!.uri, {models: [path.join(__dirname, './models')]});

const handleExit = async () => {
    await sequelize.close();
    console.log('Mysql disconnesso correttamente');
    process.exit(0);
};

process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);

start(plugin, pluginConfig);
