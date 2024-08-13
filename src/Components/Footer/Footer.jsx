import React, { useState } from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer__box">
                <div class="footer__row">
                    <div class="footer__section">
                        <a href="https://app.brandmark.io/v3/" target="_blank" class="footer__section-title footer__section-title--style1">Create your logo</a>
                        <div class="footer__section-note">Try Brandmark for free, no account needed</div>
                    </div>

                    <div class="footer__section">
                        <a href="mailto:support@brandmark.io" class="footer__section-title footer__section-title--style3">Support</a>
                        <div class="footer__section-note">Have questions or need help? Start here.</div>
                    </div>
                    <div class="footer__section">
                        <a href="/tools/" class="footer__section-title footer__section-title--style2">Tools</a>
                        <div class="footer__section-note">Check out our free tools for color, font and logo design</div>
                    </div>

                    <div class="footer__section">
                        <a href="/terms.html" target="_blank" class="footer__section-title" style={{ color: "#8e999b", marginRight: "3em" }}>Terms of service</a>
                    </div>

                    <div class="footer__section">
                        <a href="/privacy.html" target="_blank" class="footer__section-title" style={{ color: "#8e999b" }}>Privacy policy</a>
                    </div>

                </div>

                <div class="footer__decor">
                    <div class="footer__decor-item footer__decor-item--s1"></div>
                    <div class="footer__decor-item footer__decor-item--s2"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer