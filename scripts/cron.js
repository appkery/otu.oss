#!/usr/bin/env node

// .env 파일에서 환경변수 로드
require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
    throw new Error('This script is only available in development mode');
}

// 호스트 URL (기본값은 localhost:3000)
const host = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000';
const path = process.argv[2];

if (!path) {
    console.error('사용법: node scripts/cron.js <path>');
    process.exit(1);
}

const url = `${host}${path}`;
console.log(`API 호출: ${url}`);

const fetch = require('node-fetch');
fetch(url)
    .then((response) => {
        console.log(`상태: ${response.status} ${response.statusText}`);
        return response.text();
    })
    .then((text) => {
        console.log('응답:', text);
    })
    .catch((error) => {
        console.error('오류:', error.message);
    });
