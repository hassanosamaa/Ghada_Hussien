'use client';
import { FC, useEffect } from 'react';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import { useRouter } from 'next/navigation';
import { LanguageIcon } from './icons/LanguageIcon';

interface IProps {}

const LanguageChanger: FC<IProps> = (props) => {
    const currentLocale = useCurrentLocale();
    const changeLocale = useChangeLocale();
    const t = useI18n();

    const router = useRouter();
    useEffect(() => {
        document
            .querySelector('html')
            ?.setAttribute('dir', currentLocale == 'ar' ? 'rtl' : 'ltr');
        document
            .querySelector('html')
            ?.setAttribute('lang', currentLocale || 'en');
        router.refresh();
    }, [currentLocale]);
    return (
        <button
            className={'flex items-center gap-[5px] language-changer'}
            aria-label='language-changer'
            onClick={() => {
                if (currentLocale != 'en') {
                    changeLocale('en');
                } else {
                    changeLocale('ar');
                }
            }}
        >
            <LanguageIcon
                className={
                    'fill-c_white w-[9px] md:w-[18px] h-[9px] md:h-[18px]'
                }
            />
        </button>
    );
};
export default LanguageChanger;
