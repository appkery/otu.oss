'use client';

import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginCallback() {
    const router = useRouter();
    useEffect(() => {
        router.push('/home');
    });
    return null;
}
