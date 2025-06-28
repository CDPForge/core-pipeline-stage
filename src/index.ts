import path from 'path';
import Plugin from './Plugin';
import {ConfigReader, start} from '@cdp-forge/plugin-pipeline-sdk'

const config = ConfigReader.generate(path.join(__dirname, '../config/config.yml'), path.join(__dirname, '../config/plugin.yml'));
const plugin = new Plugin();

start(plugin, config);
