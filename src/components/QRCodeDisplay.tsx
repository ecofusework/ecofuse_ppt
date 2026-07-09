import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Download, QrCode, Share2, Link2, Check } from 'lucide-react';

export function QRCodeDisplay() {
  const [dataUrl, setDataUrl] = useState('');
  const [blob, setBlob] = useState<Blob | null>(null);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const siteUrl = typeof window !== 'undefined' ? window.location.href : 'https://ecofuse.com';

  useEffect(() => {
    QRCode.toDataURL(siteUrl, {
      width: 400,
      margin: 2,
      color: { dark: '#059669', light: '#ffffff' },
      errorCorrectionLevel: 'H',
    }).then((url) => {
      setDataUrl(url);
      fetch(url).then((r) => r.blob()).then(setBlob).catch(() => {});
    }).catch(() => {});
  }, [siteUrl]);

  const handleDownload = () => {
    if (!dataUrl) return;
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'ecofuse-qr-code.png';
    link.click();
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = siteUrl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    const shareData: ShareData = {
      title: 'EcoFuse — Fusing Waste into a Sustainable Future',
      text: 'Check out EcoFuse — a student-led startup transforming discarded LDPE plastic bags into durable composite sheets!',
      url: siteUrl,
    };

    if (blob && navigator.canShare && navigator.canShare({ files: [new File([blob], 'ecofuse-qr-code.png', { type: 'image/png' })] })) {
      try {
        await navigator.share({
          ...shareData,
          files: [new File([blob], 'ecofuse-qr-code.png', { type: 'image/png' })],
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        // user cancelled — no action needed
      }
    } else if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        // user cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="glass-card p-7 text-center group">
      <div className="flex items-center gap-2 mb-5 justify-center">
        <QrCode className="w-5 h-5 text-primary-500" />
        <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">Scan & Share</h3>
      </div>

      {dataUrl ? (
        <div className="p-4 rounded-2xl bg-white shadow-lg inline-block">
          <img src={dataUrl} alt="QR code for EcoFuse website" className="w-48 h-48 mx-auto" />
        </div>
      ) : (
        <div className="w-48 h-48 mx-auto rounded-2xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
      )}

      <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 mb-4">
        Point your phone camera at the code to open this page
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <button
          onClick={handleShare}
          disabled={!dataUrl}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50"
        >
          {shared ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
          {shared ? 'Shared!' : 'Share'}
        </button>

        <button
          onClick={handleDownload}
          disabled={!dataUrl}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50"
        >
          <Download className="w-4 h-4" />
          Download
        </button>

        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {copied ? <Check className="w-4 h-4 text-success-500" /> : <Link2 className="w-4 h-4" />}
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
    </div>
  );
}
