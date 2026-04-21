import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiX } from 'react-icons/fi';
import { CONTACT_INFO } from '../../../infrastructure/data/content';
import './FreeEvaluation.css';

export default function FreeEvaluation() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      alert('Please select an image first');
      return;
    }

    const phoneNumber = CONTACT_INFO.whatsappNumber.replace(/\D/g, '');
    const message = 'Hi! I would like to request a free evaluation for my foot condition. I have attached an image for review.';
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <section className="evaluation-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h1>Free Evaluation/Consultation</h1>
            <p className="hero-subtitle">Upload Picture Below</p>
          </motion.div>
        </div>
      </section>

      <section className="evaluation-content">
        <div className="container">
          <div className="evaluation-box">
            <div className="upload-section" onClick={() => fileInputRef.current?.click()}>
              {previewUrl ? (
                <div className="image-preview">
                  <img src={previewUrl} alt="Preview" />
                  <button className="remove-btn" onClick={(e) => { e.stopPropagation(); handleRemoveImage(); }}>
                    <FiX size={20} />
                  </button>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <FiUpload size={48} />
                  <p>Click to upload an image</p>
                  <span>PNG, JPG, JPEG up to 10MB</span>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>

            <div className="upload-info">
              <p>Take a clear photo of your foot/feet concern area and upload it for a free evaluation by our nursing team.</p>
            </div>

            <button 
              className="btn btn-primary submit-btn" 
              onClick={handleSubmit}
              disabled={!selectedImage}
            >
              Submit for Free Evaluation
            </button>

            <p className="note">
              Note: After submission, you will be redirected to WhatsApp to send the image directly to our team.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}