/* ─── Contact: clicking the email button copies the address ───
   The mailto: link stays as the href, so "copy link" / middle-click still work. */
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Older browsers, or the Clipboard API blocked (e.g. insecure context)
    const field = el('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.append(field);
    field.select();
    document.execCommand('copy');
    field.remove();
  }
}

function setupEmailCopy() {
  document.querySelectorAll('.copy-email').forEach((link) => {
    const toast = link.querySelector('.copy-email__toast');
    let hideTimer;
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      await copyText(PROFILE.email);
      toast.textContent = ui('emailCopied');
      link.classList.add('is-copied');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => link.classList.remove('is-copied'), 2000);
    });
  });
}
