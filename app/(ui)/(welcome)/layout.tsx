'use client';

import { ReactNode } from 'react';
import Logo from '@/public/icon/logo_otu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="welcome-container min-h-screen flex flex-col">
            <div className="main flex-grow flex justify-center">
                <div className="max-w-[700px] w-full px-10 content-area">
                    <Header />
                    {children}
                </div>
            </div>
            <div className="footer flex justify-center py-10 bg-text-color dark:bg-[#1e1e1e] mt-[120px] text-[#949494]">
                <div
                    className="max-w-[700px] w-full px-10"
                    style={{
                        marginBottom:
                            'calc(var(--native-bottom-inset, env(safe-area-inset-bottom)))',
                    }}
                >
                    <Footer />
                </div>
            </div>
        </div>
    );
}

function Header() {
    const t = useTranslations();
    const pathname = usePathname();

    const handleBackClick = () => {
        if (window.history.length > 2) {
            window.history.back();
        } else {
            window.location.href = '/welcome';
        }
    };

    return (
        <div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    marginTop: '43px',
                }}
            >
                <div>
                    {typeof window !== 'undefined' && !location.href.includes('/welcome') && (
                        <button onClick={handleBackClick} className="text-[15px]">
                            {t('navigation.back')}
                        </button>
                    )}
                </div>
                <div></div>
                <div>{/* 로그인 링크 제거 */}</div>
            </div>

            <div className="mt-[70px] flex justify-center">
                <Link href="/">
                    <Logo width="80" height="39" className="fill-text-color"></Logo>
                </Link>
            </div>
        </div>
    );
}

function Footer() {
    const t = useTranslations();

    return (
        <>
            <div className="text-[13px]">
                <div>{t('home.footer.organization')}</div>
                <div>{t('home.footer.org-number')}</div>
                <div>{t('home.footer.address')}</div>
                <div className="text-white">
                    <Link href="/consent#terms-of-service">
                        {t('agreement-form.terms-of-service')}
                    </Link>
                    <span> | </span>
                    <Link href="/consent#privacy-policy">{t('agreement-form.privacy-policy')}</Link>
                </div>
            </div>
        </>
    );
}
