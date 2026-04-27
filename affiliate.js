/**
 * VULTURE 10K ENGINE - Affiliate & Content Logic
 * Project: docuflow (2026)
 * ID: benpalmarini6380
 */

const VultureEngine = {
    config: {
        affiliateLink: "https://pandadoc.partnerlinks.io/benpalmarini6380",
        trackingID: "benpalmarini6380",
        projectName: "docuflow",
        protocol: "Vulture-10K"
    },

    init: function() {
        console.log(`[${this.config.protocol}] Engine Initialized...`);
        this.injectAffiliateLinks();
        this.setupRadicalTransparency();
        this.trackEngagements();
    },

    /**
     * Finds every element with the class 'vulture-link' 
     * and ensures it points to your PandaDoc ID.
     */
    injectAffiliateLinks: function() {
        const links = document.querySelectorAll('.vulture-link, .btn-main, .inline-cta a');
        links.forEach(link => {
            link.href = this.config.affiliateLink;
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener dotted sponsored');
        });
    },

    /**
     * Injects a dynamic disclosure to satisfy FTC/Global 
     * regulations while maintaining high-tech branding.
     */
    setupRadicalTransparency: function() {
        const footer = document.querySelector('footer');
        if (footer) {
            const disclosure = document.createElement('div');
            disclosure.style.cssText = "font-size: 10px; opacity: 0.5; margin-top: 20px; text-transform: uppercase; letter-spacing: 1px;";
            disclosure.innerHTML = `Transparency Protocol: This node contains affiliate links for ${this.config.projectName}. Node ID: ${this.config.trackingID}`;
            footer.appendChild(disclosure);
        }
    },

    /**
     * Simple event tracker to log clicks in the console 
     * (helps during your manual QA of the 10,000 pages).
     */
    trackEngagements: function() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('a') && e.target.closest('a').href.includes('partnerlinks')) {
                console.log(`[${this.config.protocol}] Conversion Path Initiated: ${window.location.pathname}`);
            }
        });
    }
};

// Fire the engine on load
window.addEventListener('DOMContentLoaded', () => VultureEngine.init());
