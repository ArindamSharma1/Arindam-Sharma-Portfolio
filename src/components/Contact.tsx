import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO, SOCIALS } from '../constants';
import { Section } from './Section';

type Status = 'idle' | 'sending' | 'success' | 'error';

const useLocalTime = (timeZone: string) => {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date());
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);

  return time;
};

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    }
  };

  return (
    <button type="button" onClick={copy} className="group block text-left">
      <span className="block break-all font-display text-3xl font-extrabold leading-tight transition-colors group-hover:text-cobalt md:text-5xl">
        {CONTACT_INFO.email}
      </span>
      <span className="mt-2 block font-display text-sm font-semibold text-slate" role="status">
        {copied ? 'Copied to clipboard' : 'Click to copy'}
      </span>
    </button>
  );
};

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const time = useLocalTime(CONTACT_INFO.timeZone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      formRef.current.reset();
      setStatus('success');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <Section id="contact" title="Contact" meta={`${CONTACT_INFO.location}, ${time} local time`}>
      <p className="mb-6 font-display text-xl font-semibold">Open to full-time roles and collaborations.</p>
      <CopyEmail />

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-display font-semibold">
        <li>
          <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a>
        </li>
        {SOCIALS.filter((s) => s.label !== 'Email').map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-14 grid max-w-3xl gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="user_name" className="mb-1 block font-display text-sm font-semibold">
            Your name
          </label>
          <input id="user_name" name="user_name" type="text" autoComplete="name" required className="field" />
        </div>
        <div>
          <label htmlFor="user_email" className="mb-1 block font-display text-sm font-semibold">
            Your email
          </label>
          <input id="user_email" name="user_email" type="email" autoComplete="email" required className="field" />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-1 block font-display text-sm font-semibold">
            Message
          </label>
          <textarea id="message" name="message" rows={4} required className="field resize-y" />
        </div>

        <div className="flex flex-wrap items-center gap-5 md:col-span-2">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-ink px-7 py-3 font-display font-semibold text-paper transition-colors hover:bg-cobalt disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending message' : 'Send message'}
          </button>
          <p role="status" aria-live="polite" className="font-display text-sm font-semibold">
            {status === 'success' && 'Message sent. I will reply by email.'}
            {status === 'error' && (
              <span className="text-red-700 dark:text-red-300">
                The message did not send. Try again, or email me directly.
              </span>
            )}
          </p>
        </div>
      </form>
    </Section>
  );
};
