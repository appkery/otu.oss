#!/usr/bin/env node

const { spawn } = require('child_process');

// 인자 파싱
const args = process.argv.slice(2);
let debug = null;
let jestArgs = [];

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--debug' && i + 1 < args.length) {
        debug = args[i + 1];
        i++; // 다음 인자 스킵
    } else {
        jestArgs.push(args[i]);
    }
}

// DEBUG 환경변수 설정
// --debug 인자가 없으면 빈 문자열로 설정하여 모든 로그 억제
const env = { ...process.env };
if (debug !== null) {
    env.DEBUG = debug;
} else {
    // --debug 인자가 없으면 빈 문자열로 명시적 설정
    env.DEBUG = '';
}

console.log(`DEBUG environment: "${env.DEBUG}"`);

// jest 실행
// --debug 인자가 없으면 --silent 옵션 추가 (console 출력 억제)
const jestCommand = ['jest', '--runInBand'];
if (debug === null) {
    jestCommand.push('--silent');
}
jestCommand.push(...jestArgs);

const child = spawn('npx', jestCommand, {
    env,
    stdio: 'inherit',
    shell: true,
});

child.on('exit', (code) => {
    process.exit(code);
});
