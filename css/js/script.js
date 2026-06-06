function imgErr(img) {
        var alt = img.alt || 'Imagen';
        img.onerror = null;
        img.style.display = 'none';
        var div = document.createElement('div');
        div.style.cssText = 'width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#0a1520;gap:8px;padding:20px;text-align:center;';
        div.innerHTML = '<span style="font-size:2rem">🖼️</span><span style="color:#00d2ff;font-family:monospace;font-size:0.9rem;">' + alt + '</span><span style="color:#4a7a90;font-size:0.75rem;">Imagen no disponible sin internet</span>';
        img.parentNode.appendChild(div);
    }

    /* ── Language system ── */
    let currentLang = 'es';

    function setLang(lang) {
        if (lang === currentLang) return;
        currentLang = lang;

        // Update button states
        document.getElementById('btn-es').classList.toggle('active', lang === 'es');
        document.getElementById('btn-en').classList.toggle('active', lang === 'en');
        document.getElementById('btn-es').setAttribute('aria-pressed', lang === 'es');
        document.getElementById('btn-en').setAttribute('aria-pressed', lang === 'en');

        // Update html lang attribute
        document.documentElement.lang = lang;

        // Update all elements with data-es / data-en
        document.querySelectorAll('[data-es][data-en]').forEach(el => {
            el.innerHTML = el.getAttribute('data-' + lang);
        });

        // Update page title
        document.title = lang === 'es' ? 'Temas | Topics' : 'Topics | Temas';
    }

    /* ── Keyboard shortcut: Alt+L to toggle language ── */
    document.addEventListener('keydown', e => {
        if (e.altKey && e.key.toLowerCase() === 'l') {
            setLang(currentLang === 'es' ? 'en' : 'es');
        }
    });
