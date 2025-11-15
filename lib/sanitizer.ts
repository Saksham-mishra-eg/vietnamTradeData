// Minimal sanitizer: escapes HTML special characters. This intentionally avoids any optional
// native DOMPurify dependency so the project builds cleanly in environments where
// `isomorphic-dompurify` isn't installed. For stronger sanitization install
// `isomorphic-dompurify` and replace this function.
export function sanitizeHtml(input: unknown): string {
  if (input == null) return '';
  const s = typeof input === 'string' ? input : String(input);
  // Replace characters that are significant in HTML with safe entities
  return s.replace(/[&<>"'`]/g, (c) => {
    switch (c) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      case '`':
        return '&#96;';
      default:
        return c;
    }
  });
}
