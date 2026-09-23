import { useEffect, useState } from 'react';
import PhoneIcon from '../../Assets/images/icons/phone-icon.png';
import QuestionIcon from '../../Assets/images/icons/question-mark-icon.png';
import PaymentIcon from '../../Assets/images/icons/payment-icon.png';
import VisaIcon from '../../Assets/images/icons/visa-icon.png';
import MasterCardIcon from '../../Assets/images/icons/mastercard-icon.jpeg';
import InstagramIcon from '../../Assets/images/icons/instagram-black-icon.png';
import TikTokIcon from '../../Assets/images/icons/tiktok-black-icon.png';
import TwitterIcon from '../../Assets/images/icons/twitter-black-icon.png';
import FacebookIcon from '../../Assets/images/icons/facebook-black-icon.png';
import PinterestIcon from '../../Assets/images/icons/pinterest-black-icon.png';
import LaPosteIcon from '../../Assets/images/icons/La-Poste-icon.png';
import DHLIcon from '../../Assets/images/icons/dhl-icon.png';

const translations = {
    fr: {
        about: 'À propos de KICK & COP',
        description: 'KICK & COP est votre destination incontournable pour trouver des chaussures élégantes, confortables et adaptées à toutes les occasions.',
        contact: 'Nous contacter',
        email: 'Adresse e-mail',
        payment: 'Nos moyens de paiement',
        social: 'Nos réseaux sociaux',
        legal: 'Mentions légales',
        policy: 'Politique de confidentialité',
        cgu: 'CGU',
        cgv: 'CGV',
    },
    en: {
        about: 'About KICK & COP',
        description: 'KICK & COP is your go-to destination for elegant, comfortable shoes suitable for every occasion.',
        contact: 'Contact us',
        email: 'Email address',
        payment: 'Payment methods',
        social: 'Our social networks',
        legal: 'Legal notice',
        policy: 'Privacy policy',
        cgu: 'General terms of use',
        cgv: 'General terms of sale',
    },
    es: {
        about: 'Sobre KICK & COP',
        description: 'KICK & COP es tu destino ideal para encontrar zapatos elegantes, cómodos y adecuados para cualquier ocasión.',
        contact: 'Contáctanos',
        email: 'Correo electrónico',
        payment: 'Métodos de pago',
        social: 'Nuestras redes sociales',
        legal: 'Aviso legal',
        policy: 'Política de privacidad',
        cgu: 'Términos generales de uso',
        cgv: 'Términos generales de venta',
    },
    it: {
        about: 'Informazioni su KICK & COP',
        description: 'KICK & COP è la tua destinazione per trovare scarpe eleganti, comode e adatte a ogni occasione.',
        contact: 'Contattaci',
        email: 'Indirizzo e-mail',
        payment: 'Metodi di pagamento',
        social: 'I nostri social network',
        legal: 'Note legali',
        policy: 'Politica di confidentialità',
        cgu: 'Condizioni generali d\'utilizzo',
        cgv: 'Condizioni generali di vendita',
    },
    de: {
        about: 'Über KICK & COP',
        description: 'KICK & COP ist dein Ziel für elegante, bequeme Schuhe, die zu jedem Anlass passen.',
        contact: 'Kontaktieren Sie uns',
        email: 'E-Mail-Adresse',
        payment: 'Zahlungsmethoden',
        social: 'Unsere sozialen Netzwerke',
        legal: 'Impressum',
        policy: 'Datenschutzrichtlinie',
        cgu: 'Allgemeine Nutzungsbedingungen',
        cgv: 'Allgemeine Verkaufsbedingungen',
    },
    ar: {
        about: 'حول KICK & COP',
        description: 'KICK & COP هو وجهتك للعثور على أحذية أنيقة ومريحة ومناسبة لجميع المناسبات.',
        contact: 'اتصل بنا',
        email: 'البريد الإلكتروني',
        payment: 'طرق الدفع',
        social: 'شبكاتنا الاجتماعية',
        legal: 'إشعار قانوني',
        policy: 'سياسة الخصوصية',
        cgu: 'الشروط العامة للاستخدام',
        cgv: 'الشروط العامة للبيع',
    },
    zh: {
        about: '关于 KICK & COP',
        description: 'KICK & COP 是您寻找适合各种场合的时尚、舒适鞋子的理想之选。',
        contact: '联系我们',
        email: '电子邮箱',
        payment: '支付方式',
        social: '我们的社交网络',
        legal: '法律声明',
        policy: '隐私政策',
        cgu: '使用条款',
        cgv: '销售条款',
    },
};

const languageOptions = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'it', label: 'IT' },
    { code: 'de', label: 'DE' },
    { code: 'ar', label: 'AR' },
    { code: 'zh', label: '中文' },
];

const paymentMethods = [
    { src: VisaIcon, alt: 'Visa' },
    { src: MasterCardIcon, alt: 'MasterCard' },
];

const socialLinks = [
    { href: 'https://www.instagram.com', icon: InstagramIcon, alt: 'Instagram' },
    { href: 'https://www.tiktok.com', icon: TikTokIcon, alt: 'TikTok' },
    { href: 'https://www.twitter.com', icon: TwitterIcon, alt: 'Twitter' },
    { href: 'https://www.facebook.com', icon: FacebookIcon, alt: 'Facebook' },
    { href: 'https://www.pinterest.com', icon: PinterestIcon, alt: 'Pinterest' },
];

const legalLinks = (t) => [t.legal, t.policy, t.cgu, t.cgv];

function Footer() {
    const [language, setLanguage] = useState('fr');
    const t = translations[language];
    const isArabic = language === 'ar';

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    }, [language, isArabic]);

    const renderBrandName = () =>
        t.about.split(' & ').map((part, index) => (
            <span key={`${part}-${index}`}>
                {index > 0 && <span className="footer-brand-accent"> &amp; </span>}
                {part}
            </span>
        ));

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <img src={QuestionIcon} alt="Question Icon" className="question-icon" />
                    <h3>{renderBrandName()}</h3>
                    <p>{t.description}</p>
                </div>

                <div className="footer-column">
                    <img src={PhoneIcon} alt="Phone Icon" className="phone-icon" />
                    <h3>{t.contact}</h3>
                    <p>
                        {t.email}:{' '}
                        <a href="mailto:KICK&COP@GMAIL.COM">KICK&COP@GMAIL.COM</a>
                    </p>
                </div>

                <div className="footer-column">
                    <img src={PaymentIcon} alt="Payment Icon" className="payment-icon" />
                    <h3>{t.payment}</h3>
                    <div className="payment-icons">
                        {paymentMethods.map(({ src, alt }) => (
                            <img key={alt} src={src} alt={alt} className="payment-icon" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-container">
                <div className="footer-column">
                    <h3>{t.social}</h3>
                    <div className="social-icons">
                        {socialLinks.map(({ href, icon, alt }) => (
                            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                                <img src={icon} alt={alt} className="social-icon" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-column">
                    <h3>{t.carriers}</h3>
                    <img src={LaPosteIcon} alt="La Poste Logo" className="la-poste-logo" />
                    <img src={DHLIcon} alt="DHL Logo" className="dhl-logo" />
                </div>
            </div>

            <div className="footer-column">
                <p>{legalLinks(t).join(' | ')}</p>
            </div>

            <div className="footer-language" aria-label="Choisir la langue">
                {languageOptions.map(({ code, label }) => (
                    <button
                        type="button"
                        key={code}
                        className={language === code ? 'language-button active' : 'language-button'}
                        aria-pressed={language === code}
                        onClick={() => setLanguage(code)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </footer>
    );
}

export default Footer;