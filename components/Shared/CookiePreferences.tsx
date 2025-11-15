"use client";
import React, { useEffect, useState } from 'react';

type Prefs = {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const DEFAULT: Prefs = { functional: true, analytics: false, marketing: false };

const COOKIE_NAME = 'ttd_cookie_prefs';

export default function CookiePreferences() {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT);

  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' && (localStorage.getItem(COOKIE_NAME) || null);
      if (raw) setPrefs(JSON.parse(raw));
    } catch (err) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(COOKIE_NAME, JSON.stringify(prefs));
    } catch (err) {
      // ignore
    }
  }, [prefs]);

  const toggle = (k: keyof Prefs) => setPrefs((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div className="cookie-preferences p-4 border rounded bg-white">
      <h3>Cookie Preferences</h3>
      <p>Choose which cookies you allow us to use.</p>
      <div>
        <label>
          <input type="checkbox" checked={prefs.functional} onChange={() => toggle('functional')} /> Functional (required)
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={prefs.analytics} onChange={() => toggle('analytics')} /> Analytics
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={prefs.marketing} onChange={() => toggle('marketing')} /> Marketing
        </label>
      </div>
    </div>
  );
}
