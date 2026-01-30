'use client';

import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Error() {
    const t = useTranslations('fallback');
    const searchParams = useSearchParams();
    const message = searchParams?.get('message');
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <h2 className="dark:text-white">
                {t.rich('offline-message', {
                    br: () => <br />,
                })}
            </h2>
            <h2 className="dark:text-white">{message}</h2>
        </div>
    );
}
