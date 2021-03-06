/**
 * パフォーマンス検索サンプル
 * @ignore
 */

const moment = require('moment');
const tttsapi = require('../lib/index');

async function main() {
    const auth = new tttsapi.auth.ClientCredentials({
        domain: process.env.TEST_AUTHORIZE_SERVER_DOMAIN,
        clientId: process.env.TEST_CLIENT_ID,
        clientSecret: process.env.TEST_CLIENT_SECRET,
        scopes: [],
        state: 'teststate'
    });

    const event = new tttsapi.service.Event({
        endpoint: process.env.TEST_API_ENDPOINT,
        auth: auth
    });

    const result = await event.searchPerformances({
        start_from: moment().add(1, 'day').toDate(),
        start_through: moment().add(2, 'day').toDate()
    });
    console.log('performances found', result);
    console.log('performances found', result.data.data.length);
}

main().then(() => {
    console.log('main processed.');
}).catch((err) => {
    console.error(err);
});
