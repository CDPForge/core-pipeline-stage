import type { Config } from '@cdp-forge/plugin-pipeline-sdk';

const config: Config['plugin'] = {
    name: 'core_pipeline_stage',
    priority: 0,
    type: 'blocking'
}

export default config;