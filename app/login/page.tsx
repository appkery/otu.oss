'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { createClient } from '@/supabase/utils/client';
import { authLogger } from '@/debug/auth';
import { SESSION_USER_ID_FOR_CHECK_SYNC } from '@/functions/constants';
import { handleNewUserSetupAction } from './actions';

export default function Login() {
    const isDev = process.env.NODE_ENV === 'development';
    const [email, setEmail] = useState(isDev ? 'test@opentutorials.org' : '');
    const [password, setPassword] = useState(isDev ? '111111' : '');
    const searchParams = useSearchParams();
    const redirectPath = searchParams?.get('redirect');
    const router = useRouter();

    // redirect 파라미터가 있으면 로그 출력
    useEffect(() => {
        if (redirectPath) {
            authLogger('Login page received redirect parameter:', redirectPath);
        }
    }, [redirectPath]);

    const handleSignUp = async () => {
        authLogger('회원가입 시도', { email });
        const supabase = createClient();
        const { error, data } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });
        authLogger('회원가입 결과', { error, data });
        if (data.user) {
            document.cookie = `${SESSION_USER_ID_FOR_CHECK_SYNC}=${data.user.id}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

            // 신규 사용자 설정 (usage 레코드 추가 + 샘플 페이지 생성)
            await handleNewUserSetupAction(data.user.id);
        }
        await handleSignInCallback(error, data);
    };

    const handleSignIn = async () => {
        authLogger('패스워드로 로그인 시도', { email });
        const supabase = createClient();
        const { error, data } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        authLogger('패스워드로 로그인 결과', { error, data });
        if (data.user) {
            document.cookie = `${SESSION_USER_ID_FOR_CHECK_SYNC}=${data.user.id}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
        }
        await handleSignInCallback(error, data);
    };

    return (
        <div className={`flex flex-col justify-center items-center h-screen dark:text-white`}>
            <div className="flex flex-col gap-2">
                <div>
                    <div>
                        <Input
                            name="email"
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="bg-white px-2 rounded-md"
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="bg-white px-2 mt-2 rounded-md"
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div>
                        <Button onClick={handleSignUp} variant="contained">
                            Sign up
                        </Button>
                    </div>
                    <div>
                        <Button onClick={handleSignIn} variant="contained">
                            Sign in
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

    // @ts-ignore
    async function handleSignInCallback(error, data) {
        if (error) {
            authLogger('로그인 실패', { email, error });
            alert('로그인 실패 : ' + JSON.stringify(error));
        } else {
            document.cookie = `${SESSION_USER_ID_FOR_CHECK_SYNC}=${data.user.id}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
            authLogger('패스워드로 로그인 처리 완료 : ', { data });

            // redirect 파라미터가 있으면 해당 경로로, 없으면 /home으로 이동
            if (redirectPath) {
                authLogger('Redirecting to saved path after login:', redirectPath);
                router.push(redirectPath);
            } else {
                authLogger('No redirect path, navigating to home');
                router.push('/home');
            }
        }
    }
}
