// eCourse — κοινή διαδραστικότητα
document.addEventListener('DOMContentLoaded', function () {
  // Toggle "Διάβασε εδώ τα λόγια της Ζωής"
  document.querySelectorAll('.transcript-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('aria-controls');
      var body = document.getElementById(targetId);
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (body) body.classList.toggle('open');
      btn.textContent = (!expanded ? '▲ Κρύψε τα λόγια της Ζωής' : '▶️ Διάβασε εδώ τα λόγια της Ζωής');
    });
  });

  // Mark current page in nav
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current) a.setAttribute('aria-current', 'page');
  });

  // Simple "mark mission complete" -> just visual feedback + enable next button (demo only, no backend)
  document.querySelectorAll('.btn-complete').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.textContent = '✓ Ολοκληρώθηκε!';
      btn.setAttribute('aria-disabled', 'true');
      btn.style.opacity = '0.7';
    });
  });
});
