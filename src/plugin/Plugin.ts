import Instance from '../models/instance';
import { UAParser } from 'ua-parser-js';
import { Event, Log } from '../types';
import { GoogleTopicsMap } from '../gTopics';

export default class MyPlugin {
    async elaborate(message: Event): Promise<Log | null> {
        console.log('Elaborating message:', message);
        const instance = await Instance.findOne({ where: { id: message.instance, client: message.client, active: true } });
        if (!instance) {
            console.error('Client not found or not active');
            return null;
        }
        const log: Log = {
            client: message.client,
            date: message.timestamp,
            instance: message.instance,
            event: message.event,
            referrer: message.referrer,
            session: message.session,
            target: message.target,
            device: {id:message.did, ip: message.ip, userAgent: message.userAgent },
            page: {title:message.pageTitle, type: message.pageType, description: message.pageDescription, image: message.pageImage, href: message.href},
            order: message.order,
            product: message.products
        }
    
        if (message.userAgent) {
            try {
                const parser = new UAParser(message.userAgent);
                log.device.browser = parser.getBrowser().name;
                log.device.os = parser.getOS().name;
                log.device.type = parser.getDevice().type || ['Windows', 'macOS', 'Linux'].includes(log.device.os!) ? 'Desktop' : undefined;
            } catch (err) {
                console.error('Error parsing user agent:', err);
            }
        }
    
        if (message.topics) {
            log.googleTopics = message.topics.map(topic => ({
                id: topic,
                name: GoogleTopicsMap[topic]
            }));
        }
        
        /*
            const lookup = maxmindReader.get(ip);
            log.geo.country = lookup?.country?.names?.en; 
            log.geo.region = lookup?.subdivisions?.[0]?.names?.en;
            log.geo.city = lookup?.city?.names?.en;
        */
        return log;
    }
}