/* ===== COLOMBIA 5.0 · script.js (compartido) ===== */

// ── Idioma ────────────────────────────────────────────────────
function setLang(lang) {
  alert("Idioma: " + lang);

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-es]').forEach(function(el) {
    var text = el.getAttribute('data-' + lang);
    if (text !== null) el.innerHTML = text;
  });
}

  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    var isActive = btn.id === 'btn-' + lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
}

// ── Imagen rota: fallback ─────────────────────────────────────
function imgErr(img) {
  var alt = img.alt || 'Foto';
  img.onerror = null;
  img.style.display = 'none';
  var div = document.createElement('div');
  div.style.cssText =
    'width:100%;height:100%;display:flex;flex-direction:column;' +
    'align-items:center;justify-content:center;background:#0a1520;' +
    'gap:8px;padding:20px;text-align:center;';
  div.innerHTML =
    '<span style="font-size:2.5rem">📷</span>' +
    '<span style="color:#00d2ff;font-family:monospace;font-size:.85rem;">' + alt + '</span>';
  img.parentNode.appendChild(div);
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  var saved = localStorage.getItem('col50_lang') || 'es';
  setLang(saved);
});
