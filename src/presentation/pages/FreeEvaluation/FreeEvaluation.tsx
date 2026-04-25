import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiUpload, FiX } from 'react-icons/fi';
import { CONTACT_INFO } from '../../../infrastructure/data/content';
import './FreeEvaluation.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function FreeEvaluation() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    if (!selectedImage) {
      alert('Please upload an image of your foot condition');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const base64Image = await fileToBase64(selectedImage);
      
      const emailSubject = formData.subject 
        ? `Free Evaluation Request: ${formData.subject}`
        : 'Free Evaluation Request';
      
      const emailBody = `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
${formData.subject ? `Subject: ${formData.subject}` : ''}

Message:
${formData.message}
      `.trim();

      let response;
      try {
        response = await fetch('/api/sendMail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: CONTACT_INFO.email,
            subject: emailSubject,
            text: emailBody,
            attachment: {
              filename: selectedImage.name,
              base64: base64Image,
            },
          }),
        });
      } catch (fetchError) {
        console.error('Fetch error:', fetchError);
        throw new Error('Network error: Could not reach server');
      }

      const result = await response.json().catch(() => ({ error: 'Invalid response' }));
      console.log('Response:', response.status, result);

      if (!response.ok) {
        if (result.code === 'SENDER_NOT_VERIFIED') {
          throw new Error('Email configuration error. Please contact the administrator.');
        }
        throw new Error(result.error || `Server error: ${response.status}`);
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      });
      setSelectedImage(null);
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      alert('Your evaluation request has been sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('Failed to send your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
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
            <p className="hero-subtitle">Fill out the form below</p>
          </motion.div>
        </div>
      </section>

      <section className="evaluation-content">
        <div className="container">
          <div className="evaluation-box">
            <form onSubmit={handleSubmit} className="evaluation-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                />
              </div>

              <div className="form-group">
                <label>Upload Image (Required) *</label>
                <div className="upload-section" onClick={() => fileInputRef.current?.click()}>
                  {previewUrl ? (
                    <div className="image-preview">
                      <img src={previewUrl} alt="Preview" />
                      <button type="button" className="remove-btn" onClick={(e) => { e.stopPropagation(); handleRemoveImage(); }}>
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
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit for Free Evaluation'}
              </button>

              {submitStatus === 'success' && (
                <p className="note" style={{ color: '#21A082' }}>
                  Your evaluation request has been sent successfully. We will contact you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}