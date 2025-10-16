// ============================================================================
// ProductionResumeDownload.jsx - Best solution for hosted websites
// ============================================================================
import React, { useState } from 'react';
import { Download, AlertCircle, CheckCircle } from 'lucide-react';

const ProductionResumeDownload = () => {
  const [downloadStatus, setDownloadStatus] = useState('idle'); // idle, downloading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleDownload = async () => {
    setDownloadStatus('downloading');
    setErrorMessage('');

    try {
      // First, check if the file exists
      const checkResponse = await fetch('/resume.pdf', { method: 'HEAD' });
      
      if (!checkResponse.ok) {
        throw new Error('Resume file not found on server');
      }

      // If file exists, proceed with download
      const response = await fetch('/resume.pdf');
      
      if (!response.ok) {
        throw new Error('Failed to fetch resume file');
      }

      // Get the blob data
      const blob = await response.blob();
      
      // Verify it's actually a PDF
      if (blob.type !== 'application/pdf' && !blob.type.includes('pdf')) {
        console.warn('File might not be a valid PDF');
      }

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Tarun_Kullolli_Resume.pdf';
      link.setAttribute('target', '_blank');
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setDownloadStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => setDownloadStatus('idle'), 3000);

    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('error');
      setErrorMessage(error.message);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setDownloadStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const getButtonContent = () => {
    switch (downloadStatus) {
      case 'downloading':
        return (
          <>
            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
            Downloading...
          </>
        );
      case 'success':
        return (
          <>
            <CheckCircle size={20} />
            Downloaded!
          </>
        );
      case 'error':
        return (
          <>
            <AlertCircle size={20} />
            Try Again
          </>
        );
      default:
        return (
          <>
            <Download size={20} />
            Download Resume
          </>
        );
    }
  };

  const getButtonStyle = () => {
    switch (downloadStatus) {
      case 'success':
        return 'bg-gradient-to-r from-green-400 to-emerald-500';
      case 'error':
        return 'bg-gradient-to-r from-red-400 to-pink-500';
      default:
        return 'bg-gradient-to-r from-emerald-400 to-cyan-400';
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleDownload}
        disabled={downloadStatus === 'downloading'}
        className={`relative px-8 py-4 font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden group text-black shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${getButtonStyle()}`}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        <span className="relative z-10 flex items-center gap-2">
          {getButtonContent()}
        </span>
      </button>

      {/* Error Message */}
      {downloadStatus === 'error' && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
          <div className="flex items-center gap-2 mb-1">
            <AlertCircle size={16} />
            <span className="font-semibold">Download Failed</span>
          </div>
          <p>{errorMessage}</p>
          <p className="mt-1 text-red-300">
            Please contact me directly: <a href="mailto:tarun@example.com" className="underline">tarun@example.com</a>
          </p>
        </div>
      )}

      {/* Success Message */}
      {downloadStatus === 'success' && (
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 text-green-400 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} />
            <span>Resume downloaded successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductionResumeDownload;