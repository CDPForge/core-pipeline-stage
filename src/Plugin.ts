import Instance from './models/instance';
import { Log, PipelinePluginI } from '@cdp-forge/plugin-pipeline-sdk';

export default class MyPlugin implements PipelinePluginI {
    async elaborate(message: Log): Promise<Log | null> {
        console.log('Elaborating message:', message);
        const instance = await Instance.findOne({ where: { id: message.instance, client: message.client, active: true } });
        if (!instance) {
            console.error('Client not found or not active');
            return null;
        }
        
        return message;
    }

    async init(): Promise<void> {
        // nothing to do
        return;
    }
}