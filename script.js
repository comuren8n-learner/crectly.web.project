// Translations Dictionary
const translations = {
    id: {
        home: 'Home',
        about: 'Tentang',
        services: 'Layanan',
        contact: 'Hubungi',
        heroTitle: 'Transformasi Digital Dimulai di Sini',
        heroDesc: 'Solusi teknologi inovatif untuk membawa bisnis Anda ke level selanjutnya dengan kecepatan dan keamanan terjamin',
        contactBtn: 'Hubungi Kami',
        learnBtn: 'Pelajari Lebih Lanjut',
        aboutTitle: 'Tentang Crectly',
        aboutH3: 'Partner Digital Terpercaya Anda',
        aboutP1: 'Crectly adalah anak perusahaan dari Comure Group yang didirikan dengan visi membawa transformasi digital kepada bisnis di seluruh Indonesia. Kami memahami tantangan yang dihadapi perusahaan modern dalam era digitalisasi.',
        aboutP2: 'Dengan tim profesional berpengalaman lebih dari 10 tahun di industri teknologi, kami berkomitmen memberikan solusi custom yang tepat sasaran sesuai kebutuhan unik setiap klien kami.',
        feature1: 'Tim ahli dengan pengalaman 10+ tahun',
        feature2: 'Teknologi terdepan dan terpercaya',
        feature3: 'Dukungan 24/7 untuk semua klien',
        feature4: 'Solusi custom sesuai kebutuhan bisnis',
        servicesTitle: 'Layanan Kami',
        servicesSubtitle: 'Solusi lengkap dan terpadu untuk semua kebutuhan digital transformasi bisnis Anda',
        webDev: 'Web Development',
        webDesc: 'Aplikasi web responsif dan modern dengan teknologi terkini, performa tinggi, dan desain user-friendly',
        mobileApp: 'Mobile App Development',
        mobileDesc: 'Aplikasi mobile native untuk iOS dan Android dengan user experience yang intuitif dan menarik',
        cloud: 'Cloud Solutions',
        cloudDesc: 'Infrastruktur cloud yang scalable, aman, dan cost-effective untuk mendukung pertumbuhan bisnis',
        security: 'Cybersecurity',
        securityDesc: 'Keamanan data tingkat enterprise dengan enkripsi end-to-end dan compliance standar internasional',
        analytics: 'Data Analytics',
        analyticsDesc: 'Analisis data mendalam untuk mengoptimalkan keputusan bisnis dan meningkatkan ROI',
        ai: 'AI & Automation',
        aiDesc: 'Solusi kecerdasan buatan untuk otomasi proses dan peningkatan efisiensi operasional',
        contactTitle: 'Hubungi Kami',
        contactSubtitle: 'Ada pertanyaan atau ingin memulai project? Tim kami siap membantu Anda 24/7',
        fullName: 'Nama Lengkap',
        email: 'Alamat Email',
        message: 'Pesan Anda',
        sendBtn: 'Kirim Pesan',
        errorEmpty: '⚠️ Semua field harus diisi!',
        errorEmail: '⚠️ Format email tidak valid!',
        successMsg: '✓ Terima kasih! Pesan Anda telah dikirim. Tim kami akan menghubungi Anda dalam waktu 24 jam.',
        copyright: '© 2025 Crectly. A Comure Group Company. All rights reserved.',
        privacyPolicy: 'Privacy Policy'
    },
    en: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        contact: 'Contact',
        heroTitle: 'Digital Transformation Starts Here',
        heroDesc: 'Innovative technology solutions to take your business to the next level with guaranteed speed and security',
        contactBtn: 'Contact Us',
        learnBtn: 'Learn More',
        aboutTitle: 'About Crectly',
        aboutH3: 'Your Trusted Digital Partner',
        aboutP1: 'Crectly is a subsidiary of Comure Group founded with the vision to bring digital transformation to businesses throughout Indonesia. We understand the challenges faced by modern companies in the digital era.',
        aboutP2: 'With a professional team with more than 10 years of experience in the technology industry, we are committed to providing custom solutions that precisely meet the unique needs of each of our clients.',
        feature1: 'Expert team with 10+ years of experience',
        feature2: 'Leading and trusted technology',
        feature3: '24/7 support for all clients',
        feature4: 'Custom solutions tailored to your business',
        servicesTitle: 'Our Services',
        servicesSubtitle: 'Complete and integrated solutions for all your digital business transformation needs',
        webDev: 'Web Development',
        webDesc: 'Responsive and modern web applications with the latest technology, high performance, and user-friendly design',
        mobileApp: 'Mobile App Development',
        mobileDesc: 'Native mobile applications for iOS and Android with intuitive and attractive user experience',
        cloud: 'Cloud Solutions',
        cloudDesc: 'Scalable, secure, and cost-effective cloud infrastructure to support business growth',
        security: 'Cybersecurity',
        securityDesc: 'Enterprise-level data security with end-to-end encryption and international compliance standards',
        analytics: 'Data Analytics',
        analyticsDesc: 'In-depth data analysis to optimize business decisions and increase ROI',
        ai: 'AI & Automation',
        aiDesc: 'Artificial intelligence solutions for process automation and operational efficiency improvement',
        contactTitle: 'Contact Us',
        contactSubtitle: 'Have questions or want to start a project? Our team is ready to help you 24/7',
        fullName: 'Full Name',
        email: 'Email Address',
        message: 'Your Message',
        sendBtn: 'Send Message',
        errorEmpty: '⚠️ All fields must be filled!',
        errorEmail: '⚠️ Invalid email format!',
        successMsg: '✓ Thank you! Your message has been sent. Our team will contact you within 24 hours.',
        copyright: '© 2025 Crectly. A Comure Group Company. All rights reserved.',
        privacyPolicy: 'Privacy Policy'
    }
};

