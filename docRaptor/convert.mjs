'use strict';

import config from 'config';
import { createWriteStream, readFileSync } from 'fs';
import { pipeline } from 'stream/promises';
import fetch from 'node-fetch';

const content = readFileSync('./docRaptor/Page1.html', 'utf8');
const post = {
	user_credentials: config.user_credentials,
	type: 'pdf',
	test: true,
	document_content: content,
	name: 'Test of DocRaptor',
	javascript: false,
	pipeline: 9,
	prince_options: {
		baseurl: 'https://www.firefund.net',
		javascript: false,
		media: 'screen'
	}
};

convert (config.url, post, './build/DocRaptorPage1.pdf');

async function convert (url, body, output) {
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify (body),
		headers: {'Content-Type': 'application/json'}
	});

	if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

	await pipeline(response.body, createWriteStream(output));
}
