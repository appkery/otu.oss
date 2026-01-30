'use client';

import { useState, useEffect } from 'react';
const copy = require('clipboard-copy');
//@ts-ignore
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [cookie, setCookie] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [refreshTokenCheck, setRefreshTokenCheck] = useState('');
    const [expRemain, setExpRemain] = useState('');
    const router = useRouter();

    useEffect(() => {
        setInterval(() => {
            const rawCookie = decodeURIComponent(document.cookie);
            setCookie(rawCookie);

            // 정규표현식을 사용하여 rawCookie 문자열에서 refresh_token의 값을 찾음
            const match = rawCookie.match(/"refresh_token":"([^"]+)"/);
            if (match && match[1]) {
                setRefreshToken(match[1]);
            }

            const match2 = rawCookie.match(/"access_token":"([^"]+)"/);
            if (match2 && match2[1]) {
                setAccessToken(match2[1]);
            }
        }, 1000);
    }, []);

    useEffect(() => {
        if (refreshToken) {
            fetch(`/api/refresh_token_check?token=${refreshToken}`)
                .then((res) => res.json())
                .then((data) => {
                    setRefreshTokenCheck(JSON.stringify(data.result));
                });
        }
    });

    useEffect(() => {
        const id = setInterval(() => {
            if (accessToken) {
                const at = jwt.decode(accessToken);
                const exp = at.exp;
                const currentTime = Math.floor(Date.now() / 1000);
                const timeRemaining = exp - currentTime;
                // reverse
                setExpRemain(
                    Math.ceil(timeRemaining / 60 / 60) +
                        'h, ' +
                        Math.ceil(timeRemaining / 60) +
                        'm, ' +
                        timeRemaining +
                        's'
                );
            }
        });
        return () => {
            clearInterval(id);
        };
    });

    function deleteAllCookies() {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf('=');
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        }
    }

    let accessTokenUI = null;
    if (accessToken) {
        const at = jwt.decode(accessToken);
        const atStr = JSON.stringify(at);
        accessTokenUI = (
            <>
                <h1>Access Token</h1>
                <textarea value={atStr} style={{ width: '100%', height: 150 }} readOnly />
                <a href={`https://jwt.io/#debugger-io?token=${accessToken}`} target="_blank">
                    jwt.jo
                </a>
            </>
        );
    }

    return (
        <div>
            <h1>오류가 발생했다면 아래 버튼을 눌러주세요.</h1>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <div>
                    <a
                        href="/"
                        onClick={() => {
                            copy(
                                `${accessToken}\n\n\n${refreshToken}\n\n\n${refreshTokenCheck}\n\n\n${cookie}`
                            );
                        }}
                    >
                        copy && go home
                    </a>
                </div>
                <button
                    onClick={() => {
                        deleteAllCookies();
                        router.push('/');
                    }}
                >
                    쿠키 삭제
                </button>
            </div>
            <h1>Expire</h1>
            {expRemain}
            <h1>Cookie</h1>
            <textarea value={cookie} style={{ width: '100%', height: 400 }} readOnly />
            {accessTokenUI}
            <h1>Refresh Token</h1>
            <textarea value={refreshToken} style={{ width: '100%' }} readOnly />
            <h1>Refresh Token Check</h1>
            <textarea value={refreshTokenCheck} style={{ width: '100%', height: 100 }} readOnly />
        </div>
    );
}