// App Controller
class App {
    constructor() {
        this.language = 'id';
        this.activeSection = 'home';
        this.formData = { name: '', email: '', message: '' };
        this.formMessage = '';
        this.formMessageType = '';
        this.render();
        this.setupScrollListener();
    }

    setLanguage(lang) {
        this.language = lang;
        this.render();
    }

    t(key) {
        return translations[this.language][key] || key;
    }

    navigateTo(section) {
        this.activeSection = section;
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => this.render(), 100);
    }

    setupScrollListener() {
        window.addEventListener('scroll', () => {
            const sections = ['home', 'about', 'services', 'contact'];
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        this.activeSection = section;
                        this.render();
                        break;
                    }
                }
            }
        });
    }

    handleInputChange(field, value) {
        this.formData[field] = value;
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, email, message } = this.formData;

        if (!name.trim() || !email.trim() || !message.trim()) {
            this.formMessage = this.t('errorEmpty');
            this.formMessageType = 'error';
            this.render();
            return;
        }

        if (!email.includes('@')) {
            this.formMessage = this.t('errorEmail');
            this.formMessageType = 'error';
            this.render();
            return;
        }

        this.formMessage = this.t('successMsg');
        this.formMessageType = 'success';
        this.formData = { name: '', email: '', message: '' };
        this.render();

        const form = document.querySelector('form');
        if (form) form.reset();

        setTimeout(() => {
            this.formMessage = '';
            this.formMessageType = '';
            this.render();
        }, 5000);
    }

    render() {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = this.getHTML();
    }

    getHTML() {
        return `
            ${this.getHeader()}
            ${this.getHeroSection()}
            ${this.getAboutSection()}
            ${this.getServicesSection()}
            ${this.getContactSection()}
            ${this.getFooter()}
        `;
    }

    getHeader() {
        const navItems = ['home', 'about', 'services', 'contact'];
        const navHTML = navItems.map(item => {
            const isActive = this.activeSection === item ? 'active' : '';
            const label = this.t(item);
            return `<a class="${isActive}" onclick="app.navigateTo('${item}')">${label}</a>`;
        }).join('');

        return `
            <header>
                <nav>
                    <div class="nav-left">
                        <a href="#" class="logo" onclick="app.navigateTo('home'); return false;">
                            <img src="Images/c_notext.svg" alt="Crectly Logo" class="logo-svg">
                            <span class="logo-text">Crectly</span>
                        </a>
                        <ul class="nav-links">
                            ${navHTML}
                        </ul>
                    </div>
                    <div class="lang-switcher">
                        <button class="lang-btn ${this.language === 'id' ? 'active' : ''}" onclick="app.setLanguage('id')">ID</button>
                        <button class="lang-btn ${this.language === 'en' ? 'active' : ''}" onclick="app.setLanguage('en')">EN</button>
                    </div>
                </nav>
            </header>
        `;
    }

    getHeroSection() {
        return `
            <section id="home" class="hero">
                <h1>${this.t('heroTitle')}</h1>
                <p>${this.t('heroDesc')}</p>
                <div class="hero-buttons">
                    <button class="btn btn-primary" onclick="app.navigateTo('contact')">${this.t('contactBtn')}</button>
                    <button class="btn btn-secondary" onclick="app.navigateTo('about')">${this.t('learnBtn')}</button>
                </div>
            </section>
        `;
    }

    getAboutSection() {
        return `
            <section id="about" class="about-section">
                <div class="container">
                    <h2 class="section-title">${this.t('aboutTitle')}</h2>
                    <div class="about-content">
                        <div class="about-text">
                            <h3>${this.t('aboutH3')}</h3>
                            <p>${this.t('aboutP1')}</p>
                            <p>${this.t('aboutP2')}</p>
                            <ul class="about-features">
                                <li>${this.t('feature1')}</li>
                                <li>${this.t('feature2')}</li>
                                <li>${this.t('feature3')}</li>
                                <li>${this.t('feature4')}</li>
                            </ul>
                        </div>
                        <div class="about-image">
                            <span>🎯 ${this.t('aboutTitle')}</span>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getServicesSection() {
        const services = [
            { icon: '💻', title: this.t('webDev'), desc: this.t('webDesc') },
            { icon: '📱', title: this.t('mobileApp'), desc: this.t('mobileDesc') },
            { icon: '☁️', title: this.t('cloud'), desc: this.t('cloudDesc') },
            { icon: '🔒', title: this.t('security'), desc: this.t('securityDesc') },
            { icon: '📊', title: this.t('analytics'), desc: this.t('analyticsDesc') },
            { icon: '🤖', title: this.t('ai'), desc: this.t('aiDesc') }
        ];

        const servicesHTML = services.map(service => `
            <div class="service-card">
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.desc}</p>
            </div>
        `).join('');

        return `
            <section id="services" class="services-section">
                <div class="container">
                    <h2 class="section-title">${this.t('servicesTitle')}</h2>
                    <p class="section-subtitle">${this.t('servicesSubtitle')}</p>
                    <div class="services-grid">
                        ${servicesHTML}
                    </div>
                </div>
            </section>
        `;
    }

    getContactSection() {
        const messageHTML = this.formMessage ? 
            `<div class="form-message ${this.formMessageType}">${this.formMessage}</div>` : '';

        return `
            <section id="contact" class="contact-section">
                <div class="container contact-container">
                    <h2 class="section-title">${this.t('contactTitle')}</h2>
                    <p class="section-subtitle">${this.t('contactSubtitle')}</p>
                    ${messageHTML}
                    <form onsubmit="app.handleSubmit(event)">
                        <div class="form-group">
                            <label for="name">${this.t('fullName')} *</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="${this.t('fullName')}"
                                required 
                                oninput="app.handleInputChange('name', this.value)"
                            >
                        </div>
                        <div class="form-group">
                            <label for="email">${this.t('email')} *</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="email@example.com"
                                required 
                                oninput="app.handleInputChange('email', this.value)"
                            >
                        </div>
                        <div class="form-group">
                            <label for="message">${this.t('message')} *</label>
                            <textarea 
                                id="message" 
                                placeholder="${this.t('message')}"
                                required 
                                oninput="app.handleInputChange('message', this.value)"
                            ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">${this.t('sendBtn')}</button>
                    </form>
                </div>
            </section>
        `;
    }

    getFooter() {
        return `
            <footer>
                <div class="footer-content">
                    <div class="footer-social">
                        <a href="#" class="social-icon" title="Facebook">f</a>
                        <a href="#" class="social-icon" title="Twitter">𝕏</a>
                        <a href="#" class="social-icon" title="LinkedIn">in</a>
                        <a href="#" class="social-icon" title="Instagram">ig</a>
                    </div>
                    <div class="footer-links">
                        <a href="#home">${this.t('home')}</a>
                        <a href="#about">${this.t('about')}</a>
                        <a href="#services">${this.t('services')}</a>
                        <a href="#contact">${this.t('contact')}</a>
                        <a href="#">${this.t('privacyPolicy')}</a>
                    </div>
                    <div class="footer-bottom">
                        <p>${this.t('copyright')}</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Initialize App
const app = new App();
